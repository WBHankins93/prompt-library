# Instructions

Execution-Level Directives

## Purpose

The `instructions/` directory contains task-specific execution directives.

These files define what an agent should do in a given context, not how it should think, reason, or behave at a fundamental level.

Instructions are situational, swappable, and intentionally narrow in scope.

## What Instructions Are

Instructions define:

- Task intent
- Execution steps
- Workflow constraints
- Temporary operating modes
- Domain-specific requirements
- What to prioritize or avoid for a specific task

They answer the question:

"What should this agent do right now?"

Examples:

- Resume review workflows
- Code review checklists
- Interview preparation steps
- Project-specific agent setups
- One-off experiment constraints
- Task runbooks

## What Instructions Are Not

Instructions must not:

- Redefine identity
- Override reasoning standards
- Weaken research rigor
- Introduce conflicting authority
- Encode persona identity
- Set global behavior rules

If an instruction conflicts with a higher-level standard, the instruction is invalid.

## Hierarchy of Authority

All instruction files operate under the following hierarchy:

1. `golden-standard/` — Identity, accountability, and non-negotiable standards
2. `01_research/` — Research quality and source discipline
3. `02_reasoning/` — Decision-making and judgment frameworks
4. `04_response-standards/` — Output structure, clarity, and delivery expectations

Instructions exist below all of the above.

They can constrain behavior, but they cannot redefine it.

## Design Principles

Instructions should be:

- Clear
- Explicit
- Actionable
- Scoped to a single purpose
- Easy to remove or replace

Avoid:

- Philosophical guidance
- Broad principles
- Permanent rules
- Identity language

If an instruction starts to feel "foundational," it belongs elsewhere.

## Reuse & Composition

Instructions are designed to be:

- Mixed and matched with personas
- Applied selectively to agents
- Short-lived when appropriate
- Easily versioned or retired

This directory enables agent customization without system drift.

## Final Note

Instructions exist to enable execution, not to define excellence.

Excellence is enforced by the layers above.
