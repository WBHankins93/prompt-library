# Naming Standard (Operational)

This is the authoritative naming standard for all **new files**.

## Core Rule Set

1. **Use lowercase kebab-case** for all markdown filenames.
2. **No version suffixes in filenames** (`-v2`, `-final`, `-new` are not allowed).
3. **One concept per file** (do not combine unrelated concepts).
4. **Name by outcome or role**, not by hype language.
5. **If renamed, update all references in the same change set**.

## By Asset Type

### Personas (`02_personas/`)
- Filename: concise role label (e.g., `security-architect.md`).
- Frontmatter `persona`: one canonical title only.
- Aliases can appear in body text, not in canonical identifiers.

### Tasks (`03_tasks/`)
- Filename should describe end-user outcome (e.g., `resume-review.md`).
- Avoid process-heavy/internal wording.

### Workflows (`04_workflows/`)
- Filename should describe the decision system or outcome (e.g., `career-move-decision.md`).
- Avoid vague terms like `master`, `ultimate`, `all-in-one`.

### Internal Assets (`06-internal-assets/`)
- Governance docs: `docs/<topic>-policy.md`
- Release docs: `release/<topic>-checklist.md` or `release/<topic>-policy.md`
- Quality docs: `quality/<topic>-spec.md` or `quality/<topic>-plan.md`
- Schema docs: `schemas/<asset>-schema.md`

## Minimum PR Checklist (Naming)

- [ ] New filenames are kebab-case.
- [ ] Names are specific and stable.
- [ ] No duplicate/near-duplicate names exist.
- [ ] References were updated for any rename.
- [ ] README/roadmap pointers updated when path changes are introduced.
