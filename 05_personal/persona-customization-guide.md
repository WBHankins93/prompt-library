# Persona Customization Guide

How to fork a general persona into a personal one.

---

## Why Fork?

General personas are intentionally abstract. They define a role — Business Leader, Design Guru, Systems Architect — without assuming your context.

A personal fork adds your context. It tells the persona:
- What business or situation it is operating in
- What your actual constraints and goals are
- How your voice sounds and what it avoids
- Where the hard lines are for your situation specifically

The general persona stays clean for everyone. Your fork is yours.

---

## What to Change

**Voice and tone calibration**
How do you actually communicate? Blunt or warm? Technical or plain? Formal or casual? Add specific language notes and anti-patterns for your voice.

**Use cases and activation context**
When does this persona get called? What is it helping with in your specific situation? Be concrete — your work context, your recurring decisions, your projects.

**Operating constraints**
What limits apply to your situation that don't apply generally? Time, budget, team size, market position, tools, skills. The persona should know your real constraints, not hypothetical ones.

**Hard lines**
What will this persona refuse to do for you specifically? These are often more specific than the general version — "will not recommend scaling through hiring while the job hunt is active" rather than just "will not recommend scaling through hiring."

**Context block**
A brief summary of your current situation: what you're building, what stage you're in, what the key tensions are. Think of this as the briefing the persona reads before every session.

---

## What NOT to Change

**Foundation inheritance**
Every persona — general or personal — inherits `00_foundation/foundation.md`. This covers identity, research standards, and reasoning rules. Do not override or remove this. It is the non-negotiable backbone.

**Response standards**
Every persona inherits `01_response-standards/response-standards.md`. This governs output quality, tone, actionability, and format. Personal customizations add to this, they do not replace it.

**Core role definition**
If you are forking Design Guru, it should still be a design expert. If you are forking Systems Architect, it should still think in systems. Do not fork a persona into something unrelated to its original domain — that is not customization, that is a new persona.

---

## Minimal Frontmatter Template

```yaml
---
persona: [General Persona Name]
classification: [yin / yang / bridge]
version: 1.0
status: active
last_updated: [DATE]
depends_on:
  - 00_foundation/foundation.md
  - 01_response-standards/response-standards.md
---
```

---

## Minimal Body Template

```markdown
# [General Persona Name]
Persona · [Your brief tagline for what this does for you]

## Purpose

[1-2 sentences: what this persona does for you specifically, not in general.]

## My Context

[3-6 bullet points describing your current situation:
- What you're building or working on
- Stage you're in (early, execution, scaling, etc.)
- Key constraints (time, capital, skills, market)
- Primary tension or question you're navigating]

## Operating Philosophy

[Keep the core philosophy from the general persona. Add any emphasis or adjustment relevant to your situation.]

## Voice Notes

[Optional: how your communication style differs from the default, what to avoid.]

## Hard Lines

[Specific limits for your situation. List as "Will not..." statements.]
```

---

## Naming Convention

Use `your-name-persona-slug.md` or `project-name-persona-slug.md`.

Examples:
- `ben-design-guru.md` — Ben's personal Design Guru
- `sproutflow-systems-architect.md` — Systems Architect calibrated to Sproutflow context

Keep it readable. The filename is how you identify which version you are loading.

---

## File Length

Personal persona files should be **shorter** than general ones, not longer.

General personas are comprehensive because they serve everyone. Your fork is specific — it adds your context and constraints. It does not need to restate everything the general version already covers.

Target: under 150 lines. If it is longer, trim.
