# Codex handoff — Skills library migration & site build

> **You are Codex, picking up implementation of this project.** This document is self-contained:
> read it plus the four files linked under **Start here**, and you have everything you need to begin
> without any prior conversation. Work the grunt tasks; escalate only the decisions marked
> **NEEDS HUMAN**.

---

## 1. Mission

Convert this repo from a **layered prompt library** (its v1 form) into a **Skills library** in the
Agent Skills format, plus a **Next.js community website** that renders it — modeled on
gtmskills.com / github.com/swan-gtm/gtm-skills, but broader and **Solutions-Engineering-led**.

Why this is happening (full version in `docs/evolution.md`): newer models made heavy persona/role
prompting largely unnecessary; the industry moved to *context engineering* and the *Agent Skills*
open standard. The **judgment** inside the old personas is still gold — we repackage it as skills,
we do **not** throw it away, and we keep the v1 material as documented history.

End state:
1. `skills/<author>/<skill>/SKILL.md` is the going-forward format.
2. A `web/` Next.js site renders the library, SE categories first.
3. Community can contribute via normal PRs against a documented spec + validator.

---

## 2. Start here (read before writing anything)

1. `docs/evolution.md` — the v1→v2 narrative and rationale (with sources).
2. `docs/skill-spec.md` — **the authoritative `SKILL.md` spec.** Follow it exactly.
3. `docs/migration-plan.md` — phase tracker; update statuses as you complete work.
4. The two **pilot skills** — these are your **template and quality bar**:
   - `skills/ben-hankins/run-technical-discovery/SKILL.md`
   - `skills/ben-hankins/scope-a-poc/SKILL.md`

The source material to migrate lives in `02_personas/`, `03_tasks/`, `04_workflows/`.

---

## 3. Current state (as of handoff)

- Branch **`skills-migration`** (off `main`) contains **Phase 0 + the 2 pilot skills** — 6 files.
  Draft PR **#12** is open for human review of the pilot voice.
- `main` = the merged density pass. **Do not commit to `main` directly.**
- Working tree is clean.

**Sequencing:** the human is reviewing the pilot voice on PR #12. You may begin **Wave A** and the
**site scaffold** in parallel on their own branches now; if the human changes the template after
review, you'll refactor Wave A to match (cheap early, expensive late — so keep Wave A tight until
the template is confirmed).

---

## 4. Working conventions (do this every time)

- **Branch per unit of work**, off the latest `skills-migration` (or `main` once #12 merges):
  `wave-a-se-core`, `web-scaffold`, `community-foundation`, etc. One PR per branch.
- **Never touch `main` directly.** Open PRs.
- **Commit style:** imperative subject; end the body with
  `Co-Authored-By: <your agent id>` if your harness supports it. Small, reviewable commits.
- **Every skill records `source:`** in frontmatter — the v1 file(s) its judgment came from. This
  keeps the migration lineage legible and is a project requirement, not optional.
- **Run the validator** (once it exists, Phase 4) before every PR; until then self-check against
  `docs/skill-spec.md`.
- **Slugs are permanent.** kebab-case, and **never rename a skill folder after it merges** — it's
  the public identity.
- **Update `docs/migration-plan.md`** — flip ⬜→✅ as you land work.

### Gotcha: stale local `main`
If a `git diff main..<branch>` ever shows thousands of unexpected deletions, your **local `main` is
stale**, not your branch dirty. Fix with `git fetch origin && git branch -f main origin/main`, then
`git rebase main`. Compare against `origin/main` to see the true diff.

---

## 5. The SKILL.md standard (quick reference)

Full spec: `docs/skill-spec.md`. Summary:

**Layout** (one level, no nesting):
```
skills/<author-slug>/
  author.md                       # creator profile, first submission only
  <skill-slug>/
    SKILL.md
    references/<topic>.md         # optional; depth beyond ~800 words
```

**Frontmatter — required:** `name` (kebab, == folder, ≤60, unique), `title` (sentence case),
`description` (when to use **and** what it produces), `category` (reuse existing — verify with
`grep -rh "^category:" skills/*/*/SKILL.md | sort -u`), `tags` (array from the spec's set).
**Optional:** `source`, `contributors`, `version` (start `1.0.0`), `updated` (ISO date), `difficulty`.

**Body — required order:** (1) *When to use this skill* — one line, decision logic first;
(2) *What it produces* — one line; (3) procedure in `##` subsections, **tool-agnostic verbs**,
~600 words (past ~800 → `references/`); (4) `## What good looks like` (mandatory — the quality bar,
not restated steps); (5) `## Hard rules` (MUST/NEVER lines).

**Categories:** SE core — `discovery`, `poc-design`, `technical-demos`, `stakeholder-navigation`,
`solution-design`, `enablement`, `objection-handling`. Broader — `business`, `commercial`, `career`,
`product`, `engineering`, `research`. (Add new only after grepping the existing set.)

---

## 6. Voice & quality bar — the persona→skill transform

The pilot skills are the template. To turn a v1 persona/task into a skill:

| v1 persona element | becomes in the skill |
|---|---|
| **Core Bias** | the framing baked into *When to use* + the `##` procedure headers |
| **Optimizes For** | the `##` subsections (each optimization = a move the operator makes) |
| **How It Operates** (phases) | the procedure body |
| **Output Contract / "what good looks like"** | `## What good looks like` |
| **Hard Lines** | `## Hard rules` |
| persona name, first-person voice, backstory | **deleted** — a skill is instructions, not a character |

**Keep:** the judgment — what an expert *notices*, the non-obvious pitfalls, the quality bar.
**Cut:** persona theatrics, "you are an expert who…", vendor names, hype adjectives, restated steps.
**Tone:** terse, second-person imperative, concrete. Every sentence earns its place (~600 words).

**Anti-patterns to reject:** a skill that's a bare checklist; a skill that just renames a persona;
"as a seasoned X, you will…" framing; tool/vendor-specific verbs ("open Salesforce" → "check the CRM").

---

## 7. Curation doctrine — do NOT 1:1 migrate

There are 87 personas + 22 tasks + 15 workflows (124 files). The output is **far fewer, sharper
skills** — "judgment, not steps" means consolidation. Be ruthless.

**Worked example (the 23 coaches):** `02_personas/coaches/` has 13 `*-resume-coach` files
(tech, finance, legal, healthcare, sales, …). These do **not** become 13 skills. Collapse to a small
set — e.g. `tailor-a-resume` (one skill; vertical nuances live in `references/<vertical>.md`),
`write-a-cover-letter`, `prep-for-an-interview` — each listing all source files in `source:`.

When several sources overlap, prefer one strong skill with `references/` over many thin ones.

---

## 8. Migration map (source → skill), by wave

Skill names below are **proposals** — refine as judgment dictates, but keep the counts tight.

### Wave A — SE core (do first; this is the employer-facing spine)
| Source(s) | Proposed skill(s) | Category |
|---|---|---|
| `technical/solution-architect-mentor` | ✅ run-technical-discovery, ✅ scope-a-poc, **navigate-stakeholders**, **recover-a-failed-demo**, **translate-for-your-audience** | discovery / poc-design / stakeholder-navigation / technical-demos |
| `technical/systems-architect` + `staff-cto-mentor` | **design-a-solution-architecture**, **write-an-adr** | solution-design |
| `technical/platform-mentor` | **design-for-operability** (the "2 AM" test), reliability review | solution-design |
| `technical/the-security-architect` | **threat-model-a-design**, security review for a POC | solution-design |
| `technical/the-ai-engineer` | **design-an-ai-feature** (+ evals) | product |
| `technical/the-ux-principal`, `tech-wizard` | fold into demo/enablement/engineering as fits | technical-demos / engineering |
| `commercial/the-closer` | **handle-objections** | objection-handling |
| `03_tasks/commercial/*` (client-onboarding, pricing-proposals) | **onboard-a-new-client**, **price-and-propose** | commercial |
| `03_tasks/tech-engineer/*` (build-and-test, ci-cd, deployment, monitoring, security-practices, web-scraping) | consolidate into a few **engineering** skills (e.g. **ship-to-production**, **set-up-ci-cd**, **stand-up-monitoring**) | engineering |

### Wave B — Business, commercial, advisory
`business/*` (12), `commercial/*` (5), `advisory/*` (7) → `business` / `commercial` categories.
Examples: `gtm-strategist`→**build-a-gtm-plan**; `financial-analyst`→**pressure-test-projections**;
`red-team`→**red-team-a-plan**; `vc-partner`+`saas-founder`+`business-plan-architect`→
**assess-venture-viability** / **write-a-business-plan**; `the-closer`/`revenue-multiplier`/
`marketing-mastermind`→ commercial skills. Named-figure personas (`alex-hormozi`, `boring-gold-miner`,
`the-arbitrage-hunter`) → reframe as neutral skills; **drop the persona name.**

### Wave C — Broader tracks
- `coaches/*` (23) → **collapse hard** to career skills (see §7).
- `socials/*` (12) → content/marketing skills (`content` under `commercial`/`product`), collapsed by platform where sensible.
- `specialist/*` (12) → `research` / `product` / lifestyle skills; drop hyper-personal ones (e.g. `oregon-specialist`) or generalize.
- `creative/*` (4), remaining `03_tasks/*` (learning, decision-making, lifestyle, organization, productivity) → skills where they carry real judgment.
- `04_workflows/*` (15) → multi-step skills **or** `references/` depth on related skills. Don't force every workflow into its own skill.

---

## 9. Phase 2 — Next.js site (`web/`)

Model: gtmskills.com. Build in `web/` (App Router + TypeScript + Tailwind).

- **Registry loader (build-time):** parse `skills/**/SKILL.md` + `skills/*/author.md` frontmatter
  (use `gray-matter`) into a typed in-memory registry. This **replaces the role of**
  `prompt-cli-tool/scripts/generate-personas.mjs`; do not depend on that old script.
- **Pages:** home (SE-led hero + featured skills), category browse, skill detail (render the
  markdown body + show frontmatter/`source`), author profile page. **⌘K search** across
  name/title/description/category/tags.
- **IA:** SE categories first (discovery → poc-design → technical-demos → stakeholder-navigation →
  solution-design → enablement → objection-handling), broader tracks below.
- **Design:** clean, editorial, credible-to-employers. Static-exportable; deploy target **Vercel**.
- **NEEDS HUMAN:** custom domain name (leave a `TODO(domain)` in config).

---

## 10. Phase 4 — Community foundation

- `CONTRIBUTING.md` — how to add a skill, link `docs/skill-spec.md`, the branch/PR flow.
- `tools/validate.mjs` — Node script, zero external deps if possible. **Must fail** on: missing
  required frontmatter field; `name` ≠ folder name; `name` not kebab-case or >60 chars; duplicate
  `name` across library; `category` not in the allowed set; `tags` empty or off-list; missing any
  required body section (esp. `## What good looks like` and `## Hard rules`); body >800 words with no
  `references/`. Print a clear per-file report; exit non-zero on any failure.
- **CI:** GitHub Action running `node tools/validate.mjs` on PRs touching `skills/`.
- **Deferred (do NOT build yet):** agent-assisted "paste into Claude → interview → PR" flow, usage
  ranking, richer profiles.

---

## 11. Phase 5 — Restructure & cleanup (near the end)

- **NEEDS HUMAN decision:** move v1 (`00_`–`05_`) into `archive/v1-prompt-library/` vs. keep on a
  git tag/branch. Until decided, **leave v1 in place** — skills reference it via `source:`.
- Rewrite `README.md` to lead with the Skills library + site; link `docs/evolution.md`.
- Retire or repoint `prompt-cli-tool/` at the new `skills/` registry.
- Reconcile stray planning docs (`roadmap.md`, `auto-routing-build-plan.md`,
  `resume-builder-roadmap.md`) — fold into `docs/migration-plan.md` or archive.

---

## 12. Adopted defaults (use unless the human overrides)

- Pilot voice/structure = the template. ✔
- Curation = **ruthless** (fewer, sharper skills). ✔
- `author.md` avatar/LinkedIn/company = leave as `TODO` placeholders. ✔
- Site domain = `TODO(domain)`. ✔
- v1 archiving = **not yet**; leave in place. ✔

---

## 13. Definition of done

**Per skill:** matches `docs/skill-spec.md` exactly; passes validator; `source:` set; voice matches
the pilot; no persona names / vendor terms / hype; ≤~600 words or overflow in `references/`.
**Per wave:** one PR, migration map + `docs/migration-plan.md` updated, all skills validate, human
review requested. **Site:** builds and static-exports clean; renders every skill and author from the
registry; search works; SE-led IA; no dependency on the old `generate-personas.mjs`.

Start with **Wave A**. Keep it tight until the human confirms the pilot template on PR #12.
