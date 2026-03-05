# Master Prompts

> **A reasoning and judgment architecture for AI — not just a folder of prompts.**

Most prompt libraries optimize for outputs. This one optimizes for thinking.

The layered structure is intentional and the load order matters. Each layer builds on the one below it. Personas inherit reasoning rules. Tasks inherit output standards. Nothing overrides the foundation. The system is model-agnostic — it works in Claude, ChatGPT, Gemini, or any AI that accepts a system prompt.

---

## Quick Start

**New to this? Pick your path:**

| | Path | Start Here |
|--|------|------------|
| 🚀 | Need a ready-to-use prompt | [`03_tasks/`](03_tasks/) |
| 🔍 | Want to understand the system | [`00_foundation/foundation.md`](00_foundation/foundation.md) |
| 🧠 | Want expert-level advice | [`02_personas/`](02_personas/) |
| 🪄 | Want to personalize the system | [`05_personal/`](05_personal/) |

---

## Repository Structure

The numbered directories form the backbone of this system, in dependency load order:

| Layer | Directory | What It Does |
|-------|-----------|--------------|
| 🧱 | [`00_foundation/`](00_foundation/) | Identity, research, and reasoning standards |
| 📐 | [`01_response-standards/`](01_response-standards/) | Output quality and expression discipline |
| 👤 | [`02_personas/`](02_personas/) | Expert judgment lenses (domain-organized) |
| 📋 | [`03_tasks/`](03_tasks/) | Ready-to-use prompts for everyday life |
| 🔄 | [`04_workflows/`](04_workflows/) | Composed multi-stage playbooks |
| 🧩 | [`05_personal/`](05_personal/) | Personal persona customizations and team routing |

> 🔼 **Load order matters.** Foundation loads before standards. Standards load before personas. Personas activate before tasks run. The sequence is the system.

---

## 📋 Tasks: Ready-to-Use Prompts

**Start here if you want to use AI right away.**

The `03_tasks/` directory contains prompts you can copy and use immediately:

| Category | What's Inside |
|----------|---------------|
| 🌱 **Lifestyle** | Meal planning, grocery optimization, budget planning |
| ⚡ **Productivity** | Habit formation |
| 📄 **Documents** | Resume review, cover letter, interview preparation |
| 📚 **Learning** | Skill development, research deep-dives, learning from failure |
| 🎯 **Decision-Making** | Purchase decisions |
| 🤝 **Helping** | Mentoring, teaching |
| 📁 **Organization** | File naming, system design |

**[Browse all tasks →](03_tasks/)**

---

## 👤 Personas: Expert Judgment Lenses

**Get specialized advice from expert perspectives.**

Each persona represents a domain expert with specific knowledge, biases, and authority. They are composable — activate one or several depending on your situation.

| Persona | Focus |
|---------|-------|
| 💼 **Business Leader** | Strategy, execution, growth |
| 🎨 **Design Guru** | User experience, aesthetics, usability |
| 💰 **Finance Dragon** | Money, investments, budgets |
| 📣 **Marketing Mastermind** | Brand, messaging, campaigns |
| ⚙️ **Tech Wizard** | Technical architecture, implementation |
| ✍️ **Storyteller** | Narrative, communication, engagement |
| 🔴 **Red Team** | Critical thinking, challenge assumptions |
| ➕ | [Many more →](02_personas/) |

**[Explore all personas →](02_personas/)**

**Want to make a persona your own?** See [`05_personal/`](05_personal/) for an example of how to fork a general persona for your specific context, voice, and constraints. The guide is at [`05_personal/persona-customization-guide.md`](05_personal/persona-customization-guide.md).

---

## 🔄 Workflows: Multi-Stage Playbooks

**For goals that require more than one prompt.**

The `04_workflows/` directory contains sequenced playbooks that combine personas, tasks, and structured stages into a complete execution flow. Workflows run as a single AI conversation — no copy-pasting between stages.

| Workflow | What It Does | Stages |
|----------|--------------|--------|
| [📝 Job Application](04_workflows/job-application.md) | Narrative framing → resume targeting → cover letter → risk check → interview prep | 5 |

**[Browse all workflows →](04_workflows/)**

---

## 🧱 Foundations: Core Standards

**The backbone that ensures quality across everything.**

### `00_foundation/foundation.md`

Combined foundation for:

- **Identity & accountability** — WHO the system is
- **Research standards** — HOW information is gathered
- **Reasoning standards** — HOW decisions are formed

Read this once up front before using personas or teams.

### `📐 01_response-standards/`

Output quality guidelines. Clear, actionable, honest communication. This governs **how answers are delivered**, not how identity or reasoning work.

---

## 🧩 Personal: Fork It for Your Context

**`05_personal/`** shows what it looks like to customize the library for a specific person, project, and context.

It includes:
- 👤 Personal persona variants (general archetypes with specific context added)
- 👥 A personal team routing system for automatic intent-to-persona matching
- 📖 A guide for building your own fork

> 📌 This is not a private section — it is an example. The library is designed to be forked.

---

## Philosophy

> **Quality inputs create quality outputs**

| Principle | Over |
|-----------|------|
| **Clarity** | Verbosity |
| **Judgment** | Pattern-matching |
| **Outcomes** | Activity |
| **Growth** | Appeasement |

---

## Who This Is For

| Audience | What You'll Find |
|----------|------------------|
| 🙋 **Non-technical users** | Ready-to-use prompts for everyday life |
| 💼 **Professionals** | Expert-level AI assistance for your domain |
| 🔧 **Developers** | Building blocks for AI-powered applications |
| 🌍 **Anyone** | Moving beyond basic AI interactions |

No technical background required to use the tasks. The persona and foundation layers reward deeper engagement.

---

## Design Principles

| Principle | What It Means |
|-----------|---------------|
| **Modular** | Components work independently or together |
| **Reusable** | Personas and standards appear unchanged across contexts |
| **Opinionated** | Each component has a clear bias and edge |
| **Resistant to drift** | Standards prevent quality degradation over time |
| **Load-order aware** | The sequence is the system; order is not optional |

---

## Getting Started Paths

### 🚀 Path 1: "I just want to use AI better"
1. Browse [`03_tasks/`](03_tasks/) for your use case
2. Copy a prompt and customize it
3. Done.

### 🔍 Path 2: "I want to understand the system"
1. Read [`00_foundation/foundation.md`](00_foundation/foundation.md)
2. Explore [`02_personas/`](02_personas/) to see expert lenses
3. Check [`01_response-standards/`](01_response-standards/) for output quality

### 🔄 Path 3: "I want guided, multi-stage help"
1. Browse [`04_workflows/`](04_workflows/) for a goal that matches yours
2. Start at Stage 1 and run the workflow as a single AI conversation
3. Each stage carries context forward — no copy-pasting

### 🏗️ Path 4: "I'm building something complex"
1. Understand the foundations (Path 2)
2. Compose personas for your specific needs
3. See [`05_personal/`](05_personal/) for a full example including team routing
4. Fork the system for your own context

---

## Roadmap

### 🟢 MVP Phase 1 — Complete
- Foundation, response standards, personas, tasks — publicly available
- Broad audience: accessible to anyone using AI, no technical background required
- Personal persona customization guide and example

### 🟡 MVP Phase 2 — In Progress
- **Workflows layer** — persona + task + sequence = outcome-driven playbooks
  - ✅ Job Application (5-stage: narrative → resume → cover letter → risk check → interview prep)
  - 🔜 Content Creation (voice alignment → structure → draft → refinement)
  - 🔜 Business Strategy Review (situation framing → option design → risk check)
  - 🔜 Career Decision (offer evaluation / pivot / promotion decision)
- **Task expansion** — filling high-value gaps
  - ✅ Cover Letter
  - ✅ Interview Preparation
  - 🔜 Difficult Conversation / Hard Message
  - 🔜 Situation Audit
  - 🔜 Idea / Offer Validation
  - 🔜 Project Scoping
- **Expert-tier personas** — for builders, developers, and technical users
- **General-purpose team composition templates**

### 🔵 MVP Phase 3
- Paid guide: how to build your own version — mental models, design decisions, persona writing, and team composition
- Claude Skills integration for platform-native execution modules

---

## License

[Add your license here]

---

## Contributing

[Add contribution guidelines if you plan to accept contributions]
