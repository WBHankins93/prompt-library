# Fieldskills

An open library of practical Agent Skills: compact, reusable judgment for the work that matters.
The collection starts with Solutions Engineering—discovery, POC design, technical demos,
stakeholder navigation, solution design, enablement, and objection handling—then expands into
business, career, research, product, and content work.

Each skill is a portable `SKILL.md` file with structured metadata, clear activation guidance, and
the hard-earned rules that distinguish good execution from generic advice.

## Start here

- Browse the library in [`skills/`](skills/).
- Read [`docs/skill-spec.md`](docs/skill-spec.md) before authoring a skill.
- See [`docs/evolution.md`](docs/evolution.md) for the story behind the move from personas and
  prompts to Agent Skills.
- Follow [`CONTRIBUTING.md`](CONTRIBUTING.md) to propose a skill.

The canonical path for a skill is:

```text
skills/<author>/<skill-name>/SKILL.md
```

A skill's `name` must match its directory. The frontmatter also records its title, description,
category, tags, source material, version, and update date.

## Use a skill

Open a skill and give it to an Agent Skills-compatible assistant, or copy the relevant instructions
into your working context. The description says when the skill should activate; the body supplies
the judgment, workflow, quality bar, and hard rules.

To interactively select skills for a project:

```bash
cd prompt-cli-tool
npm install
npm run build
cd ..
node prompt-cli-tool/dist/index.js init
```

This writes `skills-config.json` containing stable `author/skill-name` identifiers. The CLI reads
the live `skills/` tree, so it does not rely on generated persona metadata.

## Validate the library

```bash
node tools/validate.mjs
```

The validator checks the directory contract, required frontmatter, semantic versions and dates,
category and tag shapes, duplicate names, descriptions, and required body sections.

## Run the website

The catalog UI lives in [`web/`](web/) and reads the same files at build time.

```bash
cd web
npm install
npm run dev
```

Use `npm run lint` and `npm run build` before proposing website changes.

## Contribute

Use the [authoring guide](docs/authoring-guide.md) for the complete workflow. In short:

1. Create `skills/<your-author-id>/<skill-name>/SKILL.md`.
2. Write a precise activation description and preserve source provenance.
3. Run `node tools/validate.mjs`.
4. Open a focused pull request using the repository template.

## Project history

The numbered directories (`00_foundation/` through `05_personal/`) are the v1 prompt-and-persona
library. They remain in place while the project owner decides whether to archive them in-repo or
preserve them on a tag or branch. They are historical source material, not the primary v2
interface.

The active migration and remaining owner decisions are tracked in
[`docs/migration-plan.md`](docs/migration-plan.md). Older root-level roadmaps are retained as
clearly labeled historical references.

## License

See [`LICENSE`](LICENSE).
