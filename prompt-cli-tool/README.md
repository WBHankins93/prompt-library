# prompt-cli-tool (v1)

A TypeScript CLI for quickly scaffolding a persona-library project configuration.

## Install & run

```bash
cd prompt-cli-tool
npm install
npm run build
node dist/index.js init
```

You can also link it globally:

```bash
npm link
persona-library init
```

## What `init` includes

- Interactive multi-select for **all personas** in `02_personas/`, grouped by category.
- Interactive multi-select for **tasks** from `03_tasks/` (you pick what to include).
- Automatic inclusion of **foundation** docs from `00_foundation/`.
- Automatic inclusion of **response standards** from `01_response-standards/`.
- **Workflows are intentionally not included in v1 output right now.**

## Example terminal output

```text
? Select personas for this project
❯◉ Technical
 ◉ Tech Wizard              Friendly Genius → Systems Thinker, Technical Mentor
 ◯ The AI Engineer          AI Systems Architect → LLM Product Builder, Evaluation Strategist

? Select tasks for this project
❯◉ Documents
 ◉ Resume Review            Prompt template → documents execution
 ◯ Cover Letter             Prompt template → documents execution

Selected personas:
- tech-wizard

Selected tasks:
- 03_tasks/documents/resume-review.md

Automatically included resources:
- foundation: 4
- response standards: 1

Wrote project-config.json at /your/path/project-config.json
```

## Regenerating persona metadata

Personas are rendered from metadata at `src/data/personas.json`. To refresh from `02_personas/**`:

```bash
npm run generate:personas
```

## File structure

```text
prompt-cli-tool/
├── package.json                 # Node package + CLI entry definition
├── tsconfig.json                # TypeScript compiler config
├── scripts/
│   └── generate-personas.mjs    # Builds persona metadata from 02_personas/**/*.md
└── src/
    ├── index.ts                 # CLI setup + init command registration
    ├── types.ts                 # Shared persona/config/task types
    ├── commands/
    │   └── init.ts              # Persona + task pickers + config writer
    └── data/
        └── personas.json        # Persona metadata rendered by the CLI
```
