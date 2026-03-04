# Personal

This directory is for personal persona customizations and personal team routing.

The public library in `02_personas/` ships general-purpose personas — archetypes designed to work for anyone, in any context. They are intentionally abstract.

This directory shows what it looks like when you fork those archetypes for your own context, voice, and use cases.

---

## What Lives Here

**Personal persona variants** — Forks of general personas that carry specific context: your business, your constraints, your goals, your voice. The general persona defines the role; the personal variant defines the version of that role calibrated to your situation.

**`teams/`** — Personal team compositions and routing logic. This shows how to wire specific persona stacks together for your recurring contexts and projects. Teams here are opinionated about which personas activate for which situations, and why.

---

## The `teams/` Subdirectory

The `teams/` subdirectory contains:
- An auto-routing system (classifier, routing table, load order, response templates)
- Project-specific team compositions (e.g., Sproutflow, Little Rituals, Empire Builder)

This is an example of what a fully built-out personal routing layer looks like. It handles intent classification, persona stack selection, and output structure automatically — so any incoming request routes to the right expert configuration without manual setup.

See `teams/team-composition.md` for how it works.

---

## How to Build Your Own

**Start with the persona customization guide:**

→ `05_personal/persona-customization-guide.md`

It walks through what to change, what not to change, and gives you a minimal template to start from.

The pattern is:
1. Pick a general persona from `02_personas/` that fits your domain
2. Fork it into `05_personal/` with your-name or your-project as a prefix
3. Add your specific context, constraints, voice notes, and hard lines
4. Keep the foundation and response standards inheritance intact

You own the result. The general persona stays clean for everyone else.

---

## What This Is Not

This directory is not private — it is an example. The files here are meant to show what personal customization looks like in practice, not to be hidden from view.

The general library is designed to be forked. This directory shows one person's fork. Build your own.
