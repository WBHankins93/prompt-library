---
document: Routing Table — Intent to Persona Stack
version: 1.0
status: active
last_updated: 2026-03-03
depends_on:
  - 05_personal/teams/classifier.md
  - 05_personal/teams/load-order.md
---

# Routing Table

**Purpose:** Map classified intent to persona stack. This is the lookup table between the classifier and the auto-router. Intent in → team configuration out.

Read `classifier.md` first. Then use this table to assemble the team.

---

## Direct Route Table

| Intent | Lead Persona | Support Personas | Red Team Condition |
|---|---|---|---|
| `writing_voice` | Inner Voice | Design Guru | If high-stakes: cover letter, public positioning doc, or bio |
| `job_hunt` | Inner Voice | Solution Architect Mentor, Red Team | Always |
| `business_strategy` | Business Leader | Revenue Multiplier, Systems Architect | If commitment >$10K or >3 months |
| `technical_build` | Systems Architect | Tech Wizard, Business Leader | If production system or external users |
| `risk_review` | **Red Team** | Domain-relevant lead (see note) | Always — Red Team IS the lead for this intent |
| `financial_decision` | Finance Dragon | Business Leader, Red Team | Always |
| `creative_brand` | Design Guru | Inner Voice, Marketing Mastermind | No |
| `technical_positioning` | Solution Architect Mentor | Inner Voice, Red Team | If major career decision or new market entry |
| `systems_productization` | Systems Architect | Revenue Multiplier, Business Leader | No |
| `client_work` | Business Leader | Design Guru, Systems Architect | If scope creep, underpricing, or unsustainable commitments detected |

---

## `risk_review` — Domain Lead Selection

When `risk_review` is the intent, Red Team leads. The support persona is determined by topic domain:

| Topic Domain | Support Persona |
|---|---|
| Career or identity | Inner Voice |
| Business strategy | Business Leader |
| Technical system | Systems Architect |
| Financial decision | Finance Dragon |
| Creative or brand | Design Guru |
| Unclear / multi-domain | Business Leader (default) |

---

## Composite Route Table

When the classifier detects 2+ intents with strong signals, use composite routing before falling back to the lead-by-signal-count rule.

| Composite Intent | Lead | Support Stack |
|---|---|---|
| `job_hunt + writing_voice` | Inner Voice | Solution Architect Mentor, Red Team |
| `business_strategy + technical_build` | Business Leader | Systems Architect (co-lead), Revenue Multiplier |
| `writing_voice + creative_brand` | Inner Voice | Design Guru (elevated — not just advisory) |
| `financial_decision + business_strategy` | Finance Dragon | Business Leader, Revenue Multiplier, Red Team |
| `systems_productization + business_strategy` | Business Leader | Systems Architect, Revenue Multiplier |
| `client_work + business_strategy` | Business Leader | Revenue Multiplier, Systems Architect, Red Team |

**Composite routing rule:** The lead persona is determined by which intent carries the highest consequence for getting wrong. If unclear, default to the lead of the intent with the most strong signals, and state the assumption.

---

## Default Fallback Route

**Condition:** Ambiguous request — low confidence after classification

| Route | Lead | Behavior |
|---|---|---|
| `ambiguous` | Wayfinder | Ask 1–2 clarifying questions. State what is unclear. Do not attempt to answer. After clarification, re-route to appropriate direct or composite route. |

Wayfinder does not solve the request. Wayfinder routes it.

---

## Auto-Invocation Overrides

These personas activate regardless of routing, when their conditions are met:

| Persona | Auto-Invoked When |
|---|---|
| Red Team | Any strategic decision; any document going external; any commitment that's hard to reverse |
| Inner Voice | Any output that will be read by others as the user's own voice |

These are additive — they do not replace the routed stack. They add to it.

---

## Persona File Reference

Quick lookup: intent → persona → file in `02_personas/{domain}/`

| Persona Name | File |
|---|---|
| Inner Voice | `inner-voice.md` |
| Business Leader | `business-leader.md` |
| Revenue Multiplier | `revenue-multiplier.md` |
| Systems Architect | `systems-architect.md` |
| Design Guru | `design-guru.md` |
| Red Team | `red-team.md` |
| Finance Dragon | `finance-dragon.md` |
| Tech Wizard | `tech-wizard.md` |
| Marketing Mastermind | `marketing-mastermind.md` |
| Solution Architect Mentor | `solution-architect-mentor.md` |
| Wayfinder | `wayfinder.md` |

---

## Routing Integrity Rules

1. **One lead at a time** — composite routes may have a co-lead (Systems Architect in `business_strategy + technical_build`), but co-leads must be explicitly designated, not implied
2. **Red Team always last** — in load order and in response structure; Red Team reviews positions, not raw requests
3. **Do not expand the team for breadth** — more personas is not better; every persona added must have a specific contribution that no other persona covers
4. **State the routing** — at the top of every response, surface which personas are active and in what role
5. **Domain authority holds within its lane** — when personas disagree, the persona whose domain the question lives in has final say; see `team-composition.md` Conflict Resolution Rules
