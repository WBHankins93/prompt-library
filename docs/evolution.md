# Where this library started, and where it's going

> The short version: this began as a layered **prompt library** and is becoming a
> **Skills library** — because that's where the models, and the industry, moved.

## Where we started (v1 — the layered prompt library)

The first generation of this repo was a *reasoning and judgment architecture* for AI, built
in dependency load order:

```
00_foundation → 01_response-standards → 02_personas → 03_tasks → 04_workflows
```

The centerpiece was **personas** — 87 expert "judgment lenses" across 9 domains, each with a
Core Bias, what it Optimizes For, how it Operates, and its Hard Lines. You activated one (or
several) as a system prompt, and tasks/workflows inherited the foundation and output standards
beneath them. It was deliberate, opinionated, and load-order-aware.

That architecture was the *right design for its moment*. Getting good, consistent output from
2023–2025-era models genuinely rewarded elaborate role-framing and layered scaffolding.

## Why we're moving

The moment changed. Anthropic's own engineers have been explicit that with newer models:

- **Heavy-handed role prompting is now often unnecessary** — *"modern models are sophisticated
  enough that heavy-handed role prompting is often unnecessary,"* and *"overly specific roles can
  limit the AI's helpfulness."*
  (<https://claude.com/blog/best-practices-for-prompt-engineering>)
- **The discipline shifted from prompt engineering to _context engineering_** — curating the whole
  set of tokens the model sees (system prompt, tools, retrieved docs, memory) at the *"right
  altitude"*: strong heuristics, not brittle hardcoded logic.
  (<https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>)
- **The packaging format of this era is Agent Skills** — a folder with a `SKILL.md`
  (YAML frontmatter + markdown) plus optional `references/`, loaded by *progressive disclosure*
  (discovery → activation → execution). Tool-agnostic and composable. Open standard since Dec 2025.
  (<https://agentskills.io>)

The persona model isn't *wrong* — but "activate this persona" as the primary interface is the part
that dated. The **judgment** inside each persona is still the hard, valuable thing. It ports
directly into Skills.

## Where we're going (v2 — the Skills library)

- **Skills-first.** The going-forward format is `skills/<author>/<skill>/SKILL.md`
  (see [`skill-spec.md`](skill-spec.md)). Each skill encodes *judgment, not steps*.
- **The v1 judgment is preserved, not discarded.** Personas/tasks/workflows are the *source
  material*; their Core Bias and Hard Lines become the voice and quality bar inside skills. Each
  migrated skill records its `source:` provenance so the lineage stays legible.
- **Solutions-Engineering-led, broad underneath.** The public library and site lead with SE
  jobs-to-be-done (discovery, POC design, technical demos, stakeholder navigation), with the
  broader domains as additional tracks.
- **A community, not just a portfolio.** Modeled on gtmskills.com / swan-gtm/gtm-skills: browsable
  by category, contributor profiles, agent-readable skills anyone can PR.

The v1 layered library remains in the repo as documented history — this document *is* that record.
Migrating it, in the open, with the reasoning attached, is itself the point.
