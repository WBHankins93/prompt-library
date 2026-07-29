# Fieldskills web

The static-exportable public library for the repository's Agent Skills.

## Local development

```sh
npm install
npm run dev
```

The registry reads `../skills/**/SKILL.md` and `../skills/*/author.md` at
build time. Set `SKILLS_DIR` to override that location.

## Production build

```sh
npm run lint
npm run build
```

`next build` writes the static site to `out/`. The Vercel project root should
be `web/`. The public domain remains `TODO(domain)`.
