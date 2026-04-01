# 📋 Tasks · Ready-to-Use Prompts for Everyday Life

## Purpose

The `tasks/` directory contains self-contained, ready-to-use prompts you can **copy and use immediately** with any AI assistant. Most categories are written for everyday, non-technical use; **`commercial/`** and **`tech-engineer/`** assume professional services or engineering context.

---

## What Tasks Are

| Property | What It Means |
|----------|---------------|
| 📦 **Self-contained** | Complete, ready-to-use — no setup required |
| 🙋 **Accessible** | Written for non-technical users, no special knowledge required |
| 🛠️ **Practical** | Focused on real-world outcomes you can use today |
| 🔌 **Standalone** | Work independently, though they inherit quality standards from the master prompts |

Tasks help you:
- 📚 Learn new skills and understand complex topics
- 🤝 Help others learn and solve problems
- 🔁 Optimize boring but necessary tasks (grocery shopping, budgeting, etc.)
- 🏗️ Build systems for positive outcomes (habits, productivity, organization)
- 🎯 Make better decisions
- 📄 Create professional documents

---

## What Tasks Are Not

Tasks are **not**:
- 👤 Expert personas (those are in [`02_personas/`](../02_personas/))
- 👥 Team compositions (those are in [`05_personal/teams/`](../05_personal/teams/))
- 🧱 Foundational standards (those are in [`00_foundation/`](../00_foundation/))

---

## Task Categories

| Category | What's Inside |
|----------|---------------|
| 🤝 **Helping** | Teaching, mentoring, helping others learn or solve problems |
| 📚 **Learning** | Skill development, research deep dives, learning from mistakes |
| 🌱 **Lifestyle** | Meal planning, grocery optimization, budget planning, home organization |
| 📁 **Organization** | File systems, note-taking, systems that make life easier |
| 📄 **Documents** | Resumes, cover letters, professional documents |
| ⚡ **Productivity** | Complex productivity systems, habit formation, workflow optimization |
| 🎯 **Decision-Making** | Purchase decisions, career choices, life changes |
| 💼 **Commercial** | Client onboarding, pricing and proposals for services |
| ⚙️ **Tech engineer** | Build, deploy, CI/CD, security, monitoring, scraping — assumes technical context |

---

## How to Use Tasks

1️⃣ Browse categories to find what you need
2️⃣ Open the task file
3️⃣ Copy the prompt
4️⃣ Paste it into your AI assistant
5️⃣ Follow the instructions and provide your specific information

Each task includes:
- 📌 Clear instructions
- 📝 What information you'll need to provide
- 📤 What to expect as output
- 💡 Tips for best results

---

## How Tasks Relate to the System

All tasks inherit quality standards from:
- 🧱 `00_foundation/foundation.md` — Identity, research, and reasoning standards
- 📐 `01_response-standards/` — Clear, actionable outputs

Tasks may optionally suggest relevant personas when they would add value, but **tasks work perfectly fine on their own.**

---

## Task File Format

Each task includes:

| Section | What's In It |
|---------|--------------|
| **Frontmatter** | Category, difficulty, time estimate, optional persona suggestions |
| **Task Description** | What this task helps you accomplish |
| **Instructions** | Step-by-step guidance |
| **Example** | Sample inputs and outputs |
| **Tips** | How to get the best results |

---

## Creating New Tasks

When creating a new task:

1. Choose the appropriate category
2. Use kebab-case naming (e.g., `meal-planning.md`)
3. Include frontmatter with category and metadata
4. Write clear, non-technical instructions
5. Provide examples
6. Test it yourself before adding

> ✅ Tasks should be immediately usable by someone who has never used AI before.

---

## Design Philosophy

| Principle | What It Means |
|-----------|---------------|
| **Simple** | No complex setup required |
| **Practical** | Solve real problems people face |
| **Accessible** | No technical jargon or assumptions |
| **Effective** | Produce useful, actionable results |

> Engineering-focused prompts live in **`tech-engineer/`** — they assume you are comfortable with repos, hosting, and tooling. If a task is internal runbook material for a specific codebase rather than a reusable prompt, it may belong in project `docs/` instead.
