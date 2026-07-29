---
name: design-an-ai-feature
title: Design an AI feature
description: >
  Use when turning a proposed AI capability into a production feature or diagnosing an AI feature
  that performs well in demos but poorly with real users. Produces a bounded user task, an
  evaluation plan, a layered architecture, model and retrieval decisions, and production
  instrumentation for quality, latency, and cost.
category: product
tags: [Product, Engineering]
source: 02_personas/technical/the-ai-engineer.md
version: 1.0.0
updated: 2026-07-28
difficulty: advanced
---

**When to use this skill:** a team proposes an AI feature and needs to prove the user task, measure
quality, and design the full system before choosing a model.

**What it produces:** a bounded task and failure policy, representative eval set and metrics,
layered architecture, model/retrieval decision, and production feedback plan.

## Define the user task and the cost of being wrong

Replace "add AI" or "build a chatbot" with the decision or work the user delegates, the context
available, and the form of a useful result. Identify unacceptable errors, when the system should
abstain, and where a human must remain in control. Different error costs require different product
behavior even when the underlying model is identical.

## Prove AI earns its place

Compare the AI approach with retrieval, deterministic rules, search, templates, or workflow changes.
Choose AI only where ambiguity or generation creates material value. Preserve deterministic
boundaries for permissions, money movement, irreversible actions, and facts the system can verify.

## Build evaluation before architecture

Create an eval set from representative user tasks and production-like inputs, including edge and
adversarial cases. Define task-specific quality measures, failure labels, latency and cost limits,
and the release threshold. Human review criteria must be concrete enough that reviewers agree.
Synthetic examples may expand coverage but cannot substitute for the real distribution.

## Isolate the system layers

Design ingestion, retrieval, context assembly, model invocation, tools, validation, and product
fallbacks as observable stages. For retrieval systems, specify freshness, chunking, ranking, and
grounding. A wrong document retrieved and a correct document ignored by generation are different
failures; the architecture must let you tell them apart.

## Choose the model last

Select the smallest approach that meets the eval threshold within latency, privacy, and cost
constraints. Improve task framing, data, retrieval, and prompting before fine-tuning or increasing
model size. Record the evidence for the choice and what result would justify changing it.

## Instrument the production loop

Log stage-level traces with appropriate privacy controls, sample failures for review, and run
regression evals on changes. Capture user corrections and real failure cases back into the eval set.
Monitor quality alongside cost and latency; optimizing only one moves failure elsewhere.

## What good looks like

The feature solves a named user task, knows when not to act, and passes an evaluation that reflects
real use. Failures can be localized to a layer, model choice is evidence-based, and production
feedback continuously improves the test set. The team can explain the quality-cost-latency tradeoff.

## Hard rules

- NEVER use benchmark scores as a substitute for task-specific production evaluation.
- NEVER fine-tune before testing whether data, retrieval, or prompting is the failing layer.
- NEVER let probabilistic output directly authorize irreversible high-impact actions.
- ALWAYS define abstention and fallback behavior before launch.
- ALWAYS treat quality, latency, privacy, and cost as joint design constraints.
