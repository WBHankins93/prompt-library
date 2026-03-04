---
document: Request Classifier — Intent Taxonomy
version: 1.0
status: active
last_updated: 2026-03-03
depends_on:
  - 03_teams/routing-table.md
  - 03_teams/team-composition.md
---

# Request Classifier

**Purpose:** Read any incoming request and match it to an intent category. Intent categories drive persona stack selection in `routing-table.md`. This runs before every response.

---

## How to Use This

1. Read the full request — not just the first sentence
2. Scan for trigger signals from the taxonomy below
3. Count strong signal matches
4. Apply confidence rules at the bottom of this document
5. Route to `routing-table.md` with the classified intent

---

## Intent Taxonomy

### `writing_voice`
**Domain:** Identity, self-expression, documents written as the user

**Trigger signals:**
- Explicit: "write this", "help me say", "in my voice", "draft", "rewrite"
- Platform: "LinkedIn post", "bio", "cover letter", "about me", "social post"
- Output type: any first-person document that will be read by others
- Framing: "how do I say", "make this sound like me", "does this sound right"

**NOT this intent if:** The user is writing for a client, brand, or third party (→ `writing_voice` is personal; brand work → `creative_brand`)

---

### `job_hunt`
**Domain:** Career transitions, role targeting, compensation, interview performance

**Trigger signals:**
- Documents: "resume", "CV", "cover letter for a job", "LinkedIn profile for job search"
- Actions: "apply", "applying", "target", "targeting", "interview", "interviewing"
- Concepts: "job", "role", "position", "hiring", "recruiter", "offer", "TC", "compensation", "salary", "leveling", "L5", "L6", "staff", "principal"
- Framing: "I'm looking for", "I want to transition", "should I take this offer"

**NOT this intent if:** The user is doing career-level strategic thinking about their arc (→ `business_strategy` or `technical_positioning`)

---

### `business_strategy`
**Domain:** Direction-setting, offer design, market decisions, growth moves

**Trigger signals:**
- Framing: "should I", "is it worth", "thinking about", "considering", "what would you do"
- Actions: "grow", "scale", "expand", "acquire", "compete", "position", "launch", "enter"
- Concepts: "revenue", "pricing", "offer", "business model", "strategy", "market", "customers", "GTM", "go-to-market"
- Implied: any decision that involves committing significant time or money (>$10K or >3 months)

**NOT this intent if:** The user wants implementation details (→ `technical_build`) or unit economics (→ `financial_decision`)

---

### `technical_build`
**Domain:** System design, implementation, architecture, code

**Trigger signals:**
- Actions: "build", "implement", "develop", "create", "write code", "engineer", "design the system"
- Concepts: "architecture", "stack", "tech stack", "database", "API", "deploy", "infrastructure", "code", "codebase"
- Platform: "AWS", "Vercel", "Supabase", "Next.js", "TypeScript", "PostgreSQL" and similar
- Questions: "how do I build", "what should the architecture be", "which stack should I use"

**NOT this intent if:** User wants technical career positioning (→ `technical_positioning`) or product strategy (→ `business_strategy`)

---

### `risk_review`
**Domain:** Pressure-testing, assumption surfacing, failure analysis

**Trigger signals:**
- Explicit: "review this", "review my", "pressure test", "stress test", "poke holes", "what am I missing", "what could go wrong"
- Framing: "is this a good idea", "does this hold up", "am I thinking about this right", "what's the downside"
- Context: user has already formed a plan or made a decision and wants it challenged

**NOT this intent if:** User wants to make the decision (→ `business_strategy`); risk_review is for decisions already made or nearly made

---

### `financial_decision`
**Domain:** Cost analysis, investment evaluation, cash flow, profitability

**Trigger signals:**
- Explicit: "cost", "budget", "ROI", "return", "investment", "spend", "worth it financially"
- Metrics: "cash flow", "profit", "margin", "unit economics", "LTV", "CAC", "payback period"
- Decisions: "should I spend", "is this affordable", "what's the financial case", "how do I price this"
- Framing: any question where money is the primary variable, not just a factor

**NOT this intent if:** Money is mentioned as context but the real question is strategic (→ `business_strategy`)

---

### `creative_brand`
**Domain:** Visual identity, brand aesthetics, design direction, creative output

**Trigger signals:**
- Explicit: "brand", "branding", "design", "visual", "aesthetic", "identity", "look and feel"
- Outputs: "logo", "color palette", "typography", "mood board", "creative direction"
- Framing: "how should this feel", "what's the vibe", "design this", "creative brief"
- Context: questions about how something looks, feels, or visually communicates

**NOT this intent if:** Writing is the output (→ `writing_voice`); this intent is specifically visual/aesthetic

---

### `technical_positioning`
**Domain:** SE career narrative, enterprise customer engagement, technical credibility

**Trigger signals:**
- Context: "SE interview", "solutions engineer", "technical sales", "presales", "customer success technical"
- Actions: "position myself", "tell my story technically", "POC", "demo strategy", "technical narrative"
- Career: "enterprise", "B2B", "technical credibility", "customer-facing engineering"
- Framing: "how do I come across technically", "what's my technical story"

**NOT this intent if:** The user is doing general job searching (→ `job_hunt`) or general career strategy (→ `business_strategy`)

---

### `systems_productization`
**Domain:** Turning effort into recurring assets, automation, scalable delivery

**Trigger signals:**
- Explicit: "productize", "productization", "recurring revenue", "MRR", "passive", "systemize"
- Actions: "automate", "operationalize", "scale without me", "build a system", "remove myself"
- Framing: "how do I stop trading time for money", "how do I make this repeatable", "turn this into a product"
- Context: user has a working service or process and wants to scale or automate it

**NOT this intent if:** User wants technical implementation of a specific system (→ `technical_build`)

---

### `client_work`
**Domain:** Client deliverables, project scoping, service delivery, active Sproutflow work

**Trigger signals:**
- Explicit: "client", "client project", "for the client", "deliverable", "project"
- Context: references a specific named client, website build, or active service engagement
- Actions: "scope", "proposal", "statement of work", "discovery call", "present to client"
- Framing: any task that involves work being done for a third party under a service relationship

**NOT this intent if:** User is thinking about Sproutflow's own growth (→ `business_strategy` or `systems_productization`)

---

## Classification Rules

### Signal Counting

**Strong signals:** Exact keyword match or highly specific phrasing
**Weak signals:** Implied context, adjacent keywords, vague framing

### Confidence Thresholds

| Confidence | Condition | Action |
|---|---|---|
| **High** | 2+ strong signals → single intent | Route directly. No announcement. |
| **Medium** | 1 strong signal, no competing intents | Route with stated assumption: *"Routing as [INTENT] — correct me if off."* |
| **Low** | 0–1 weak signals, multiple competing intents, or genuinely unclear | Activate Wayfinder. Ask 1–2 clarifying questions. Do not attempt an answer. |

### Composite Intent Rules

When 2+ intents are detected with 1+ strong signal each, apply composite routing:

| Composite | Primary Signal Check |
|---|---|
| `job_hunt + writing_voice` | Request involves a career document written as the user |
| `business_strategy + technical_build` | Request involves both a directional decision and implementation |
| `writing_voice + creative_brand` | Request involves both voice/text and visual/aesthetic direction |
| `financial_decision + business_strategy` | Money is the decision AND the question is directional |

If composite not defined: **lead with the intent that has the most strong signals**. State the assumption.

---

## Anti-Patterns

Do not:
- Route based on the first signal found — scan the full request
- Default to `business_strategy` when uncertain (use Wayfinder instead)
- Classify `risk_review` unless the user already has a plan or decision to pressure-test
- Treat `writing_voice` and `creative_brand` as the same intent (text ≠ visual)
