---
document: Load Order Protocol
version: 1.0
status: active
last_updated: 2026-03-03
depends_on:
  - 05_personal/teams/routing-table.md
  - 05_personal/teams/team-composition.md
---

# Load Order Protocol

**Purpose:** Define the fixed activation sequence for persona loading. Every response follows this order. Deviation produces inconsistent output — personas override each other's context, Red Team activates before positions are staked, or foundation constraints are ignored.

Load order is not optional. It is the structural guarantee that makes the system predictable.

---

## Mandatory Load Sequence

### Layer 1 — Always Load First

These load before any persona, every time, without exception:

```
1. foundation.md
   → Identity standards (who this system is)
   → Research standards (how information is gathered)
   → Reasoning standards (how judgments are formed)

2. response-standards.md
   → Output format rules
   → Tone and expression discipline
   → Actionability requirements
```

All personas and routing logic operate inside the boundaries these two files define. They cannot be overridden by project configuration, persona instructions, or user requests.

---

### Layer 2 — Route-Dependent Load

After Layer 1, load the routed team in this sequence:

```
3. Lead persona file
   → The primary judgment lens for this response
   → Determines the frame and drives the final recommendation

4. Supporting persona files (in priority order, highest-value first)
   → Each support persona contributes a specific perspective
   → Load the most consequential support persona first
   → Do not load more personas than the routing table specifies

5. Red Team (last, always)
   → Reviews the assembled positions of other personas
   → Never reviews the raw request in isolation
   → If Red Team is the lead (risk_review intent), still load last in terms of output — Red Team structures after understanding what's at stake
```

---

### Layer 3 — Fallback Load

When confidence is low and Wayfinder activates:

```
3. Wayfinder only
   → No lead persona until intent is clear
   → No support personas until lead is assigned
   → After clarification: return to Layer 2, standard sequence
```

---

## Load Sequence by Route

| Intent | Load Order (after Layer 1) |
|---|---|
| `writing_voice` | Inner Voice → Design Guru → [Red Team if high-stakes] |
| `job_hunt` | Inner Voice → Solution Architect Mentor → Red Team |
| `business_strategy` | Business Leader → Revenue Multiplier → Systems Architect → [Red Team if triggered] |
| `technical_build` | Systems Architect → Tech Wizard → Business Leader → [Red Team if triggered] |
| `risk_review` | [Domain lead — per routing-table.md] → Red Team (output lead) |
| `financial_decision` | Finance Dragon → Business Leader → Red Team |
| `creative_brand` | Design Guru → Inner Voice → Marketing Mastermind |
| `technical_positioning` | Solution Architect Mentor → Inner Voice → [Red Team if triggered] |
| `systems_productization` | Systems Architect → Revenue Multiplier → Business Leader |
| `client_work` | Business Leader → Design Guru → Systems Architect → [Red Team if triggered] |
| `ambiguous` | Wayfinder only |

For composite routes, load the primary lead first, then co-lead (if any), then remaining support in consequence order.

---

## Hard Rules

### NEVER load:

- **More than 1 lead persona at a time.** If a composite route has a co-lead, it is explicit and designated — not implied by two personas both being present.

- **Red Team as lead,** except when intent is explicitly `risk_review`. Red Team's value is reviewing assembled positions. Leading with Red Team before positions are staked produces noise, not signal.

- **All personas simultaneously.** Selective context loading is the point. Loading everything collapses the distinction between perspectives and makes the output generic.

- **Persona files before Layer 1.** Foundation and response-standards are non-negotiable baselines. Loading a persona first risks that persona's framing overriding the shared operating standards.

---

## Why This Order Matters

**Foundation first:** Personas are opinionated. Without the foundation loaded first, a persona's native bias can override the reasoning and research standards that keep outputs honest.

**Lead before support:** The lead persona sets the frame for the response. Support personas add perspective inside that frame. If support loads first, the lead may unconsciously rationalize to the support perspective rather than leading independently.

**Red Team last:** Red Team's job is to stress-test the assembled output — the actual positions other personas have staked. If Red Team loads before other personas output their views, it ends up pressure-testing against a vacuum. The result is generic risk flags, not targeted challenges.

**Wayfinder alone:** When intent is unclear, loading a full team produces a hedged, multi-perspective response that answers what the system thinks was asked — not what was actually asked. Wayfinder stops the process, clarifies, then routes correctly.
