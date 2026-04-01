# Roadmap

## MVP 1 — Foundation

> **Goal:** Establish a reusable, composable persona library with a solid foundation layer and initial content across all major domains.

---

### Phase 1 · Foundation Architecture

Built the structural backbone that all personas and workflows inherit.

| Deliverable | Description |
|-------------|-------------|
| `00_foundation/foundation.md` | Core identity, research standards, and reasoning rules that apply to every persona |
| `01_response-standards/` | Output clarity and rigor standards — what good looks like regardless of domain |
| Directory structure | `00_foundation/ → 01_response-standards/ → 02_personas/ → 03_tasks/ → 04_workflows/ → 05_personal/` |

---

### Phase 2 · Initial Persona Roster

Built and locked the first generation of personas across all major domains.

**Technical** (5 personas)
- Tech Wizard / Hacker Prodigy
- Platform Engineer Mentor
- Staff Engineer / Founding CTO Mentor
- Solution Architect Mentor
- Systems Architect

**Business** (5 personas)
- Go-Getter Business Leader
- SaaS Founder
- Boring Gold Miner
- Builder-Refiner
- Operations & Systems Optimizer

**Commercial** (3 personas)
- Revenue Multiplier
- Marketing Mastermind
- Alex Hormozi

**Creative** (4 personas)
- Design Guru
- Creative Director / Storyteller
- Inner Voice
- Playful Disruptor

**Advisory** (6 personas)
- Red Team / Skeptical Reviewer
- Finance Dragon
- Legal Advisor
- Product Thinker / User Advocate
- Decision Anchor
- Pattern Seer

**Orientation** (3 personas)
- Wayfinder
- Explorer-Scholar
- Nurturing Steward

**Specialist** (2 personas)
- Oregon Specialist
- Travel Insider (Ex-Flight Attendant)

*Total: 28 personas locked*

---

### Phase 3 · Directory Reorganization

Refactored the repository structure for clarity and composability.

| Change | Details |
|--------|---------|
| Domain subdirectories | Personas moved into `advisory/`, `business/`, `commercial/`, `creative/`, `orientation/`, `specialist/`, `technical/` |
| Numbering swap | Tasks (`03_`) load before workflows (`04_`) — tasks are workflow dependencies |
| Persona expansion | Tier 1/2/3 pass — lightweight personas expanded to full format |

---

### Phase 4 · Workflow Foundation

Added the workflows layer and first operational content.

| Deliverable | Description |
|-------------|-------------|
| `04_workflows/` | Directory established with workflow spec and format |
| `job-application.md` | First full workflow — 5 stages, narrative-to-offer-negotiation |
| `getting-started.md` | Onboarding guide for new users — explains how to read and run workflows |
| `auto-routing-build-plan.md` | Spec for future auto-routing capability |

---

### Phase 5 · README Overhaul + Business Plan Architect

Final polish pass on MVP1.

| Deliverable | Description |
|-------------|-------------|
| `README.md` (root) | Full rewrite — why-this-exists, structure overview, usage model |
| `02_personas/README.md` | Canonical roster with domain sections and design philosophy |
| `04_workflows/README.md` | Workflow spec, format documentation, available workflows table |
| `business-plan-architect.md` | New persona — structured business plan builder, financial modeler |
| `05_personal/` | Personal layer documentation — customization guide |

*Library at end of MVP1: 29 personas · 1 complete workflow*

---

---

## MVP 2 — Expansion Sprint

> **Goal:** Dramatically expand the persona library and workflow catalog — adding specialist personas across professional, technical, and life domains, plus a full suite of multi-stage workflows for high-value decisions.

---

### Phase 1 · Specialist Persona Expansion (Batch 1A)

*Focus: Knowledge work, research, and learning*

| Persona | Domain | File |
|---------|--------|------|
| The Maker | specialist | `02_personas/specialist/the-maker.md` |
| The Naturalist | specialist | `02_personas/specialist/the-naturalist.md` |
| The Academic Coach | specialist | `02_personas/specialist/the-academic-coach.md` |
| The Researcher | specialist | `02_personas/specialist/the-researcher.md` |
| The Curious Scientist | specialist | `02_personas/specialist/the-curious-scientist.md` |

---

### Phase 2 · Professional Persona Expansion (Batch 1B)

*Focus: Career, real estate, and health optimization*

| Persona | Domain | File |
|---------|--------|------|
| The Career Strategist | specialist | `02_personas/specialist/the-career-strategist.md` |
| The Property Analyst | specialist | `02_personas/specialist/the-property-analyst.md` |
| The Health Optimizer | specialist | `02_personas/specialist/the-health-optimizer.md` |

---

### Phase 3 · Commercial + Orientation + Business Persona Expansion (Batch 1C)

*Focus: Hiring, civic engagement, cooking, sales, onboarding, opportunity, and wealth*

| Persona | Domain | File |
|---------|--------|------|
| The Talent Buyer | specialist | `02_personas/specialist/the-talent-buyer.md` |
| The Civic Compass | specialist | `02_personas/specialist/the-civic-compass.md` |
| The Home Chef | specialist | `02_personas/specialist/the-home-chef.md` |
| The Closer | commercial | `02_personas/commercial/the-closer.md` |
| The Ignition Coach | orientation | `02_personas/orientation/the-ignition-coach.md` |
| The Arbitrage Hunter | business | `02_personas/business/the-arbitrage-hunter.md` |
| The Self-Made Investor | advisory | `02_personas/advisory/the-self-made-investor.md` |

---

### Phase 4 · Life & Career Workflows (Batch 2A)

*Focus: High-stakes personal and professional decisions*

| Workflow | Stages | Lead Persona | File |
|----------|--------|--------------|------|
| Small Business Acquisition | 5 | Boring Gold Miner | `small-business-acquisition.md` |
| Product Validation | 5 | SaaS Founder | `product-validation.md` |
| Career Move Decision | 4 | Career Strategist | `career-move-decision.md` |
| Home Purchase Due Diligence | 4 | Property Analyst | `home-purchase-due-diligence.md` |
| Personal Health System | 4 | Health Optimizer | `personal-health-system.md` |

---

### Phase 5 · Business + Research Workflows (Batch 2B)

*Focus: Business strategy, research rigor, and lifestyle systems*

| Workflow | Stages | Lead Persona | File |
|----------|--------|--------------|------|
| Content Marketing Strategy | 5 | Marketing Mastermind | `content-marketing-strategy.md` |
| Research Deep Dive | 4 | The Researcher | `research-deep-dive.md` |
| Trip Planning | 4 | Travel Insider | `trip-planning.md` |
| Competitive Landscape Analysis | 4 | Pattern Seer | `competitive-landscape.md` |
| Skill Learning Fast Track | 4 | Academic Coach | `skill-learning-fast-track.md` |

---

### Phase 6 · Technical Depth Expansion

*Focus: Design, AI/ML, security, and written communication — high-leverage additions to the technical and specialist tiers*

| Persona | Domain | File |
|---------|--------|------|
| The UX Principal | technical | `02_personas/technical/the-ux-principal.md` |
| The AI Engineer | technical | `02_personas/technical/the-ai-engineer.md` |
| The Security Architect | technical | `02_personas/technical/the-security-architect.md` |
| The Writing Coach | specialist | `02_personas/specialist/the-writing-coach.md` |
| The Executive Coach | advisory | `02_personas/advisory/the-executive-coach.md` |

---

### Phase 7 · Documentation Update

Final documentation pass reflecting the full MVP2 build.

| Deliverable | Description |
|-------------|-------------|
| `02_personas/README.md` | Updated canonical roster with all personas, ✨ markers for MVP2 additions |
| `04_workflows/README.md` | Updated available workflows table, organized by category |
| `README.md` (root) | Updated roadmap section, workflow catalog, persona count |
| `roadmap.md` | This document — full phase history for MVP1 and MVP2 |

*Library at end of MVP2: 50 personas · 12 workflows*

---

---

## Post-MVP2 Additions

### Workflow Additions

| Workflow | Stages | Lead Persona | File |
|----------|--------|--------------|------|
| AI Marketing Operating System | 8 | Marketing Mastermind + Systems Architect | `04_workflows/ai-marketing-operating-system.md` |

*Library current state: 50 personas · 13 workflows*

---

## MVP 3 — Candidates (Not Scoped)

The following represent potential next phases. Not committed, not sequenced.

---

### Auto-Routing Layer

Build the routing layer described in `auto-routing-build-plan.md` — a lightweight mechanism that maps an incoming situation to the right persona or workflow without manual selection.

| Candidate | Description |
|-----------|-------------|
| Situation triage prompt | Single intake prompt that outputs a persona/workflow recommendation |
| Keyword → persona map | Structured mapping of trigger words to activation signals |
| Router persona | A meta-persona that reads intent and routes to the right specialist |

---

### Additional Workflows

| Candidate Workflow | Lead Personas | Rationale |
|--------------------|---------------|-----------|
| Investment Due Diligence | Self-Made Investor + Finance Dragon + Red Team | High-stakes financial decisions |
| Negotiation Prep | Closer + Decision Anchor | Salary, contract, deal, or vendor negotiation |
| Business Exit Planning | Finance Dragon + Legal Advisor + Pattern Seer | Sale, wind-down, or transition planning |
| Creative Project Launch | Storyteller + Marketing Mastermind + Red Team | Products, books, courses, content brands |
| Rental Property Evaluation | Property Analyst + Finance Dragon | Buy-and-hold real estate analysis |
| Technical Architecture Review | AI Engineer + Security Architect + Red Team | System design and risk assessment |
| Writing and Publishing | Writing Coach + Storyteller + Marketing Mastermind | Long-form content from draft to distribution |

---

### Additional Personas

| Candidate Persona | Domain | Rationale |
|-------------------|--------|-----------|
| The Negotiator | commercial | Salary, contracts, deals, conflict — the full negotiation stack, distinct from The Closer (B2B sales) |
| The Fitness Coach | specialist | Strength, conditioning, periodization — the execution layer to Health Optimizer's strategy |
| The Language Coach | specialist | Language acquisition and fluency acceleration |
| The Parenting Strategist | specialist | Child development, parenting systems, family dynamics |

---

### Team Compositions

Formalize the cross-persona teams that are implicitly composed in the workflows into reusable team templates:

| Team | Personas |
|------|----------|
| **Due Diligence Team** | Property Analyst + Finance Dragon + Legal Advisor + Red Team |
| **Launch Team** | Marketing Mastermind + Storyteller + SaaS Founder + Red Team |
| **Decision Team** | Decision Anchor + Pattern Seer + Red Team + Finance Dragon |
| **Research Team** | The Researcher + Curious Scientist + Explorer-Scholar |
| **Technical Review Team** | AI Engineer + Security Architect + Platform Engineer Mentor + Red Team |
| **Communication Team** | Writing Coach + Storyteller + Inner Voice |

---

### Publishing and Distribution

| Candidate | Description |
|-----------|-------------|
| Paid guide | How to build your own version — mental models, design decisions, persona writing, and team composition |
| Claude Skills integration | Platform-native execution modules for first-class tool use |
| Public persona submission process | Community-contributed personas following the canonical format |
