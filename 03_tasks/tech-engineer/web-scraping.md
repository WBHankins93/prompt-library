# Web Scraping for Prospect Discovery

> Using Python to find local businesses that need new or better websites.
> Practical, legal-aware, and built for lead generation — not data hoarding.

---

## The Purpose

You're looking for businesses that either don't have a website, have a visibly outdated one, or have a site that's hurting them more than helping. These are your prospects. Scraping is the discovery mechanism — the goal is a qualified lead list, not a data dump.

This is not about scraping at scale for resale or building a competing directory. You're gathering publicly available business information to offer a service those businesses actually need.

---

## Legal and Ethical Framework

### What You Can Do

Scraping publicly available business information (name, address, phone, website URL) from public directories and search results is generally permissible when done responsibly. Key factors that keep you in safe territory:

- You're accessing publicly listed information (not behind logins or paywalls)
- You're using the data for direct business outreach (not reselling it)
- You're respecting rate limits and not degrading the service
- You're not circumventing technical access controls
- You're collecting business contact info, not personal/consumer data

### What to Avoid

- **Scraping behind authentication** — If you need to log in to access it, don't scrape it
- **Ignoring robots.txt** — Read it. Respect disallowed paths. It's not legally binding everywhere, but violating it weakens any defense you'd need
- **Hammering servers** — Aggressive request rates get you blocked and can constitute a denial-of-service. Use delays
- **Scraping personal data** — Business listings are fair game. Scraping individuals' personal information triggers GDPR, CCPA, and other privacy regulations
- **Storing more than you need** — Collect business name, location, phone, website URL, and maybe category. You don't need reviews, photos, or user-generated content

### Google-Specific Considerations

Google's Terms of Service prohibit automated scraping of their search results. In practice, this means:

**Option A: Use Google's APIs (cleanest path)**
- Google Maps Platform / Places API — pay-per-request, fully sanctioned, structured data
- Costs ~$0.017-0.032 per request depending on the endpoint
- Best for: targeted, repeatable prospecting in specific markets

**Option B: Scrape alternative directories (lower risk)**
- Yelp, Yellow Pages, BBB, industry-specific directories
- Still check their ToS, but enforcement posture varies
- Better scraping targets than Google directly

**Option C: Scrape Google search results (highest risk, highest reward)**
- Technically violates Google ToS
- Use with caution: low volume, generous delays, rotating user agents
- Expect to get blocked — build retry logic and don't depend on it
- SerpAPI or ScraperAPI abstract this away (paid services, they handle the compliance risk)

**Recommended approach:** Start with Google Places API for structured data. Supplement with directory scraping for coverage. Use direct Google scraping only when the APIs don't cover your use case.

---

## Technical Stack

### Core Libraries

```
scrapy           # Framework for structured, large-scale scraping
beautifulsoup4   # HTML parsing for simpler/one-off scraping
requests         # HTTP requests (use with BS4)
lxml             # Fast HTML/XML parser (backend for BS4)
pandas           # Data cleaning and export
```

### Optional / Situational

```
selenium         # Browser automation for JS-rendered pages
playwright       # Modern alternative to Selenium (faster, more reliable)
fake-useragent   # Rotating user agent strings
scrapy-rotating-proxies  # Proxy rotation for Scrapy
googlemaps       # Official Google Maps Python client
```

### Install

```bash
pip install scrapy beautifulsoup4 requests lxml pandas
pip install google-api-python-client  # For Google Places API
```

---

## Approach 1: Google Places API (Recommended Starting Point)

The cleanest, most reliable method. You pay per request, get structured data, and don't risk getting blocked.

### Setup

1. Create a Google Cloud project
2. Enable the Places API
3. Generate an API key
4. Set key restrictions (HTTP referrer or IP restrictions)

### Basic Search Script

```python
import googlemaps
import pandas as pd
from time import sleep

API_KEY = "your-api-key-here"  # Load from env in practice
gmaps = googlemaps.Client(key=API_KEY)

def search_businesses(query, location, radius=10000):
    """
    Search for businesses near a location.

    Args:
        query: e.g., "plumber", "restaurant", "auto repair"
        location: (lat, lng) tuple
        radius: search radius in meters

    Returns:
        List of business dicts
    """
    results = []
    response = gmaps.places(query=query, location=location, radius=radius)

    results.extend(response.get("results", []))

    # Handle pagination (up to 60 results per query)
    while "next_page_token" in response:
        sleep(2)  # Required delay for page token to activate
        response = gmaps.places(
            query=query,
            location=location,
            radius=radius,
            page_token=response["next_page_token"]
        )
        results.extend(response.get("results", []))

    return results


def get_business_details(place_id):
    """Get detailed info including website for a single business."""
    details = gmaps.place(
        place_id=place_id,
        fields=["name", "formatted_address", "formatted_phone_number",
                "website", "url", "business_status", "rating", "types"]
    )
    return details.get("result", {})


def find_prospects(query, location, radius=10000):
    """
    Find businesses that might need a website.
    Returns businesses with no website or a potentially outdated one.
    """
    businesses = search_businesses(query, location, radius)
    prospects = []

    for biz in businesses:
        details = get_business_details(biz["place_id"])
        sleep(0.1)  # Be respectful with API calls

        website = details.get("website", None)

        prospect = {
            "name": details.get("name"),
            "address": details.get("formatted_address"),
            "phone": details.get("formatted_phone_number"),
            "website": website,
            "google_maps_url": details.get("url"),
            "rating": details.get("rating"),
            "has_website": website is not None,
            "category": ", ".join(details.get("types", []))
        }
        prospects.append(prospect)

    return prospects


# Example usage
if __name__ == "__main__":
    # Search for plumbers in Nashville, TN
    location = (36.1627, -86.7816)
    prospects = find_prospects("plumber", location, radius=20000)

    df = pd.DataFrame(prospects)

    # Filter: businesses without websites are top prospects
    no_website = df[df["has_website"] == False]
    has_website = df[df["has_website"] == True]

    print(f"Found {len(no_website)} businesses without websites")
    print(f"Found {len(has_website)} businesses with websites (check quality)")

    df.to_csv("prospects_plumbers_nashville.csv", index=False)
```

### Cost Estimate

- Places Search: ~$0.032 per request
- Place Details: ~$0.017 per request
- For 200 businesses with details: ~$10
- Monthly budget of $50-100 covers most freelance prospecting needs

---

## Approach 2: Directory Scraping with Scrapy

For supplementing API data or when you want to scrape directories like Yelp or Yellow Pages.

### Scrapy Spider Template

```python
import scrapy
from scrapy import signals
from urllib.parse import urlencode
import json


class YellowPagesSpider(scrapy.Spider):
    """
    Example spider for Yellow Pages.
    Adjust selectors when the site updates its markup.
    """
    name = "yellowpages"

    custom_settings = {
        "DOWNLOAD_DELAY": 3,            # 3 seconds between requests
        "RANDOMIZE_DOWNLOAD_DELAY": True,
        "CONCURRENT_REQUESTS": 1,        # One at a time
        "ROBOTSTXT_OBEY": True,
        "USER_AGENT": "Mozilla/5.0 (compatible; ProspectBot/1.0; +https://yoursite.com/bot)",
        "FEEDS": {
            "prospects.csv": {"format": "csv"},
        },
        "LOG_LEVEL": "INFO",
    }

    def __init__(self, query="plumber", location="Nashville, TN", pages=3, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.query = query
        self.location = location
        self.pages = int(pages)

    def start_requests(self):
        for page in range(1, self.pages + 1):
            params = {
                "search_terms": self.query,
                "geo_location_terms": self.location,
                "page": page,
            }
            url = f"https://www.yellowpages.com/search?{urlencode(params)}"
            yield scrapy.Request(url, callback=self.parse)

    def parse(self, response):
        listings = response.css("div.result")

        for listing in listings:
            name = listing.css("a.business-name span::text").get()
            phone = listing.css("div.phones::text").get()
            address = listing.css("div.street-address::text").get()
            city_state = listing.css("div.locality::text").get()
            website_link = listing.css("a.track-visit-website::attr(href)").get()
            categories = listing.css("div.categories a::text").getall()

            yield {
                "name": name,
                "phone": phone.strip() if phone else None,
                "address": f"{address}, {city_state}" if address else city_state,
                "website": website_link,
                "has_website": website_link is not None,
                "categories": ", ".join(categories),
                "source": "yellowpages",
            }
```

### Running the Spider

```bash
# Basic run
scrapy crawl yellowpages -a query="plumber" -a location="Nashville, TN" -a pages=5

# Output to CSV
scrapy crawl yellowpages -a query="plumber" -a location="Nashville, TN" -o prospects.csv
```

---

## Approach 3: Simple Requests + BeautifulSoup

For quick, one-off scraping of smaller directories or checking individual business websites.

```python
import requests
from bs4 import BeautifulSoup
import pandas as pd
from time import sleep
import random


def check_website_quality(url, timeout=10):
    """
    Quick check if a business website looks outdated or broken.
    Returns a dict of quality signals.
    """
    signals = {
        "url": url,
        "reachable": False,
        "uses_https": url.startswith("https"),
        "has_viewport_meta": False,
        "has_modern_doctype": False,
        "loads_quickly": False,
        "potential_prospect": False,
    }

    try:
        resp = requests.get(url, timeout=timeout, allow_redirects=True)
        signals["reachable"] = resp.status_code == 200
        signals["loads_quickly"] = resp.elapsed.total_seconds() < 5

        if resp.status_code == 200:
            soup = BeautifulSoup(resp.text, "lxml")

            # Check for mobile responsiveness signal
            viewport = soup.find("meta", attrs={"name": "viewport"})
            signals["has_viewport_meta"] = viewport is not None

            # Check for modern HTML
            signals["has_modern_doctype"] = "<!doctype html>" in resp.text[:100].lower()

            # A site that's not mobile-friendly in 2026 is a prospect
            signals["potential_prospect"] = not signals["has_viewport_meta"]

    except (requests.RequestException, Exception):
        # Site is unreachable — strong prospect signal
        signals["potential_prospect"] = True

    return signals


def audit_prospect_list(csv_path):
    """
    Take a CSV of businesses with websites and check site quality.
    """
    df = pd.read_csv(csv_path)
    websites = df[df["has_website"] == True]

    quality_results = []
    for _, row in websites.iterrows():
        url = row["website"]
        if pd.notna(url):
            result = check_website_quality(url)
            result["business_name"] = row["name"]
            quality_results.append(result)
            sleep(random.uniform(1, 3))  # Polite delay

    quality_df = pd.DataFrame(quality_results)
    prospects = quality_df[quality_df["potential_prospect"] == True]

    return prospects
```

---

## Data Pipeline

### Workflow

1. **Collect** — Run Google Places API queries or Scrapy spiders for target markets/categories
2. **Deduplicate** — Match on business name + address (fuzzy matching with `thefuzz` library)
3. **Enrich** — Check websites for quality signals (mobile, speed, SSL)
4. **Score** — Rank prospects: no website > broken website > outdated website > modern website
5. **Export** — CSV or directly into your CRM

### Deduplication

```python
from thefuzz import fuzz

def deduplicate(df, name_col="name", address_col="address", threshold=85):
    """Remove near-duplicate entries based on fuzzy name + address matching."""
    seen = []
    unique_indices = []

    for idx, row in df.iterrows():
        is_duplicate = False
        for seen_row in seen:
            name_score = fuzz.ratio(
                str(row[name_col]).lower(),
                str(seen_row[name_col]).lower()
            )
            addr_score = fuzz.ratio(
                str(row[address_col]).lower(),
                str(seen_row[address_col]).lower()
            )
            if name_score > threshold and addr_score > threshold:
                is_duplicate = True
                break

        if not is_duplicate:
            seen.append(row)
            unique_indices.append(idx)

    return df.loc[unique_indices]
```

### Prospect Scoring

```python
def score_prospect(row):
    """
    Score a prospect 1-10 based on how likely they need a website.
    Higher = better prospect.
    """
    score = 0

    if not row.get("has_website"):
        score += 8  # No website at all — strongest signal
    elif not row.get("reachable", True):
        score += 7  # Website exists but is broken
    elif not row.get("has_viewport_meta", True):
        score += 5  # Not mobile-friendly
    elif not row.get("uses_https", True):
        score += 3  # No HTTPS

    # Boost for businesses with ratings (active, real businesses)
    if row.get("rating") and row["rating"] >= 3.5:
        score += 1

    # Boost for high-value categories
    high_value = ["contractor", "plumber", "lawyer", "dentist", "restaurant", "auto_repair"]
    categories = str(row.get("categories", "")).lower()
    if any(cat in categories for cat in high_value):
        score += 1

    return min(score, 10)
```

---

## Rate Limiting and Politeness

These are non-negotiable regardless of which approach you use.

- **Minimum 2-3 second delay** between requests to any single domain
- **Randomize delays** — uniform spacing looks automated; jitter looks human
- **Respect `robots.txt`** — Scrapy does this by default (`ROBOTSTXT_OBEY = True`)
- **Identify yourself** — Set a descriptive User-Agent with a contact URL
- **Back off on errors** — If you get 429 (rate limited) or 503, stop and wait. Don't retry aggressively
- **Cap your volume** — For prospecting, you rarely need more than a few hundred results per market. This isn't a data harvesting operation
- **Run during off-peak hours** — Less likely to impact the target service

---

## Storage and Data Hygiene

- Store prospect data in CSV or a simple SQLite database — you don't need Postgres for a lead list
- Delete data for businesses you've contacted and who declined (don't build a permanent database of businesses who said no)
- Don't store data you don't use — if you're not using review text or photos, don't collect them
- Back up your prospect lists — a good lead list is worth real money

---

## Checklist

- [ ] Decided on primary data source (Google Places API recommended)
- [ ] API keys stored in environment variables
- [ ] Rate limiting configured (2-3s minimum delay)
- [ ] robots.txt respected in spider config
- [ ] User-Agent identifies your bot and includes contact info
- [ ] Deduplication pipeline in place
- [ ] Website quality checker built and tested
- [ ] Prospect scoring function calibrated
- [ ] Export format decided (CSV to start)
- [ ] Data retention policy defined (delete what you don't need)
