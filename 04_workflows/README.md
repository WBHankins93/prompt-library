# Workflows

**Status: PLANNED — MVP Phase 2**

---

## What Workflows Are

A workflow is a persona + task + sequence = an outcome-driven playbook.

Where personas are judgment lenses and tasks are standalone prompts, workflows combine both into a structured execution sequence. They are designed to be run start-to-finish for a specific, repeatable goal.

A workflow knows:
- Which personas to activate (and in what order)
- Which tasks to run (and when to run them)
- What the expected output is at each stage
- When to surface decisions vs. when to proceed automatically

---

## Why This Layer Exists

Personas and tasks work well independently. But some goals require multi-stage, coordinated effort across both — the kind of work where the sequence matters as much as the components.

Examples:
- A job search isn't one prompt. It's narrative framing, then resume refinement, then cover letter drafting, then interview prep — each stage building on the last.
- A product launch isn't a single decision. It's positioning, then pricing, then messaging, then launch sequencing.

Without a workflows layer, users have to wire these stages together manually on every use. Workflows make the sequence a first-class artifact.

---

## What a Workflow Will Look Like

**Example: Job Application Workflow**

```
Workflow: Job Application
Personas: Inner Voice (lead), Solution Architect Mentor (support), Red Team (final review)
Sequence:
  1. [Inner Voice] Narrative framing — who are you, what are you pursuing, why now
  2. [Task: resume-review] Evaluate current resume against the target role
  3. [Inner Voice + Solution Architect] Reframe experience for the specific opportunity
  4. [Task: cover-letter] Draft a targeted cover letter in the user's voice
  5. [Red Team] Final review — settling check, positioning gaps, what's underselling
Output: Polished, coherent application package with a clear narrative thread
```

The workflow handles the wiring. The user handles the input and the decisions.

---

## What Lives Here (When Built)

Each workflow file will define:
- Name and target outcome
- Persona composition and roles
- Task sequence with inputs/outputs at each stage
- Decision points that require user input
- Completion criteria

---

## What Does NOT Live Here

Personas belong in `02_personas/`.
Tasks belong in `03_tasks/`.
Personal team compositions belong in `05_personal/teams/`.

Workflows reference and orchestrate those components — they do not redefine them.

---

## Roadmap

This directory will be populated in **MVP Phase 2**.

The first workflows to be built will cover the highest-frequency multi-stage use cases:
- Job application (narrative + resume + cover letter + interview prep)
- Business strategy review (situation assessment + offer design + risk check)
- Content creation (voice alignment + structure + draft + refinement)

Do not add workflow files until the layer design is finalized in Phase 2.
