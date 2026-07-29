# Skill authoring guide

Use this guide to turn real operating experience into a portable Agent Skill. The authoritative
format remains [`skill-spec.md`](skill-spec.md).

## Start with a decision, not a role

Write down the moment the skill should activate:

> Use when discovery is complete and both sides need to agree what a POC will prove.

If the trigger is a profession ("use when you are a product manager") or a broad topic ("use for
marketing"), the scope is not sharp enough. A good skill begins at a consequential decision and
ends with a recognizable artifact or outcome.

## Name the judgment

List what an experienced operator notices that a competent generalist might miss:

- the quiet stakeholder who can veto the decision;
- the difference between a technical pass and a business win;
- the constraint that becomes expensive only after implementation starts;
- the tempting shortcut that damages trust later.

These observations become procedure sections, quality criteria, and hard rules. Ordinary setup
steps do not need paragraphs unless their execution requires unusual judgment.

## Consolidate before drafting

Prefer one strong skill over several variations of the same job. Put stable vertical or scenario
differences in `references/` when they materially change execution. Do not split by vendor,
platform, or persona merely to create more entries.

For v1 migrations, use this translation:

| Source element | Skill destination |
|---|---|
| Core Bias | activation framing and procedure headers |
| Optimizes For | the operator's main moves |
| How It Operates | procedure body |
| Output Contract | `## What good looks like` |
| Hard Lines | `## Hard rules` |

Delete persona names, backstory, first-person framing, hype, and vendor-specific instructions.
Preserve the expert's non-obvious judgment.

## Draft at the right altitude

Use terse second-person imperatives and tool-agnostic verbs. Explain how to decide, what signals to
notice, and where work commonly fails. Avoid both extremes:

- a bare checklist that any model could invent;
- a long essay that must be reread before acting.

Target roughly 600 body words. Beyond 800 words, move optional depth into a directly linked
`references/<topic>.md` file.

## Test the contract

Before submitting, check:

- The description says both when to use the skill and what it produces.
- The output is concrete enough that two reviewers could judge whether it is complete.
- `## What good looks like` states a quality bar rather than repeating the procedure.
- Every hard rule protects trust, safety, scope, or decision quality.
- The skill remains useful if a tool, employer, or vendor changes.
- `source:` records every v1 file whose judgment was used.

Then run `node tools/validate.mjs`.
