---
name: make-an-architecture-decision
title: Make an architecture decision
description: >
  Use when a consequential technical choice has several plausible designs and the team needs a
  clear recommendation rather than an unranked option list. Produces a constraint-driven design,
  explicit tradeoffs and failure modes, a recommendation, and a concise architecture decision
  record that preserves why the choice was made.
category: solution-design
tags: [Engineering, Solutions Engineering, Leadership]
source:
  - 02_personas/technical/staff-cto-mentor.md
  - 02_personas/technical/platform-mentor.md
version: 1.0.0
updated: 2026-07-28
difficulty: advanced
---

**When to use this skill:** a technical choice will shape cost, reliability, or future change and
the team needs to decide with the real constraints visible.

**What it produces:** a recommended architecture, its tradeoffs and failure modes, and a short
decision record containing context, decision, consequences, and revisit triggers.

## Frame the decision boundary

State the decision in one sentence and distinguish it from adjacent choices. Name the outcome,
non-negotiable constraints, acceptable degradation, and planning horizon. Replace generic goals
such as "scalable" with an operating envelope: expected load, team size, latency, recovery,
compliance, budget, and delivery date. An architecture cannot be better than another without a
declared context.

## Compare complete options

Develop two or three viable designs, including the simplest option. Compare each on the same
dimensions: delivery risk, operational burden, failure modes, security, cost, reversibility, and
how the design changes under likely growth. Do not compare one polished design with a straw man.
Include the cost of migration and the ongoing coordination the architecture creates.

## Design for failure and ownership

For every option, ask how it breaks, how the team detects the failure, who responds, and how service
is restored. Map state, data movement, trust boundaries, and dependencies before choosing
components. The most elegant design is wrong when the available team cannot explain or operate it.

## Make the call at the right level of commitment

Separate reversible decisions from one-way doors. Prefer the simplest reversible choice that meets
today's constraints and preserves the next likely move. When risk justifies complexity, state the
specific failure or constraint paying for it. Recommend one direction plainly; "it depends" is the
start of the analysis, not its conclusion.

## Record why, not the meeting

Write a concise decision record:

- **Context:** the decision, forces, and constraints.
- **Decision:** the selected design and its scope.
- **Consequences:** benefits, costs, risks, and work created.
- **Alternatives:** credible options rejected and why.
- **Revisit triggers:** evidence that would invalidate the choice.

Keep the record durable and vendor-neutral enough to remain useful after the implementation changes.

## What good looks like

Another engineer can explain both the architecture and why it fits the operating context. The
chosen complexity has a named reason, known failure modes have owners, and the record makes future
reconsideration easier rather than defending the past. The team knows what new evidence would
justify changing course.

## Hard rules

- NEVER recommend complexity without naming the constraint that pays for it.
- NEVER omit operational cost from an architecture comparison.
- NEVER present a reversible preference as a permanent principle.
- ALWAYS recommend one direction and state its consequences.
- ALWAYS record revisit triggers for consequential decisions.
