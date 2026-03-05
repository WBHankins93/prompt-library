# 🔄 Workflows

---

## What Workflows Are

> 🔄 **A workflow** = persona + task + sequence = outcome-driven playbook

Where personas are judgment lenses and tasks are standalone prompts, workflows combine both into a **structured execution sequence**. They are designed to run as a single, continuous AI conversation — each stage builds on the previous one, with the AI carrying context forward naturally through the thread.

A workflow defines:
- 👤 Which personas to activate at each stage (and why)
- 📋 Which tasks to run (with adaptation notes for the workflow context)
- 📤 What the expected output is at each stage
- 📍 Checkpoint blocks so you can pause and resume without losing progress

---

## Why This Layer Exists

Personas and tasks work well independently. But some goals require multi-stage, coordinated effort where **the sequence matters as much as the components.**

Examples:
- A job search isn't one prompt. It's narrative framing → resume targeting → cover letter drafting → interview prep — each stage building on the last.
- A product launch isn't a single decision. It's positioning → pricing → messaging → launch sequencing.

Without a workflows layer, users have to wire these stages together manually on every use. Workflows make the sequence a first-class artifact.

> ⚙️ Workflows are also the human-triggered precursor to agents. Once a workflow is validated, it can be converted to an autonomous agent by adding tool access and an evaluation loop.

---

## How Workflows Run

**💬 Single-thread design.** Workflows run as one continuous AI conversation. Start at Stage 1 and proceed through each stage in sequence. The AI retains everything said — you don't copy-paste outputs between stages.

**📍 Checkpoint blocks.** Long workflows (like job applications) may span multiple sessions. Each stage ends with an optional checkpoint block — a brief structured summary the AI writes so you can resume later without losing context.

**🔗 Task integration.** When a workflow includes a task, it uses the hybrid approach: it references the task file and adds a short adaptation note for the workflow context. The task remains the single source of truth for the full prompt.

**👤 Persona activation.** Each stage names the active persona(s). You don't need to reload the full persona file mid-conversation — the workflow prompt activates the right frame at the right moment.

---

## Workflow File Format

Each workflow file defines:

```
---
workflow: [Name]
status: active
stages: [N]
estimated_time: [X hours / can split across sessions]
tasks_used:
  - [task file paths]
personas:
  lead: [primary persona]
  support: [supporting personas]
  review: [review personas]
---
```

Each stage follows this structure:

| Element | What Goes Here |
|---------|----------------|
| **Stage header** | `### Stage N: [Stage Name]` |
| **Persona label** | Who is active and why |
| **Time estimate** | Realistic time for this stage |
| **Description** | What this stage accomplishes |
| **Task reference** | *(optional)* Which task is used, with adaptation note |
| **Prompt block** | The exact text to copy and run |
| **Output summary** | What you'll have when this stage is done |
| **Checkpoint** | What to ask the AI to summarize before pausing |

---

## What Does NOT Live Here

| Belongs In | Where |
|------------|-------|
| Personas | [`02_personas/`](../02_personas/) |
| Tasks | [`03_tasks/`](../03_tasks/) |
| Personal team compositions | [`05_personal/teams/`](../05_personal/teams/) |

Workflows reference and orchestrate those components — they do not redefine them.

---

## Available Workflows

**New to workflows?** Start with the [Getting Started guide](getting-started.md) — covers what AI tool to open, how to read prompt blocks, and how to run a workflow from scratch.

| Workflow | Stages | Time | Personas | Status |
|----------|--------|------|----------|--------|
| [📝 Job Application](job-application.md) | 5 | 2–3 hrs | Inner Voice, Business Leader, Red Team | ✅ Active |

---

## Roadmap

Next workflows to be built (in priority order):

| Workflow | Stages | Status |
|----------|--------|--------|
| Content Creation | voice alignment → structure → draft → refinement | 🔜 |
| Business Strategy Review | situation assessment → offer design → risk check | 🔜 |
| Career Decision | evaluate offer / pivot / promotion | 🔜 |
