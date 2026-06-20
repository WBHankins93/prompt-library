# Versioning Standard

**How personas (and other library assets) are versioned, baselined, and tracked as they evolve.**

Git already stores every raw diff. This standard adds the legible layer on top: a
semantic version, a human-readable changelog of *why* each change happened, and a
frozen git baseline of the originals. The goal is to answer three questions without
git archaeology:

1. **What did this persona look like originally?** → the baseline git tag.
2. **How much has it changed?** → the semantic version.
3. **Why did it change?** → the frontmatter changelog.

---

## 1. Semantic versioning

Versions are `MAJOR.MINOR.PATCH`. The number signals *how much the persona's behavior shifted*:

| Bump | When | Example |
|------|------|---------|
| **MAJOR** (`x.0.0`) | Identity or `Core Bias` changes — the persona now reasons or decides differently. | The density-pass rewrites (2.0.0): structure and contract changed. |
| **MINOR** (`x.y.0`) | A section is added, removed, or its behavior refined, but the bias holds. | Adding a `Worked Example`; tightening `How It Operates`. |
| **PATCH** (`x.y.z`) | Wording, typos, formatting — no behavior change. | Fixing a broken link; rephrasing a bullet. |

Rule of thumb: if loading the new version would make the model produce a *different
recommendation* on the same input, it's at least a MINOR. If the *kind* of advice
changed, it's a MAJOR.

---

## 2. Status lifecycle

The `status` frontmatter field tracks where a persona is in its life:

`draft` → `active` → `locked` → `deprecated`

- **draft** — being authored or piloted; not yet trusted in workflows.
- **active** — in use and maintained; the normal state.
- **locked** — stable and deliberately frozen; change requires a conscious version bump and a reason.
- **deprecated** — superseded; kept for history, points to its replacement in the changelog.

---

## 3. Frontmatter changelog

Every persona carries its own history inline. Newest entry first:

```yaml
version: 2.0.0
status: active
last_updated: 2026-06-19
changelog:
  - version: 2.0.0
    date: 2026-06-19
    type: major
    summary: >
      Density-pass rewrite to the canonical persona spec. Cut biographical prose and
      the duplicated Golden Rules block; added Core Bias, Optimizes For, and a Worked
      Example. ~3,100w → ~700w.
  - version: 1.0.0
    date: 2026-03-06
    type: initial
    summary: Original persona, long-narrative style.
```

- `type` is one of `initial | major | minor | patch`.
- `summary` records *intent*, not a line diff — that's what git is for.
- Keep `version` and the top changelog entry in sync; update `last_updated` on every change.

---

## 4. Baseline git tags (the "original" snapshot)

Full original versions live in git, marked by annotated tags so any baseline is
retrievable by name instead of by hunting for a commit hash.

| Tag | Marks |
|-----|-------|
| `personas-v1.0` | The complete persona roster *before* the density pass — the long-narrative and stub originals. |

Future library-wide baselines get their own tag (`personas-v2.0`, etc.) at the commit
where that pass completes.

**Retrieve an original persona without disturbing your working tree:**

```bash
# View the original
git show personas-v1.0:02_personas/coaches/the-executive-coach.md

# Restore one original to a scratch file
git show personas-v1.0:02_personas/coaches/the-executive-coach.md > /tmp/original.md

# See everything that changed since the baseline
git diff personas-v1.0 -- 02_personas/
```

> Tags are created locally and pushed with `git push origin <tag>` when you're ready to
> publish them. A tag never duplicates files in the working tree, so the roster stays
> clean and the baseline can't silently drift.

---

## Why not a file archive of originals?

Copying all 86 originals into an `archive/` folder was considered and rejected: it
duplicates the roster, the copies drift from reality the moment someone "fixes a typo"
in one place, and it bloats the repo and any context that loads it. Git already stores
the originals perfectly — the tag just gives them a name.
