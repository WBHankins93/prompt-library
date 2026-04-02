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
| 🔄 | Want guided, multi-stage help | [`04_workflows/`](04_workflows/) |
| 🪄 | Want to personalize the system | [`05_personal/`](05_personal/) |

---

## Repository Structure

The numbered directories form the backbone of this system, in dependency load order:

| Layer | Directory | What It Does |
|-------|-----------|--------------|
| 🧱 | [`00_foundation/`](00_foundation/) | Identity, research, and reasoning standards |
| 📐 | [`01_response-standards/`](01_response-standards/) | Output quality and expression discipline |
| 👤 | [`02_personas/`](02_personas/) | Expert judgment lenses — 80 personas across 9 domains |
| 📋 | [`03_tasks/`](03_tasks/) | Ready-to-use prompts for everyday life |
| 🔄 | [`04_workflows/`](04_workflows/) | Composed multi-stage playbooks — 13 workflows |
| 🧩 | [`05_personal/`](05_personal/) | Personal persona customizations and team routing |
| 🛠️ | [`06-internal-assets/`](06-internal-assets/) | Operational docs, quality assets, schemas, and release checklists |

> 🔼 **Load order matters.** Foundation loads before standards. Standards load before personas. Personas activate before tasks run. The sequence is the system.

> Note: `06-internal-assets/` is maintenance infrastructure, not runtime prompt context.

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
| 💼 **Commercial** | Client onboarding, pricing and proposals |
| ⚙️ **Tech engineer** | Build and test, CI/CD, deployment, security, monitoring, web scraping |

**[Browse all tasks →](03_tasks/)**

---

## 👤 Personas: Expert Judgment Lenses

**Get specialized advice from expert perspectives.**

Each persona represents a domain expert with specific knowledge, biases, and authority. They are composable — activate one or several depending on your situation. **80 personas** across 9 domains.

| Domain | Examples |
|--------|---------|
| ⚙️ **Technical** | Tech Wizard, Platform Engineer, Staff/CTO Mentor, UX Principal, AI Engineer, Security Architect |
| 💼 **Business** | Business Leader, SaaS Founder, Boring Gold Miner, Arbitrage Hunter |
| 📈 **Commercial** | Revenue Multiplier, Marketing Mastermind, The Closer |
| 🎨 **Creative** | Design Guru, Storyteller, Inner Voice |
| ⚖️ **Advisory** | Red Team, Finance Dragon, Legal Advisor, Decision Anchor, Self-Made Investor, Executive Coach |
| 🧑‍🏫 **Coaches** | Resume Architect, Engineering Resume Coach, Federal Resume Coach |
| 🧭 **Orientation** | Wayfinder, Explorer-Scholar, Ignition Coach |
| 📱 **Socials** | Content Strategist, Engagement Engine, Instagram Growth Strategist |
| 🎯 **Specialist** | Career Strategist, Health Optimizer, Academic Coach, Writing Coach, Property Analyst, and more |

**[Explore all 80 personas →](02_personas/)**

**Want to make a persona your own?** See [`05_personal/`](05_personal/) for an example of how to fork a general persona for your specific context, voice, and constraints.

---

## 🔄 Workflows: Multi-Stage Playbooks

**For goals that require more than one prompt.**

Workflows run as a single AI conversation — no copy-pasting between stages. Each stage builds on the previous. **13 workflows** organized by domain.

### Life & Career

| Workflow | Stages | What It Does |
|----------|--------|--------------|
| [📝 Job Application](04_workflows/job-application.md) | 5 | Narrative framing → resume → cover letter → risk check → interview prep |
| [💼 Career Move Decision](04_workflows/career-move-decision.md) | 4 | Strategic clarity → compensation reality → identity check → decision |
| [🏠 Home Purchase Due Diligence](04_workflows/home-purchase-due-diligence.md) | 4 | Property assessment → financial reality → legal review → negotiation |
| [💪 Personal Health System](04_workflows/personal-health-system.md) | 4 | Baseline → evidence check → system design → habit architecture |
| [🎓 Skill Learning Fast Track](04_workflows/skill-learning-fast-track.md) | 4 | Goal clarity → learning architecture → practice system → commitment |
| [✈️ Trip Planning](04_workflows/trip-planning.md) | 4 | Intent + profile → destination dive → itinerary → logistics |

### Business & Strategy

| Workflow | Stages | What It Does |
|----------|--------|--------------|
| [🏪 Small Business Acquisition](04_workflows/small-business-acquisition.md) | 5 | Quality assessment → financials → legal/risk → red team → offer strategy |
| [🧪 Product Validation](04_workflows/product-validation.md) | 5 | Hypothesis → market reality → customer/channel → red team → MVP |
| [📣 Content Marketing Strategy](04_workflows/content-marketing-strategy.md) | 5 | Audience + positioning → voice → channel → plan → launch |
| [📦 Social Growth Platform Package Model](04_workflows/social-growth-platform-package-model.md) | 5 | Audience/value definition → package architecture → pricing logic → launch process → optimization loop |
| [🧠 AI Marketing Operating System](04_workflows/ai-marketing-operating-system.md) | 8 | Strategy → research → content → creative → production → distribution → data loop |
| [🔭 Competitive Landscape](04_workflows/competitive-landscape.md) | 4 | Landscape framing → competitor assessment → positioning → strategy |

### Research

| Workflow | Stages | What It Does |
|----------|--------|--------------|
| [🔍 Research Deep Dive](04_workflows/research-deep-dive.md) | 4 | Scope → evidence landscape → synthesis → gaps + actionable output |

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

> Working with limited context or upload constraints? Use [`00_foundation/golden-rules.md`](00_foundation/golden-rules.md) plus one persona/task.

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

> For the full phase-by-phase build history, see [`roadmap.md`](roadmap.md).

---

### ✅ MVP 1 — Foundation
*Complete*

Established the reusable architecture: foundation layer, response standards, first-generation persona roster (28 personas), task library, workflow spec, and the job application as the first complete workflow.

**Delivered:**
- Architecture and directory structure
- 28 personas across all major domains
- Task library (documents, learning, lifestyle, productivity)
- Workflow layer + first workflow (job application)
- Getting-started guide and personal customization layer

---

### ✅ MVP 2 — Expansion Sprint
*Complete*

Dramatically expanded the persona library and built out the workflow catalog across the highest-value use cases.

**Delivered:**
- **+17 new personas** — specialist, commercial, advisory, orientation, and business domains
- **+10 new workflows** — covering career, real estate, health, business acquisition, product validation, marketing, research, travel, competitive analysis, and learning
- **+5 technical depth personas** — UX Principal, AI Engineer, Security Architect, Data Engineer, Writing Coach

**Library after MVP 2:**
- **50 personas** across 7 domains
- **13 workflows** covering life, career, business, and research decisions
- Full `roadmap.md` documenting all phases

---

### 🔵 MVP 3 — Next
*Not scoped*

| Candidate | Description |
|-----------|-------------|
| **Auto-routing layer** | Lightweight mechanism that maps an incoming situation to the right persona or workflow without manual selection — see `auto-routing-build-plan.md` |
| **Additional workflows** | Investment due diligence, negotiation prep, business exit planning, creative project launch, rental property evaluation |
| **Additional personas** | The Negotiator, The Fitness Coach, The Language Coach, The Parenting Strategist |
| **Team compositions** | Formalized cross-persona team templates for Due Diligence, Launch, Decision, and Research |
| **Paid guide** | How to build your own version — mental models, design decisions, persona writing, and team composition |

---

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE).

---

## Contributing

See [`06-internal-assets/docs/contribution-policy.md`](06-internal-assets/docs/contribution-policy.md) for contribution and review expectations.
