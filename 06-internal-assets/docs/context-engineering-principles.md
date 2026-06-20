# Context Engineering Principles

**Why this library favors dense, high-signal prompts over long ones.**

The personas, tasks, and workflows in this repository are written against a single
operating belief: **the context window is scarce working memory, not free storage.**
Every token a persona spends is a token unavailable to the user's actual problem —
and irrelevant context doesn't just waste space, it measurably degrades output.

This doctrine is drawn from Andrej Karpathy's framing of *context engineering*.

---

## The core idea

> "Context engineering is the delicate art and science of filling the context window
> with just the right information for the next step." — Andrej Karpathy

Karpathy's mental model: an LLM is like a CPU, and its context window is the RAM —
the working memory it can see at once. Doing this well means packing in *just* the
clear instructions, examples, and facts the model needs for the next step:

- **Too little** (or the wrong) context → the model lacks what it needs to perform.
- **Too much** irrelevant context → wasted tokens *and degraded performance.*

The sweet spot is non-trivial to find. A 3,000-word persona that opens with a
biography is optimizing for the wrong thing: it reads well to a human, but it spends
the model's working memory on flavor instead of judgment.

---

## What this means for how we write personas

| Principle | In practice |
|-----------|-------------|
| **Density over verbosity** | Every line must change the model's behavior. If cutting it doesn't change the output, cut it. |
| **Inherit, don't repeat (DRY)** | The foundation, golden rules, and response standards load once. Personas must not restate them. |
| **Examples are high-value context** | One concrete worked example (few-shot) earns its tokens. A paragraph of backstory does not. |
| **Encode the edge, not the résumé** | A persona's value is its *bias and judgment*, not a fictional career history. Lead with the bias. |
| **Compose cheaply** | Personas are loaded several at a time. A lean persona is a good teammate; a bloated one crowds out the others. |

---

## The test

Before shipping any persona, task, or workflow, ask of each section:

> **"If I delete this, does the model's output get worse?"**

If the answer is no, it is flavor, not function. Cut it.

---

## Sources

- Andrej Karpathy — ["+1 for 'context engineering' over 'prompt engineering'…"](https://x.com/karpathy/status/1937902205765607626)
- [Context Engineering Guide — Prompting Guide](https://www.promptingguide.ai/guides/context-engineering-guide)
- [Context Engineering for Agents — LangChain](https://www.langchain.com/blog/context-engineering-for-agents)
