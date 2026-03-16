# Resume Builder — Product Roadmap

> **Status**: Pre-build — persona foundation complete, architecture defined, awaiting build kickoff
> **Last Updated**: 2026-03-16

---

## Vision

A persona-powered resume builder that combines AI coaching intelligence with a modern drag-and-drop editor and multi-model support — giving anyone from a nurse to a software engineer to a federal applicant a tailored, ATS-optimized, hiring-manager-ready resume.

The differentiator: **the model knows the industry before you type a word**. Each resume session is anchored by an industry-specific coach persona that understands what hiring managers in that field actually look for — not generic resume advice, but field-native expertise.

---

## Core Capabilities (MVP)

### 1. Industry + Persona Selection
User picks their industry → the system loads the matching coach persona, which informs all AI output throughout the session.

| Industry | Coach Persona |
|---|---|
| Technology / Software Engineering | `tech-resume-coach` |
| Healthcare / Nursing / Medical | `healthcare-resume-coach` |
| Finance / Banking / Accounting | `finance-resume-coach` |
| Legal / Law | `legal-resume-coach` |
| Creative / Design / UX | `creative-resume-coach` |
| Government / Federal | `federal-resume-coach` |
| Engineering (Civil/Mech/Elec) | `engineering-resume-coach` |
| Skilled Trades / Vocational | `trades-resume-coach` |
| Nonprofit / Social Services | `nonprofit-resume-coach` |
| Academia / Higher Education | `academic-cv-coach` |
| Supply Chain / Operations | `ops-resume-coach` |
| Human Resources | `hr-resume-coach` |
| Sales / Business Development | `sales-resume-coach` |
| Marketing / Advertising | `marketing-resume-coach` |
| Executive / C-Suite | `executive-resume-coach` |
| General (any industry) | `resume-architect` |

---

### 2. Resume Canvas — Drag & Drop Editor

A modular, section-based editor where each section is a card that can be:
- **Dragged** to reorder
- **Toggled** visible/hidden without deleting
- **Expanded** to edit content inline
- **AI-enhanced** — each section has a "polish with AI" action that uses the active persona

**Standard Sections (all draggable)**

| Section | Notes |
|---|---|
| Contact / Header | Name, phone, email, LinkedIn, location |
| Professional Summary | 2-3 line value proposition, AI-generated from persona context |
| Work Experience | Multiple entries, bullet editor with AI rewrite per bullet |
| Education | Multiple entries |
| Skills | Tag-based, ATS-keyword aware, persona-suggested |
| Certifications & Licenses | Credential-forward (critical for healthcare, trades, engineering) |
| Projects | For tech, creative, academic |
| Publications | For academic and research roles |
| Volunteer / Community | Optional |
| Awards & Recognition | Optional |
| Languages | Optional |

**Industry-specific sections** (auto-added when persona is selected):
- Healthcare → Credentials block floated to top
- Federal → OPM hours/week fields added to each experience entry
- Academic → Publications, Presentations, Grants sections added
- Legal → Bar Admissions section added
- Trades → Certifications block floated to top

---

### 3. Model Selection

User selects their AI model for the session. The coach persona prompt wraps every model interaction — the model changes, the intelligence layer stays constant.

**Free Tier**

| Model | Provider | Notes |
|---|---|---|
| Ollama (local) | Self-hosted | Requires Ollama installed locally; model options: Llama 3, Mistral, etc. |
| Gemini 2.0 Flash | Google | Fast, free tier available via API key |
| Gemini 2.5 Pro | Google | Higher quality, free tier with rate limits |

**Paid Tier**

| Model | Provider | Notes |
|---|---|---|
| Claude Haiku 4.5 | Anthropic | Fast, cost-efficient |
| Claude Sonnet 4.6 | Anthropic | Recommended default — best quality/cost balance |
| Claude Opus 4.6 | Anthropic | Maximum quality; use for executive/high-stakes resumes |
| GPT-4o | OpenAI | Alternative provider option |
| GPT-4o Mini | OpenAI | Budget OpenAI option |

**Model selection UX**:
- Default: Gemini 2.0 Flash (free, no setup required)
- Upgrade prompt shown when using free tier with complex rewrite tasks
- API key storage: local only (no server-side key storage for MVP)

---

### 4. AI Review Engine

After the resume is built, the user runs a review. The review engine evaluates against a structured rubric and returns a scored breakdown with specific, actionable suggestions.

**Review Criteria**

| Category | Weight | What It Evaluates |
|---|---|---|
| **ATS Compatibility** | 20% | Format, section headers, file type, keyword density vs. uploaded JD |
| **Impact & Quantification** | 25% | % of bullets with measurable outcomes; passive vs. active language |
| **Keyword Match** | 20% | Alignment with target job description (JD upload optional) |
| **Credential Visibility** | 15% | Licenses, certifications, and key credentials visible and correctly placed |
| **Clarity & Scannability** | 10% | 10-second scan test — value prop visible, no visual clutter |
| **Industry Fit** | 10% | Persona-specific conventions followed (e.g., deal table for finance, project list for engineering) |

**Output format**:
- Overall score (0–100)
- Per-category score with 1-3 sentence explanation
- Top 5 priority improvements (ranked by impact)
- Quick wins (single-line changes that immediately improve score)
- Specific bullet rewrites for the 3 weakest bullets

**JD Matching** (optional): User uploads or pastes a job description → keyword gap analysis runs → missing high-priority keywords surfaced with suggested placement.

---

## Technical Architecture

### Frontend
- **Framework**: React (Vite)
- **Drag & Drop**: `@dnd-kit/core` + `@dnd-kit/sortable`
- **State**: Zustand
- **Styling**: Tailwind CSS
- **Resume Preview**: React-PDF or custom CSS-based renderer
- **Export**: PDF (html2pdf or react-pdf), DOCX (docx.js)

### AI Layer
- **Model abstraction**: Single `generateText(prompt, model, apiKey)` function that routes to the selected provider
- **Persona injection**: System prompt built from the selected coach persona file at session start
- **Actions**: Rewrite bullet, generate summary, suggest keywords, run full review
- **Streaming**: Supported for bullet rewrites and review generation

### Model Integration

```
Ollama → http://localhost:11434/api/generate
Gemini → https://generativelanguage.googleapis.com/v1beta/models/...
Anthropic → https://api.anthropic.com/v1/messages
OpenAI → https://api.openai.com/v1/chat/completions
```

### Storage
- MVP: localStorage only (no backend, no auth)
- V2: Optional cloud sync with account

### Persona Files
- Source: `02_personas/coaches/*.md` in this repo
- Loaded as system prompts at session init
- Can be swapped mid-session (changes model context for subsequent requests)

---

## Build Phases

### Phase 0 — Foundation (Complete)
- [x] `coaches/` directory created
- [x] All existing coach personas moved and consolidated
- [x] 16 resume coach personas written
- [x] Resume Architect meta-persona created
- [x] Industry-to-persona mapping defined
- [x] Roadmap documented

### Phase 1 — Core Editor (Next)
- [ ] Project scaffold (React + Vite + Tailwind)
- [ ] Section card components (draggable, editable)
- [ ] Drag & drop canvas with section reordering
- [ ] Industry and persona selector UI
- [ ] Model selector with API key input
- [ ] Resume preview panel (live, CSS-based)
- [ ] PDF export

### Phase 2 — AI Integration
- [ ] Model abstraction layer (Ollama, Gemini, Anthropic, OpenAI)
- [ ] Persona system prompt injection
- [ ] Per-bullet AI rewrite action
- [ ] Professional summary generation from experience
- [ ] Keyword suggestion from skills section + persona knowledge
- [ ] Streaming support for long-form generation

### Phase 3 — Review Engine
- [ ] 6-category scoring rubric implementation
- [ ] JD upload and paste → keyword gap analysis
- [ ] Score display with per-category breakdown
- [ ] Priority improvement list generation
- [ ] Bullet rewrite suggestions for lowest-scoring bullets

### Phase 4 — Industry-Specific Features
- [ ] Federal resume mode (OPM fields, KSA section, hours/week)
- [ ] Academic CV mode (publications, presentations, grants sections)
- [ ] Credential block auto-placement for healthcare and trades
- [ ] Deal / transaction table section for finance and legal
- [ ] Project list section for engineering and tech

### Phase 5 — Polish and Productization
- [ ] Multiple resume templates (layout options)
- [ ] DOCX export
- [ ] Resume versioning (save multiple versions)
- [ ] Optional cloud sync with account
- [ ] Mobile-responsive layout

---

## Persona Usage Model

The coach persona is not just a system prompt decoration. It is the intelligence layer that makes the tool differentiated.

**How personas are used at each touchpoint**:

1. **Industry selection** → Persona loaded as system context. Intro message generated: "You're working with the [Persona Name]. Here's what I'll be looking for in your [industry] resume..."

2. **Section-by-section editing** → AI suggestions are informed by persona knowledge. A healthcare persona will prompt for unit type and certifications; a tech persona will push for scale metrics; a federal persona will flag missing OPM fields.

3. **Bullet rewrites** → Persona applies its specific impact formula. Tech bullets get scale + latency + throughput. Finance bullets get deal size + transaction type + role. Sales bullets get quota % + ACV + segment.

4. **Review** → The persona's known criteria (what hiring managers in this field actually look for) inform the rubric weights and the specific suggestions generated.

5. **Priority improvements** → Ranked by what matters most in this industry. For healthcare, missing credentials outweigh weak bullets. For tech, missing scale metrics outweigh format issues.

---

## Design Direction

**Aesthetic**: Editorial / print-inspired. Dark background. Warm neutral accents. Feels like a premium career tool, not a template factory.

**Color palette**:
- Background: `#0d0f14` (near-black navy)
- Surface: `#161921`
- Accent: `#c5a55a` (warm gold — career advancement, premium)
- Secondary: `#4ecdc4` (teal — review scores and AI actions)
- Text: `#e8e6df` (warm off-white)

**Typography**:
- Display: Cormorant Garamond (editorial, elegant)
- UI: Outfit (clean, modern)
- Data / scores: JetBrains Mono

**Memorable element**: Resume sections float as physical paper cards with depth shadows on a dark desk surface. The review panel uses circular gauge visualizations for scores.

---

## Key Decisions Pending

1. **Hosting model**: Pure client-side (GitHub Pages / Netlify) vs. minimal backend for session persistence
2. **Ollama integration path**: In-browser via proxy or require local CORS setup
3. **Persona update mechanism**: How do persona files get updated in the app when source .md files change
4. **Template library**: How many resume layout templates at launch (recommend: 3)
5. **JD parsing**: Simple text extraction vs. structured parsing for keyword analysis

---

## Related Files

| Resource | Location |
|---|---|
| Resume Architect (meta persona) | `02_personas/coaches/resume-architect.md` |
| All industry coach personas | `02_personas/coaches/` |
| Career Strategist (pre-resume strategy) | `02_personas/specialist/the-career-strategist.md` |
| Executive Coach (leadership context) | `02_personas/coaches/the-executive-coach.md` |
| Writing Coach (prose quality layer) | `02_personas/coaches/the-writing-coach.md` |
