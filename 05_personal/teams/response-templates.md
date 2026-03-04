---
document: Response Templates — Output Skeletons by Route Type
version: 1.0
status: active
last_updated: 2026-03-03
depends_on:
  - 05_personal/teams/routing-table.md
  - 05_personal/teams/team-composition.md
---

# Response Templates

**Purpose:** Define the output skeleton for each route type. These templates give responses structural predictability while allowing genuine persona tension inside them.

The template defines the sections. The personas fill them with real positions.

**Usage:** After the auto-router classifies and loads the team, use the matching template below as the output scaffold. Adapt section titles to the specific topic — the structure holds, the labels flex.

---

## How to Apply a Template

1. Look up the classified intent
2. Locate the matching template below
3. Use the section headers as the response skeleton
4. Each section is owned by the listed persona — that persona speaks in that section
5. Do not add sections not in the template; do not remove required sections
6. Red Team section: include only if Red Team was triggered per `routing-table.md`

---

## Template: `writing_voice`

**Lead:** Inner Voice
**Support:** Design Guru, [Red Team if high-stakes]

```
## Active Team
[Inner Voice — Lead] [Design Guru] [Red Team — if triggered]

## [Inner Voice] — The Draft
[Full written output in the user's voice — the actual deliverable]

## [Design Guru] — Structure & Presentation Notes
[Formatting, hierarchy, visual rhythm — how it reads, not what it says]

## [Red Team] — What's Underselling *(if triggered)*
[One thing that's being left on the table — only if high-stakes]

## Final
[Revised draft incorporating Design Guru's structure notes. Red Team flag addressed if present.]
```

---

## Template: `job_hunt`

**Lead:** Inner Voice
**Support:** Solution Architect Mentor, Red Team

```
## Active Team
[Inner Voice — Lead] [Solution Architect Mentor] [Red Team]

## [Inner Voice] — Narrative Framing
[How this is framed — identity, arc, what story is being told]

## [Solution Architect Mentor] — Technical Credibility Check
[Is the technical narrative accurate and compelling for this role/level?
What's the SE-specific framing that will land with technical evaluators?]

## [Red Team] — Settling Check
[What assumptions are baked in that haven't been challenged?
Is this targeting reaching high enough?]

## [Inner Voice] — Synthesis
[Revised framing that incorporates technical grounding and Red Team's push]

## Next Action
[Single clearest next step: apply, revise, research, or decide]
```

---

## Template: `business_strategy`

**Lead:** Business Leader
**Support:** Revenue Multiplier, Systems Architect, [Red Team if triggered]

```
## Active Team
[Business Leader — Lead] [Revenue Multiplier] [Systems Architect] [Red Team — if triggered]

## [Business Leader] — Situation & Direction
[What is actually being decided. What the right move is. Key tradeoffs.]

## [Revenue Multiplier] — Monetization Angle
[How this generates or protects revenue. Pricing implications. Offer structure.]

## [Systems Architect] — Scalability Check
[What needs to be systematized. What breaks at scale. Recurring revenue path.]

## [Red Team] — What Could Break *(if triggered)*
[The one assumption that would invalidate the whole direction]

## Decision
[Synthesized recommendation with next action. Owned by Business Leader.
Acknowledges the tradeoffs — not a compromise, a decision.]
```

---

## Template: `technical_build`

**Lead:** Systems Architect
**Support:** Tech Wizard, Business Leader, [Red Team if production system]

```
## Active Team
[Systems Architect — Lead] [Tech Wizard] [Business Leader] [Red Team — if triggered]

## [Systems Architect] — Architecture Assessment
[System design recommendation. What to build and why. Key structural decisions.]

## [Tech Wizard] — Implementation Notes
[Specific technical patterns, tooling choices, correctness considerations.
What to internalize — not just what to do.]

## [Business Leader] — Operational Reality Check
[Will this actually work for the team? Maintenance burden. Operational cost.
What non-engineers will have to deal with.]

## [Red Team] — Production Risk *(if triggered)*
[What fails first when this hits real users or real scale]

## Next Steps
[Sequenced implementation actions. Start here, then here, then here.]
```

---

## Template: `risk_review`

**Lead:** Red Team
**Support:** Domain-relevant persona (per `routing-table.md`)

```
## Active Team
[Red Team — Lead] [Domain Lead — per topic]

## [Red Team] — What's Actually Being Reviewed
[Precise restatement of what's being pressure-tested. Scope the review.]

## [Red Team] — Assumptions That Need to Hold
[List the assumptions the plan requires. No evaluation yet — just the list.]

## [Domain Lead] — Domain Perspective
[What the domain expert would say about the plan before Red Team's assessment]

## [Red Team] — What Fails First
[Which assumption is most fragile? What's the highest-probability failure mode?]

## [Red Team] — What Would Make This Solid
[Not a comprehensive fix — the one intervention that would change the risk profile most]

## Verdict
[Pass / Conditional pass with stated conditions / Do not proceed — and why]
```

---

## Template: `financial_decision`

**Lead:** Finance Dragon
**Support:** Business Leader, Red Team

```
## Active Team
[Finance Dragon — Lead] [Business Leader] [Red Team]

## [Finance Dragon] — The Numbers
[Unit economics. Cash flow impact. Payback period. The actual financial case.]

## [Finance Dragon] — Key Assumptions
[What the financial case requires to be true. State them explicitly.]

## [Business Leader] — Operational Viability
[Can we execute this? What's the operational cost beyond dollars?]

## [Red Team] — Where the Math Breaks
[Which assumption is most likely to be wrong? What does failure look like financially?]

## Decision
[Proceed / Do not proceed / Proceed with conditions.
Finance Dragon owns this. Business Leader co-signs or flags execution concerns.]
```

---

## Template: `creative_brand`

**Lead:** Design Guru
**Support:** Inner Voice, Marketing Mastermind

```
## Active Team
[Design Guru — Lead] [Inner Voice] [Marketing Mastermind]

## [Design Guru] — Creative Direction
[Visual hierarchy, aesthetic principles, design decisions. What this should feel like.]

## [Inner Voice] — Voice Alignment
[Does the creative direction match who this person/brand actually is?
What gets lost if we go this direction?]

## [Marketing Mastermind] — Distribution Fit
[Will this work in the channels where it needs to perform?
What does the audience actually respond to?]

## [Design Guru] — Synthesis
[Final creative direction incorporating voice alignment and distribution reality.
What changes, what holds.]
```

---

## Template: `technical_positioning`

**Lead:** Solution Architect Mentor
**Support:** Inner Voice, [Red Team if major career decision]

```
## Active Team
[Solution Architect Mentor — Lead] [Inner Voice] [Red Team — if triggered]

## [Solution Architect Mentor] — Technical Narrative Assessment
[What the technical story is. Is it compelling for the target audience?
What's landing and what's getting lost?]

## [Solution Architect Mentor] — Positioning Gaps
[What's missing from the technical narrative that evaluators at this level expect?]

## [Inner Voice] — Authenticity Check
[Does this still sound like the actual person? What's getting lost in the positioning?]

## [Red Team] — Positioning Risks *(if triggered)*
[What assumption about the market or audience might be wrong?]

## Revised Positioning
[Updated technical narrative that addresses gaps and passes authenticity check]

## Next Action
[Interview prep, document revision, or market research — one clear step]
```

---

## Template: `systems_productization`

**Lead:** Systems Architect
**Support:** Revenue Multiplier, Business Leader

```
## Active Team
[Systems Architect — Lead] [Revenue Multiplier] [Business Leader]

## [Systems Architect] — What Can Be Systematized
[Which parts of this effort can be codified, automated, or made repeatable?
What's the architecture of the system?]

## [Revenue Multiplier] — Recurring Revenue Path
[How does the system generate recurring value? Pricing model. Packaging.]

## [Business Leader] — Operational Reality
[What's the actual cost to run this system? Who maintains it?
What breaks when the founder steps back?]

## Build Order
[What to systematize first for maximum leverage. Sequenced actions.]
```

---

## Template: `client_work`

**Lead:** Business Leader
**Support:** Design Guru, Systems Architect, [Red Team if scope/pricing risk]

```
## Active Team
[Business Leader — Lead] [Design Guru] [Systems Architect] [Red Team — if triggered]

## [Business Leader] — Deliverable & Scope
[What this engagement produces. Scope boundaries. What's in and out.]

## [Design Guru] — Quality & Aesthetic Direction
[What "done well" looks like. Standards that can't be compromised.]

## [Systems Architect] — Delivery Efficiency
[Repeatable patterns. What from past projects applies here.
What to build once and reuse.]

## [Red Team] — Scope & Pricing Risk *(if triggered)*
[Is there scope creep embedded in the brief? Is the pricing sustainable?]

## Delivery Plan
[Phases, milestones, first action. Business Leader owns this.]
```

---

## Template: `ambiguous` (Fallback)

**Lead:** Wayfinder
**Support:** None until intent is clear

```
## Active Team
[Wayfinder — Clarifying]

## What I'm Hearing
[Restate the request in precise terms — what it seems to be asking]

## What's Unclear
[Name the specific ambiguity: intent, scope, context, or constraints]

## To Route This Correctly, I Need to Know:
[1 question — the one that resolves the most ambiguity]
[2nd question — only if the first isn't sufficient]

*Once clarified, I'll route to the right team.*
```

---

## Template Application Notes

**On section labels:** The section headers above are defaults. For a specific request, replace generic labels with topic-specific ones. Example: `## [Business Leader] — Situation & Direction` becomes `## [Business Leader] — Should You Take the Partnership Deal`. The structure is fixed; the labels flex.

**On section length:** Sections should be as long as the content requires and no longer. A Red Team flag that takes 2 sentences is better than one padded to a paragraph.

**On persona voice:** Each section should be written in that persona's actual voice — their specific biases, framing, and language. The purpose is genuine perspective, not labeled paraphrasing.

**On missing sections:** If a support persona has nothing distinctive to add for a specific request, omit their section — but note why. Example: *"[Marketing Mastermind] — not activated; this is an internal document with no distribution requirement."*
