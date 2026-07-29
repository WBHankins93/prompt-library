# SKILL.md spec (this library)

Adapted from the Agent Skills open standard (<https://agentskills.io>) and the conventions proven
by swan-gtm/gtm-skills. If you've authored for gtm-skills, this will feel familiar — the main
differences are our category set (SE-led, broad underneath) and a `source:` field for v1 provenance.

## Folder layout

One level of hierarchy — no nested skills.

```
skills/
└── <author-slug>/
    ├── author.md              # your creator profile (first submission only)
    └── <skill-slug>/
        ├── SKILL.md
        └── references/        # optional; deeper material
            └── <topic>.md
```

- `<author-slug>` and `<skill-slug>` are **kebab-case** and **never renamed after merge** — they're
  the permanent public identity of your work.

## SKILL.md frontmatter

**Required**

| Field | Rule |
|-------|------|
| `name` | Kebab-case, **matches the folder name exactly**, ≤60 chars, unique across the library |
| `title` | Display name, sentence case |
| `description` | When to use it **and** what it produces; dense, user-facing language (this is what an agent reads at discovery time) |
| `category` | Reuse an existing category (see below) |
| `tags` | Array from the tag set below |

**Optional**

| Field | Rule |
|-------|------|
| `source` | Provenance — the v1 file(s) this skill's judgment came from (e.g. `02_personas/technical/solution-architect-mentor.md`). Keeps the migration lineage legible. |
| `contributors` | Array of other author slugs who collaborated |
| `version` | SemVer; start at `1.0.0` |
| `updated` | ISO date `YYYY-MM-DD` |
| `difficulty` | `intermediate` \| `advanced` (omit for general skills) |

> Lifecycle/operational fields beyond the above are not allowed — keep frontmatter portable.

## Body sections (required order)

1. **When to use this skill** — one line. Lead with decision logic; this drives agent activation.
2. **What it produces** — one line.
3. **Procedure** — `##` subsections. Tool-agnostic verbs ("check the CRM", "load the ICP"), never
   vendor names. Target **~600 words**; past ~800, move depth into `references/<topic>.md`.
4. **## What good looks like** — *mandatory*. Encodes the quality bar and expert judgment, not a
   restatement of steps.
5. **## Hard rules** — MUST / NEVER statements. The lines the skill will not cross.

**Principle:** encode *judgment, not checklists* — what an experienced operator notices, the common
pitfalls, and what "done well" actually means. A bare step list is not a skill.

Do not cross-reference other skills by name (they get renamed/split); reference deeper material via
`references/` instead.

## Categories (SE-led, broad underneath)

Verify the current set before adding one:
`grep -rh "^category:" skills/*/*/SKILL.md | sort -u`

Solutions-Engineering core: `discovery`, `poc-design`, `technical-demos`, `stakeholder-navigation`,
`solution-design`, `enablement`, `objection-handling`.
Broader tracks (added as content migrates): `business`, `commercial`, `career`, `product`,
`engineering`, `research`.

## Tags

Array drawn from:
`[Solutions Engineering | Sales Engineering | Engineering | Product | Business | Commercial | Career | Research | Leadership]`

## Validation

Run `node tools/validate.mjs` and fix everything it reports before opening a PR. CI enforces the
same checks. (Validator lands with Phase 4; until then, self-check against this spec.)
