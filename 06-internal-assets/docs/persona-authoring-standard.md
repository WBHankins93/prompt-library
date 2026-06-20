# Persona Authoring Standard

**The canonical spec every persona in `02_personas/` is written against.**

Read [`context-engineering-principles.md`](context-engineering-principles.md) first —
it explains *why* this standard exists. This document explains *what* to write.

---

## The problem this fixes

Personas drifted into two incompatible house styles:

- **Long biographical narrative** (~2,000–3,100 words) — opens with invented backstory,
  restates the foundation's Golden Rules, and carries flavor sections that read well but
  don't change model behavior.
- **Compact stubs** (~190–260 words) — tight and operational, but too thin to carry a
  real bias or edge, so they behave like a generic assistant wearing a label.

Neither is right. The standard converges on a **dense middle**.

---

## Target length

**~400–700 words** (excluding frontmatter).

- A persona under ~400 words usually lacks a real edge — add bias and judgment.
- A persona over ~700 words is usually carrying biography or repeating the foundation — cut it.

These are guide rails, not hard gates. A persona with genuinely irreducible domain
complexity may run slightly long; a sharply-scoped one may run slightly short. The
test is always density, not the word count itself.

---

## Required structure

```
---
persona: <Name>
domain: <technical|business|commercial|creative|advisory|coaches|orientation|socials|specialist>
version: <major.minor.patch>          # see versioning-standard.md
status: <draft|active|locked|deprecated>
last_updated: <YYYY-MM-DD>
depends_on:
  - 00_foundation
  - 01_response-standards
use_cases:
  - <short use case>
  - <short use case>
changelog:                            # newest first; record intent, not line diffs
  - version: <major.minor.patch>
    date: <YYYY-MM-DD>
    type: <initial|major|minor|patch>
    summary: <what changed and why>
---

# <Name>
Persona · <three role descriptors>

## Core Bias
One to two sentences. The opinionated edge — the thing this persona believes that a
generic assistant wouldn't say. Lead with it; it is the highest-value line in the file.

## Optimizes For
3–5 bullets. What it trades off and why. Name what it sacrifices, not just what it wants.

## How It Operates
The behavior-changing core — this is where the words go. The operating flow, the lenses
it applies, the diagnostic questions it asks, what it actually does differently. Use
sub-bullets or a numbered flow. Everything here must change the output.

## Output Contract
What it produces, in the "Success Brief" framing where useful:
- **Output shape** — type and structure of what it returns
- **What good looks like** — the bar the output must clear
- **What it must NOT be** — the failure mode to avoid

## Activation & Distinctions
- **Load when:** the situations that should trigger this persona.
- **Don't load when:** what to route elsewhere instead.
- **Distinct from <sibling>:** one line each for personas it's easily confused with.

## Hard Lines
Short. The refusals and guardrails — what this persona will not do, even if asked.

## Worked Example (optional)
ONE compact few-shot (~6 lines): a realistic input and how this persona responds
differently from a generic one. High value per token — include it when the persona's
edge is easier to show than to state.
```

---

## What to cut (from the long style)

- **Biographical prose** ("Started as a software engineer, moved into…"). Replace with bias.
- **The per-file `Golden Rules` block.** It duplicates [`00_foundation/golden-rules.md`](../../00_foundation/golden-rules.md). Inherit it via `depends_on`; do not restate it.
- **`Definition of Success` essays.** Fold the one useful line into `Output Contract`.
- **`Relationship to Other Personas` prose.** Compress into one-line entries under `Distinctions`.
- **`Core Identity` narrative.** The persona is its judgment, not its résumé.

## What to add (to the thin stubs)

- An explicit **`Core Bias`** — the stub's missing edge.
- **`Optimizes For`** with real tradeoffs.
- A **`Worked Example`** if the bias is easier shown than told.

---

## Authoring checklist

Before committing a persona:

- [ ] 400–700 words, and every section passes the "delete test" (does the output get worse without it?).
- [ ] Frontmatter complete; `depends_on` lists `00_foundation` and `01_response-standards`.
- [ ] No `Golden Rules` block (inherited, not restated).
- [ ] `Core Bias` is genuinely opinionated — it says something a generic assistant wouldn't.
- [ ] `Activation & Distinctions` disambiguates it from its closest siblings.
- [ ] Voice and edge survive the cut — the persona is not interchangeable with its neighbors.
- [ ] `version` bumped per [`versioning-standard.md`](versioning-standard.md), and a `changelog` entry records what changed and why.
