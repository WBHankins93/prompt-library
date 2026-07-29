# Migration plan — from prompt library to Skills library + site

Living document. Tracks the updates needed to complete the move described in
[`evolution.md`](evolution.md). Status legend: ✅ done · 🚧 in progress · ⬜ not started.

## Phase 0 — Foundation & narrative ✅

- ✅ `docs/evolution.md` — the where-we-started / why / where-we're-going record.
- ✅ `docs/skill-spec.md` — this library's `SKILL.md` spec (adapted from Agent Skills + gtm-skills).
- ✅ `skills/ben-hankins/author.md` — creator profile. **Needs your input:** `avatarUrl`,
  `linkedinUrl`, `companyDomain` are TODO placeholders.

## Phase 1 — Pilot migration ✅

- ✅ `skills/ben-hankins/run-technical-discovery/SKILL.md`
- ✅ `skills/ben-hankins/scope-a-poc/SKILL.md`
- Both migrated from `02_personas/technical/solution-architect-mentor.md` (recorded in `source:`).
- **Your review gate:** react to the shape of these two before we migrate at scale.

---

## Phase 2 — Next.js site ⬜

Build a `web/` Next.js app modeled on gtmskills.com. Updates needed:

- ⬜ Scaffold Next.js (App Router) + Tailwind in `web/`.
- ⬜ Build-time loader that reads `skills/**/SKILL.md` + `author.md` (gray-matter frontmatter) into a
  typed registry. This **replaces the role of** `prompt-cli-tool/scripts/generate-personas.mjs`
  (which currently emits `personas.json` from `02_personas/`).
- ⬜ Pages: home (SE-led hero + featured), category browse, skill detail (rendered markdown +
  frontmatter), author profile. ⌘K search.
- ⬜ Information architecture: SE categories first (discovery, poc-design, technical-demos,
  stakeholder-navigation, solution-design, enablement, objection-handling), broader tracks below.
- ⬜ Deploy to Vercel; wire custom domain (**decision needed:** domain name).

## Phase 3 — Migration waves ⬜

**Do not 1:1 port all 124 files** (87 personas + 22 tasks + 15 workflows). Curate down — many
personas collapse into fewer, sharper skills.

- ⬜ **Wave A — SE core.** Mine the technical + commercial personas/tasks for SE skills: technical
  demos, stakeholder navigation, objection handling, solution/architecture design, demo recovery,
  enablement/handoff. (Sources incl. `solution-architect-mentor`, `staff-cto-mentor`,
  `the-security-architect`, `platform-mentor`, commercial tasks.)
- ⬜ **Wave B — Business & commercial.** business + commercial + advisory domains → pricing,
  proposals, GTM, decision/red-team skills.
- ⬜ **Wave C — Broader tracks.** creative, coaches, socials, specialist, learning/decision tasks,
  workflows → career, research, product, content skills.
- ⬜ For each wave: pick source → distill judgment → write to spec → self-validate → record `source:`.
- ⬜ Fold `04_workflows/` in as multi-step skills or `references/` where they add depth.

## Phase 4 — Community foundation ⬜

- ⬜ `CONTRIBUTING.md` — how to add a skill, the spec, the PR flow.
- ⬜ `tools/validate.mjs` — enforce frontmatter/body rules from `skill-spec.md`; wire into CI
  (GitHub Action on PR).
- ⬜ PR template + skill authoring guide.
- ⬜ *(Deferred, per your call)* agent-assisted "paste into Claude → interview → draft → PR" flow;
  usage ranking; richer contributor profiles.

## Phase 5 — Repo restructure & cleanup ⬜

- ⬜ **Decision still open:** move v1 (`00_`–`05_`) into `archive/v1-prompt-library/` **or** keep it
  on a git tag/branch and slim the root. (You paused on this; nothing moved yet.)
- ⬜ Rewrite `README.md` to lead with the Skills library + site; link `docs/evolution.md` as the story.
- ⬜ Reconcile `prompt-cli-tool/` — retire or repoint at the new `skills/` registry.
- ⬜ Reconcile the older planning docs (`roadmap.md`, `auto-routing-build-plan.md`,
  `resume-builder-roadmap.md`) — keep, archive, or fold into this plan.

## Open decisions for you

1. Reaction to the two pilot skills — voice, density, structure: keep as the template?
2. `author.md` details (avatar / LinkedIn / company).
3. Archive location for v1 (in-repo `archive/` vs. tag/branch).
4. Site domain name.
5. Curation aggressiveness — how ruthlessly to collapse 124 v1 files into fewer skills.
