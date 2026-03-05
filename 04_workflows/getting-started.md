---
guide: Getting Started with Workflows
audience: new users
applies_to: all workflows
---

# Getting Started with Workflows

**New to AI tools? Start here before running any workflow.**

This guide walks you through everything you need to run a workflow — from opening an AI tool for the first time to completing every stage without losing your place.

---

## What You Need

- **An AI tool** — Any of these work:
  - [Claude](https://claude.ai) — handles long conversations well; good default for multi-stage workflows
  - [ChatGPT](https://chat.openai.com) — works well, widely used
  - [Gemini](https://gemini.google.com) — Google's option, same idea
  - Any AI tool that accepts a text prompt will work. The system is model-agnostic.
- **A new conversation** — Start fresh, not in the middle of an existing thread.
- **The content the workflow asks for** — For example, the job application workflow asks for the full job description and your resume. Have these ready before you begin.

---

## How to Read This Guide (and the Workflow Files)

### The bracket convention

Throughout the workflow files, you'll see sections that look like this:

```
[Paste the full job description]
[Brief summary of your background]
[Be honest — what draws you to this role?]
```

**`[text in brackets]`** = placeholder. Replace the entire bracketed section — including the brackets — with your real content.

**Right:**
```
I'm applying for a Senior Product Manager role at Acme Corp. They want...
```

**Wrong:**
```
[I'm applying for a Senior Product Manager role at Acme Corp.]
```

The brackets come out. Your content goes in.

### Prompt blocks

The workflow stages contain prompt blocks — text inside a grey box that starts and ends with triple backticks (` ``` `). That's the text you copy and paste into the AI.

---

## Quick Start (Zero Setup)

**No loading required. Paste and go.**

This gets you 80% of the value immediately, with no configuration.

**Step 1:** Open your AI tool and start a new conversation.

**Step 2:** Find Stage 1 in the workflow file you want to run. (In the job application workflow, that's "Stage 1: Narrative Framing.")

**Step 3:** Copy everything inside the Stage 1 prompt block — from the first line after the opening ` ``` ` to the last line before the closing ` ``` `.

**Step 4:** Paste it into the AI chat box.

**Step 5:** Replace every `[bracketed section]` with your actual information. Remove the brackets. Fill in the details. The more honest and specific you are, the better the output.

**Step 6:** Send the message.

**Step 7:** Read the response. That's Stage 1 output.

**Step 8:** Find Stage 2. Copy its prompt block, paste it, replace any remaining brackets, and send. You do not need to re-explain your background — the AI already has it from Stage 1. Each stage carries context forward automatically.

**Step 9:** Continue through each stage in order until you reach the end.

That's it.

---

## Checkpoints (Pausing Between Sessions)

Workflows are designed to run in one continuous conversation. But if you need to stop and come back later:

**Before you close the session**, type this into the AI:

> "Write a checkpoint summary of everything we've established so far — my background, the key decisions, and where we are in the workflow."

Copy that summary and save it somewhere (a note, a doc, anywhere).

**When you resume**, start a new conversation and paste the checkpoint summary as your first message before continuing to the next stage. The AI will have full context to carry forward.

Each stage in the workflow also includes a specific checkpoint prompt in case you want something more targeted.

---

## Full Experience (Optional — More Depth)

**Load the full layer stack before running the workflow.**

This adds the foundation and persona context upfront, giving the AI a stronger operating framework before any stage runs. The difference is noticeable on complex outputs like cover letters or strategic reviews.

**Step 1:** Open a new conversation.

**Step 2:** Open `00_foundation/foundation.md`. Copy the entire file content and paste it as your first message. Send it.

**Step 3:** Open `01_response-standards/response-standards.md`. Copy the entire file content and paste it as your next message. Send it.

**Step 4:** Look at the workflow file's frontmatter (the section at the top between `---` lines). Find the `personas:` section. It lists the lead persona and any support personas.

**Step 5:** Open each persona file listed and copy-paste it as a message. Send each one separately.

**Step 6:** Now run the workflow stages as normal, starting with Stage 1.

The AI will have the full reasoning framework active from the start — not just for the stage you're on.

---

## Which AI Tool Should I Use?

**Claude** — Best default for multi-stage workflows. Handles long conversations and large context well, which matters when your workflow accumulates background, resume text, and multiple outputs over several stages.

**ChatGPT** — Works well. Widely used. If you already have an account, use it.

**Gemini** — Works fine. Google's offering. Same idea as above.

The system was built to be model-agnostic. If you have access to multiple tools, try Claude first for workflows. For standalone tasks (single-stage prompts), any of these work equally well.

---

## Quick Reference

| Question | Answer |
|----------|--------|
| Do I need to set anything up? | No. Quick Start requires nothing. |
| Do I re-explain my background each stage? | No. AI carries it forward in the same conversation. |
| What if I need to stop mid-workflow? | Use the checkpoint block at the end of any stage. |
| Can I use ChatGPT instead of Claude? | Yes. The system works with any AI tool. |
| What do I do with `[text in brackets]`? | Replace it with your content. Remove the brackets. |
| Do I need to load the foundation files? | No. Full Experience is optional — Quick Start gives you 80% of the value immediately. |
