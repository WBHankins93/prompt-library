---
document: Auto-Routing System — Build Plan
version: 1.0
status: reference
created: 2026-03-03
author: compiled from spec
---

# Auto-Routing System — Build Plan

**Goal:** `team-composition.md` reads any incoming request and auto-selects the right persona stack — no manual configuration per project. Routing to judgment personas, not capability modules.

---

## Overview

The system has four layers:

1. **Classifier** — reads the request, identifies intent signals
2. **Routing Table** — maps intent → persona stack (lead + support + red team flag)
3. **Auto-Router** — embedded logic block in `team-composition.md` that executes the scan → classify → load → respond sequence
4. **Load Order** — fixed protocol for safe, predictable persona activation

Supporting artifacts: response templates per route type, confidence scoring, fallback persona.

---

## File Deliverables

| File | Purpose | Status |
|---|---|---|
| `05_personal/teams/classifier.md` | Intent taxonomy + trigger signals | to build |
| `05_personal/teams/routing-table.md` | Intent → persona stack mappings + composite routes | to build |
| `05_personal/teams/load-order.md` | Fixed sequence protocol for persona activation | to build |
| `05_personal/teams/response-templates.md` | Output skeletons per route type | to build |
| `05_personal/teams/team-composition.md` | Updated with auto-router block + fallback logic | to update |
| `00_foundation/CLAUDE-template.md` | Add Routing Mode section (AUTO / MANUAL / HYBRID) | to update |

---

## Step 1 — Build the Request Classifier

**File:** `05_personal/teams/classifier.md`

Define an intent taxonomy. Each intent has trigger signals (keywords, phrasing patterns, context clues). Each intent maps to a persona stack in `routing-table.md`.

### Intent Taxonomy

| Intent | Trigger Signals |
|---|---|
| `writing_voice` | "write this", "post about", "help me say", "LinkedIn", "bio", "cover letter", "my words", "in my voice" |
| `job_hunt` | "resume", "apply", "interview", "role", "job", "hiring", "salary", "targeting", "TC", "offer" |
| `business_strategy` | "should I", "how do I grow", "revenue", "pricing", "offer", "model", "acquire", "strategy", "compete" |
| `technical_build` | "build", "architecture", "stack", "code", "deploy", "implement", "engineer", "system design" |
| `risk_review` | "review this", "what am I missing", "pressure test", "is this a good idea", "poke holes", "stress test" |
| `financial_decision` | "cost", "budget", "ROI", "investment", "cash flow", "profit", "margin", "spend", "worth it" |
| `creative_brand` | "brand", "design", "aesthetic", "visual", "logo", "look and feel", "color", "identity", "creative direction" |
| `technical_positioning` | "SE interview", "technical narrative", "customer engagement", "demo", "POC", "enterprise", "credibility" |
| `systems_productization` | "productize", "recurring", "automate", "scale", "MRR", "passive", "system", "operationalize" |
| `client_work` | "client", "deliverable", "scope", "project", "website", "Sproutflow work", "proposal" |

### Classification Rules

- **Single intent (2+ strong signals):** route directly
- **Multiple intents:** check composite routing rules in `routing-table.md`
- **Ambiguous (weak or no signals):** activate Wayfinder, ask 1–2 clarifying questions, do not attempt to answer

---

## Step 2 — Define Persona Stack Mappings

**File:** `05_personal/teams/routing-table.md`

A lookup table: intent → persona configuration.

### Direct Routes

| Intent | Lead | Support | Red Team |
|---|---|---|---|
| `writing_voice` | Inner Voice | Design Guru | If high-stakes (cover letter, public positioning) |
| `job_hunt` | Inner Voice | Solution Architect Mentor, Red Team | Always |
| `business_strategy` | Business Leader | Revenue Multiplier, Systems Architect | If commitment >$10K or >3 months |
| `technical_build` | Systems Architect | Tech Wizard, Business Leader | If production system |
| `risk_review` | Red Team | Domain-relevant lead | Always (Red Team is the lead here) |
| `financial_decision` | Finance Dragon | Business Leader, Red Team | Always |
| `creative_brand` | Design Guru | Inner Voice, Marketing Mastermind | No |
| `technical_positioning` | Solution Architect Mentor | Inner Voice, Red Team | If major career decision |
| `systems_productization` | Systems Architect | Revenue Multiplier, Business Leader | No |
| `client_work` | Business Leader | Design Guru, Systems Architect | If scope creep or underpricing detected |

### Composite Routes

When a request hits 2+ intents, apply composite routing:

| Composite Intent | Lead | Support |
|---|---|---|
| `job_hunt + writing_voice` | Inner Voice | Solution Architect Mentor, Red Team |
| `business_strategy + technical_build` | Business Leader | Systems Architect (co-lead), Revenue Multiplier |
| `writing_voice + creative_brand` | Inner Voice | Design Guru (elevated role) |
| `financial_decision + business_strategy` | Finance Dragon | Business Leader, Revenue Multiplier, Red Team |

### Default Fallback

Ambiguous requests with low confidence: activate Wayfinder. State assumption. Ask before routing.

---

## Step 3 — Build the Auto-Router Prompt Block

**Destination:** Embedded in `05_personal/teams/team-composition.md`

This block runs before every response. It is the execution engine of the system.

### Auto-Router Logic

```
On receiving any request, before responding:

1. SCAN — Read the full request for intent signals
2. CLASSIFY — Match against classifier.md intent taxonomy
   - If single intent: direct route
   - If multiple intents: check composite routing rules
   - If ambiguous: activate Wayfinder, ask before routing
3. LOAD — Activate lead persona, then support personas in order per load-order.md
4. FLAG — If Red Team is required, note it; Red Team activates after other positions are stated
5. RESPOND — Lead persona drives. Support personas contribute in defined sections.
6. SURFACE — State which personas are active at the top of every response
```

The "surface active personas" step is non-negotiable — it makes routing visible and debuggable.

---

## Step 4 — Define Load Order Protocol

**File:** `05_personal/teams/load-order.md`

Fixed activation sequence to ensure consistent context loading.

```
ALWAYS LOAD FIRST:
1. foundation.md (identity, research, reasoning standards)
2. response-standards.md (output format and expression rules)

THEN LOAD:
3. Lead persona file
4. Supporting persona files (in priority order, highest first)
5. Red Team last — reviews assembled output, not raw request

NEVER LOAD:
- More than 1 lead persona simultaneously
- Red Team as lead (exception: explicit risk_review intent)
- All personas at once (defeats selective context loading)
```

---

## Step 5 — Add Confidence Scoring + Fallback

**Destination:** Embedded in `05_personal/teams/team-composition.md`

The router must handle ambiguous requests without failing silently.

### Confidence Levels

| Level | Condition | Behavior |
|---|---|---|
| High | 2+ strong intent signals | Route directly, no announcement needed |
| Medium | 1 strong signal | Route, surface assumption: *"Routing as [INTENT] — correct me if off"* |
| Low | Weak or no signals | Activate Wayfinder, ask 1–2 clarifying questions before routing |

### Fallback Persona: Wayfinder

- Role: Ask 1–2 clarifying questions to resolve ambiguity before routing
- Does NOT attempt to answer the request
- Does NOT route until intent is clear
- When clarity arrives, hand off to the correct lead persona

---

## Step 6 — Response Structure Templates Per Route

**File:** `05_personal/teams/response-templates.md`

Each route type gets a defined output skeleton. This is what makes responses predictable regardless of topic.

### Template: `business_strategy`

```
## Active Team
[Business Leader — Lead] [Revenue Multiplier] [Systems Architect] [Red Team — if triggered]

## [Business Leader] — Situation & Direction
[Core assessment, recommendation, key tradeoffs]

## [Revenue Multiplier] — Monetization Angle
[Pricing, offer structure, unit economics perspective]

## [Systems Architect] — Scalability Check
[What needs to be systematized, recurring revenue path]

## [Red Team] — What Could Break
[Only if triggered — the one risk that matters most]

## Decision
[Synthesized recommendation with next action, owned by Business Leader]
```

Each route type gets its own skeleton. The structure gives output predictability while the content reflects genuine persona tension.

---

## Step 7 — CLAUDE.md Integration Point

**File:** `00_foundation/CLAUDE-template.md`

Add a **Routing Mode** section to Section 3 (Active Team & Personas):

```markdown
## Routing Mode

AUTO    — team-composition.md handles all persona selection automatically
MANUAL  — [list specific personas to lock in for this project]
HYBRID  — auto-route but always include [PERSONA_NAME] regardless of intent
```

**Default:** `AUTO`

**When to use HYBRID:** Projects with a persistent lead that must always be present regardless of task type. Example: a job hunt project where Inner Voice should always hold the pen, even when doing strategy work.

---

## Key Design Decisions

### Why route-on-intent rather than route-on-project?

Project-level routing (the current model) requires manual configuration for every CLAUDE.md. Intent-based routing works on any request without setup — it classifies first, then selects.

### Why surface active personas at the top of every response?

Routing is invisible by default. Surfacing the active team makes it auditable. If the wrong personas are active, the user sees it immediately and can correct.

### Why Wayfinder for fallback instead of a default team?

Defaulting to a generic team produces bloated, unfocused responses. Wayfinder stops the response, asks what's actually needed, and only then routes. Routing late beats routing wrong.

### Why Red Team always last in load order?

Red Team's value is reviewing the assembled position of other personas — not the raw request. If Red Team activates first, it pressure-tests before any position has been staked. That's not stress-testing; that's noise.

---

## Review Checklist

Before considering this system complete:

- [ ] `classifier.md` — all intents have 4+ trigger signals; no overlap without composite rule
- [ ] `routing-table.md` — every intent has a lead, at least 1 support, and a clear Red Team condition
- [ ] `load-order.md` — NEVER LOAD rules are explicit and non-negotiable
- [ ] `response-templates.md` — every direct route has an output skeleton
- [ ] `team-composition.md` — auto-router block is first section after intro; confidence scoring is present
- [ ] `CLAUDE-template.md` — Routing Mode section added; AUTO is the default
- [ ] System tested against 3+ real request types to validate routing accuracy
