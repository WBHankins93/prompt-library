# The Anatomy of a Prompt

**A reusable skeleton for writing a high-quality task prompt.**

Most prompts fail because they hand the model a task with no context, no reference for
what "good" looks like, and no chance to align before executing. This skeleton fixes
that. Use it when you want a serious output — a contract, a proposal, a strategy, a
build — not a throwaway question.

It pairs with the rest of the library: load the [foundation](foundation.md) and a
[persona](../02_personas/) first, then structure your actual request like this.

> Extracted and adapted from the "Anatomy of a Claude prompt" reference. The
> **Success Brief** block below also defines the `Output Contract` pattern personas use.

---

## The skeleton

```
I want to [TASK] so that [SUCCESS CRITERIA].

First, read these files completely before responding:
[filename.md] — [what it contains]
[filename.md] — [what it contains]

Here is a reference for what I want to achieve:
[Paste a reference, or a reverse-engineered blueprint of one.
 Write each pattern as a rule starting with "Always" or "Never."]

SUCCESS BRIEF
- Output type + length:   [contract, memo, report, proposal, landing page, post?]
- Recipient's reaction:   [what should they think / feel / do after reading?]
- Does NOT sound like:    [generic AI, too casual, too formal, jargon-heavy?]
- Success means:          [they sign? approve? reply? take action?]

RULES
My context/standards are in the files above. Read them fully before starting.
If you are about to break one of my rules, stop and tell me.

CONVERSATION
Do NOT start executing yet. First ask me clarifying questions
(use the AskUserQuestion tool) so we refine the approach together.

PLAN
Before writing anything, list the 3 rules from my context that matter most here.
Then give me your execution plan (5 steps maximum).
Only begin work once we've aligned.
```

---

## Why each block earns its place

| Block | What it does |
|-------|--------------|
| **Task + Success Criteria** | Anchors the work to an outcome, not an activity. |
| **Context Files** | Loads *just the right* working memory before the model acts (see [context-engineering-principles](../06-internal-assets/docs/context-engineering-principles.md)). |
| **Reference** | A concrete target beats an abstract instruction. "Always / Never" rules are unambiguous. |
| **Success Brief** | Defines the bar, the audience reaction, and the failure mode — the difference between "fine" and "right." |
| **Rules** | Makes the model surface conflicts *before* producing work, not after. |
| **Conversation** | Forces alignment first. The cheapest place to fix a misunderstanding is before any output exists. |
| **Plan** | Surfaces the model's intended approach in ≤5 steps so you can correct course early. |

---

## When to use the full skeleton vs. a slice

- **High-stakes, multi-constraint output** → use the whole thing.
- **Quick task** → Task + Success Brief is often enough.
- **Inside a workflow** → the stages already supply Task, Context, and Plan; you mostly
  add the Success Brief per stage.

The governing rule is the same one that governs the whole library: **include what
changes the output, cut what doesn't.**
