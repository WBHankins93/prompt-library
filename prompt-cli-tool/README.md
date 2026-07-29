# Fieldskills CLI

A small TypeScript CLI that reads the live `skills/` registry and lets you choose the Agent Skills
to associate with a project.

## Install and run

Run the command from the repository root so it can discover `skills/**/SKILL.md`:

```bash
cd prompt-cli-tool
npm install
npm run build
cd ..
node prompt-cli-tool/dist/index.js init
```

You can also link it globally:

```bash
cd prompt-cli-tool
npm link
cd ..
fieldskills init
```

## What `init` does

- Discovers every `skills/<author>/<name>/SKILL.md` file at runtime.
- Reads its frontmatter without maintaining a generated metadata copy.
- Groups skills by category in an interactive multi-select.
- Writes `skills-config.json` with stable `author/name` identifiers.

Example output:

```text
? Select skills for this project
 discovery
 ◉ Run technical discovery  Use when preparing for, running, or debriefing…
 poc-design
 ◯ Scope a POC              Use when turning discovery into a bounded…

Selected skills:
- ben-hankins/run-technical-discovery

Wrote skills-config.json at /your/repository/skills-config.json
```

Use `--no-write-config` to preview a selection without creating the file.

## File structure

```text
prompt-cli-tool/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts
    ├── types.ts
    └── commands/
        └── init.ts
```
