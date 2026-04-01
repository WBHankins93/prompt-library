# Monitoring and Upkeep

> Keeping sites alive after launch. The part most freelancers neglect and most clients don't know they need.

---

## Why Post-Launch Matters

A website that isn't monitored will eventually break. SSL certs expire, dependencies get vulnerabilities, hosting providers change APIs, PHP versions get deprecated, and clients install plugins that conflict with everything. If you launch it, you should either maintain it or hand off maintenance clearly.

Post-launch maintenance is also recurring revenue. A $50-150/month maintenance plan across 20 clients is $12,000-36,000/year for work that takes a few hours per month when automated properly.

---

## Monitoring: What to Watch

### Uptime Monitoring

Know when a site goes down before the client does. Non-negotiable.

**Tools (free tier is sufficient for most):**
- UptimeRobot (50 monitors free, 5-min intervals)
- Better Stack (formerly Better Uptime)
- Pingdom

**What to monitor:**
- The main URL (homepage)
- Any critical API endpoints
- The CMS admin panel (WordPress admin, etc.)

**Alert routing:** Email for non-critical, SMS/Slack for downtime. Don't set up alerts you'll ignore — alert fatigue is worse than no alerts.

### SSL Certificate Monitoring

Let's Encrypt certs expire every 90 days. Auto-renewal usually works. When it doesn't, the site shows a scary browser warning and the client calls you in a panic.

**Monitor cert expiration:** Most uptime tools check this automatically. Set an alert for 14 days before expiry so you have time to fix failed renewals.

### Performance Monitoring

Slow sites lose traffic and rankings. Track performance over time, not just at launch.

**Tools:**
- Google PageSpeed Insights (free, on-demand)
- Google Search Console (free, shows Core Web Vitals over time)
- SpeedCurve or Calibre (paid, continuous monitoring)

**Metrics that matter:**
- Largest Contentful Paint (LCP) — under 2.5 seconds
- Cumulative Layout Shift (CLS) — under 0.1
- Interaction to Next Paint (INP) — under 200ms
- Time to First Byte (TTFB) — under 800ms

**Monitoring cadence:** Weekly automated Lighthouse reports for client sites. Monthly manual review of any site showing degradation.

### Error Tracking

For sites with any dynamic functionality (forms, search, user accounts, APIs).

**Tools:**
- Sentry (free tier: 5K errors/month) — best for application errors
- LogRocket or FullStory — session replay for debugging UX issues (paid)

**Minimum setup:** Sentry on any site with server-side code or complex client-side JavaScript. Catches errors you'd never hear about from users.

### Security Monitoring

**For WordPress sites:**
- Wordfence or Sucuri (malware scanning, firewall)
- WPScan (vulnerability database for WP plugins/themes)

**For custom sites:**
- Dependabot alerts (GitHub) for dependency vulnerabilities
- `npm audit` / `pip-audit` run weekly via CI

**DNS monitoring:** Monitor for unauthorized DNS changes. Rare but catastrophic when it happens. CloudFlare provides this for domains on their platform.

---

## Maintenance Tasks

### Weekly (Automated)

These should run without your involvement. Set up once, verify they're working monthly.

- Uptime checks (continuous)
- Backup verification (daily backups running, latest backup is recent and valid)
- Security scan (automated vulnerability check)
- SSL cert status check

### Monthly (15-30 min per site)

- **Update dependencies:** CMS core, plugins, themes, npm/pip packages. Apply updates to staging first, verify, then production.
- **Review analytics:** Is traffic trending up/down? Any anomalies? Any 404 spikes indicating broken links?
- **Check error logs:** Any recurring errors? Any new errors since last review?
- **Review backups:** Confirm backups are completing and test a restore quarterly.
- **Performance check:** Run Lighthouse. Compare to last month. Investigate any significant regressions.

### Quarterly (1-2 hours per site)

- **Full security audit:** Review user accounts, remove unused admin accounts, check file permissions, verify firewall rules
- **Backup restore test:** Actually restore a backup to a staging environment. The backup that's never been tested isn't a backup.
- **Content audit:** Check for broken links (Screaming Frog, or `broken-link-checker` CLI tool), outdated information, expired promotions
- **Performance deep-dive:** Analyze Core Web Vitals trends, image optimization opportunities, caching effectiveness
- **Dependency audit:** Check for deprecated packages, EOL runtimes, upcoming breaking changes

---

## Backup Strategy

### Requirements

- **Frequency:** Daily for dynamic sites (WordPress, e-commerce). Weekly for static sites.
- **Retention:** 30 days minimum. 90 days for e-commerce or sites handling customer data.
- **Storage:** Off-site. Not on the same server as the site. S3, Backblaze B2, or Google Cloud Storage.
- **Scope:** Full backup = files + database + configuration. A file backup without the database is useless for a CMS site.

### Implementation

**WordPress:** UpdraftPlus (free, reliable) → automated daily backups to S3 or Google Drive.

**Custom sites on PaaS:** Most platforms (Railway, Render, Vercel) handle this at the infrastructure level. For databases, use the provider's automated backup feature (e.g., Railway's database backups, managed Postgres snapshots).

**Custom sites on VPS:**

```bash
#!/bin/bash
# Simple backup script — run via cron daily
DATE=$(date +%Y-%m-%d)
BACKUP_DIR="/backups/$DATE"
mkdir -p "$BACKUP_DIR"

# Database backup
pg_dump -U dbuser dbname | gzip > "$BACKUP_DIR/db.sql.gz"

# Files backup
tar czf "$BACKUP_DIR/files.tar.gz" /var/www/site/ --exclude='node_modules'

# Upload to S3
aws s3 sync "$BACKUP_DIR" "s3://my-backups/site-name/$DATE/"

# Clean up local backups older than 7 days
find /backups -type d -mtime +7 -exec rm -rf {} +
```

**Test restores quarterly.** Schedule it. Put it on the calendar. A backup you've never restored is an assumption, not a strategy.

---

## Maintenance Plans for Clients

### Tier Structure

**Basic ($50-75/month):**
- Uptime monitoring
- Daily backups
- Monthly security updates
- Monthly performance report (automated)
- Email support (48h response time)

**Standard ($100-150/month):**
- Everything in Basic
- Weekly CMS/dependency updates
- Quarterly security audit
- Monthly analytics summary
- Minor content updates (up to 1 hour/month)
- Email support (24h response time)

**Premium ($200-350/month):**
- Everything in Standard
- Priority support (4h response time)
- Monthly performance optimization
- Content updates (up to 3 hours/month)
- Quarterly strategy review (30 min call)
- Emergency response for critical issues

### What to Include in the Maintenance Agreement

- Exactly what's covered (specific tasks, hours, response times)
- What's NOT covered (new features, redesigns, content creation beyond allotted hours)
- How overage is billed (hourly rate for work beyond plan scope)
- Term and cancellation (month-to-month or annual with discount, 30-day cancellation notice)
- Access requirements (you maintain admin access to the site for the duration)
- SLA for downtime response (not uptime guarantees — you don't control the hosting provider)

---

## Automation

### Automated Monthly Report Template

```python
"""
Generate a monthly site health report.
Run via cron or scheduled CI job on the 1st of each month.
"""
import requests
import json
from datetime import datetime, timedelta


def generate_report(site_url, site_name):
    report = {
        "site": site_name,
        "url": site_url,
        "report_date": datetime.now().strftime("%Y-%m-%d"),
        "period": f"{(datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')} to {datetime.now().strftime('%Y-%m-%d')}",
    }

    # Uptime (from UptimeRobot API)
    # uptime_data = check_uptime_robot(monitor_id)
    # report["uptime_percentage"] = uptime_data["percentage"]

    # PageSpeed
    psi_url = f"https://www.googleapis.com/pagespeedonline/v5/runPagespeedtest?url={site_url}&strategy=mobile"
    psi = requests.get(psi_url).json()
    report["performance_score"] = psi.get("lighthouseResult", {}).get("categories", {}).get("performance", {}).get("score", 0) * 100

    # SSL expiry
    # report["ssl_days_remaining"] = check_ssl_expiry(site_url)

    return report
```

### Cron Schedule for Maintenance Tasks

```bash
# /etc/cron.d/site-maintenance (or equivalent scheduled task)

# Daily: backup
0 2 * * * /scripts/backup.sh >> /var/log/backup.log 2>&1

# Weekly: dependency check
0 3 * * 1 /scripts/check-dependencies.sh >> /var/log/deps.log 2>&1

# Monthly: generate report
0 8 1 * * /scripts/monthly-report.sh >> /var/log/report.log 2>&1
```

---

## Incident Response (Client-Facing)

When a client site goes down:

1. **Acknowledge within your SLA.** "We're aware of the issue and investigating."
2. **Diagnose.** Check hosting status, DNS, SSL, application errors, recent changes.
3. **Communicate.** Update the client every 30 minutes during an outage, even if the update is "still investigating."
4. **Resolve and verify.** Fix the issue, verify the site is working, check for data loss.
5. **Post-incident summary.** Brief email to the client: what happened, why, what you've done to prevent recurrence. Keep it non-technical.

---

## Checklist

- [ ] Uptime monitoring configured for all live sites
- [ ] SSL expiration alerts set (14-day warning)
- [ ] Automated backups running and verified
- [ ] Backup restore tested (quarterly)
- [ ] Error tracking installed (Sentry or equivalent)
- [ ] Security scanning active (Dependabot, Wordfence, etc.)
- [ ] Monthly maintenance cadence established
- [ ] Client maintenance plans defined and priced
- [ ] Automated reporting in place
- [ ] Incident response process documented
