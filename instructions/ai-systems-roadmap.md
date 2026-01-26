# AI Systems for Platform Engineers

This document defines how to **add AI capability** to an existing platform engineering skillset without diluting core expertise.

This is not an AI career pivot.
This is an **AI systems expansion**.

---

## Phase 0: Mindset (Required)

AI is not magic.

Treat AI like:
- A flaky third-party API
- With unpredictable latency
- Variable cost
- Probabilistic output
- Legal and compliance implications

If you would not trust it in prod without guardrails, it is not ready.

---

## Phase 1: Foundations (Platform-Compatible)

### Goals
- Become fluent in using LLMs as **infrastructure dependencies**
- Understand cost, failure, and observability implications

### Core Skills
- Python for service integration
- Structured outputs (JSON schemas)
- Error handling and retries
- Timeouts and fallbacks
- Logging and tracing AI calls

Deliverable:
- Small service that calls an LLM and:
  - Enforces structured output
  - Handles malformed responses
  - Logs cost and latency

---

## Phase 2: Retrieval & Control

### RAG (Mandatory)

Learn:
- Embeddings
- Chunking strategies
- Vector databases
- Re-ranking
- Source attribution

You must be able to explain:
- Why RAG improves reliability
- Where it fails
- How hallucinations are detected or limited

Deliverable:
- RAG-backed system with:
  - Citations
  - Confidence scoring
  - Fallback to static content

---

## Phase 3: AI in Platform Workflows

### Human-in-the-Loop Systems

AI should:
- Assist decisions
- Never silently act on critical systems

Examples:
- Ticket classification with manual approval
- Incident summarization with source links
- Compliance evidence gathering with review steps

Deliverable:
- Workflow where AI output is gated, logged, and auditable

---

## Phase 4: Operability & Governance

### Required Concepts
- Prompt versioning
- Model upgrades
- Cost budgets and alerts
- Latency SLOs
- Kill switches
- Audit logs

Deliverable:
- AI feature with:
  - Rollback plan
  - Cost ceiling
  - Observable failure modes

---

## Phase 5: Portfolio Integration

AI work is showcased as:
- Part of a platform
- Part of an ops workflow
- Part of a reliability story

Never as:
- A standalone chatbot demo

---

## Final Principle

If you cannot explain:
- Why AI is used
- What happens when it fails
- How much it costs
- How it is disabled safely

Then it does not belong in production.

