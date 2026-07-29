# Contributing a skill

This library accepts focused Agent Skills: reusable operating judgment that helps an agent perform
a real job better. Contributions arrive through ordinary GitHub pull requests.

## Before writing

1. Search `skills/` for overlapping jobs to be done. Strengthen an existing skill when the new
   judgment fits cleanly; do not create a near-duplicate for a new industry or tool.
2. Read [`docs/skill-spec.md`](docs/skill-spec.md), then use
   [`docs/authoring-guide.md`](docs/authoring-guide.md) while drafting.
3. Choose a short, verb-led kebab-case slug. Slugs are permanent after merge.

## Add the skill

Create:

```text
skills/<your-author-slug>/
  author.md
  <skill-slug>/
    SKILL.md
    references/<topic>.md  # only when deeper material is necessary
```

Add `author.md` only with your first contribution. Keep profiles concise; do not place private
contact information in the repository.

Every `SKILL.md` must follow the frontmatter and body order in the spec. If the skill migrates
judgment from this repository's v1 prompt library, set `source:` to every source file used.

## Validate locally

Run:

```sh
node tools/validate.mjs
```

Fix every reported error. The same check runs in CI when a pull request changes `skills/`.

## Open the pull request

1. Branch from the latest `main`.
2. Keep one coherent skill or tightly related consolidation per pull request.
3. Explain the job to be done, the judgment added, and any sources consolidated or deliberately
   excluded.
4. Complete the pull request checklist and request review.

Maintainers review for usefulness, overlap, provenance, portability, and whether the skill encodes
expert judgment rather than a generic checklist. Passing validation is necessary, not sufficient.
