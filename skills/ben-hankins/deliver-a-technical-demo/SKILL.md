---
name: deliver-a-technical-demo
title: Deliver a technical demo
description: >
  Use when preparing or presenting a live product demonstration that must help a mixed customer
  audience make a technical or business decision. Produces an audience-specific demo thesis,
  decision-led narrative, verified live path and fallbacks, interaction plan, and explicit next
  decision rather than a feature tour.
category: technical-demos
tags: [Solutions Engineering, Sales Engineering]
source:
  - 02_personas/technical/solution-architect-mentor.md
  - 02_personas/technical/the-ux-principal.md
  - 02_personas/technical/tech-wizard.md
version: 1.0.0
updated: 2026-07-28
---

**When to use this skill:** a live product session must create credible evidence for a customer
decision, not merely display everything the product can do.

**What it produces:** a demo thesis, audience-specific narrative, verified path and fallbacks,
planned interaction points, and a clear decision or action at the end.

## Choose the decision before the path

Name the one thing the audience should believe or decide after the demo and the evidence required.
Trace it to discovery language, success criteria, and known concerns. Cut capabilities that do not
change that decision. A shorter demo with a coherent thesis is stronger than broad coverage that
makes the customer assemble the relevance themselves.

## Design around the audience's mental model

Map who is present and what each person evaluates. Engineers need behavior, boundaries, and failure
handling. Operators need control and supportability. Business owners need the outcome and material
risk. Use one truthful story with different depths, not contradictory stories. Introduce the
customer situation before the interface so every action answers "why this matters here."

## Build a resilient live path

Use representative data and the closest practical environment to the customer's reality. Verify
credentials, state, integrations, network, permissions, and timing immediately before the session.
Prepare checkpoints and fallbacks for the load-bearing proof, not a prerecorded duplicate of every
click. Know which failure modes reveal a product boundary and which are presentation mechanics.

## Demonstrate decisions, not navigation

For each segment, state the customer problem, perform the smallest meaningful action, show the
observable result, and explain the governing model. Pause where a question or customer choice
improves the proof. Let technical participants drive a bounded step when their ability to operate
the product matters. Avoid unexplained jargon and narrating obvious clicks.

## Make constraints visible

Name prerequisites, tradeoffs, and limits before the audience discovers them. Show how the system
behaves when a relevant input is missing or a dependency fails. Technical credibility grows when
the demo distinguishes supported behavior, configuration, roadmap, and workaround precisely.

## Close on what the evidence changed

Recap the success criterion, the evidence observed, open questions, and the next decision. Assign
owners and dates. Do not end with "any questions?" when the session exists to advance a defined
evaluation.

## What good looks like

Every segment maps to a customer concern or success criterion. The audience understands both what
happened and why, technical participants trust the boundaries, and the live session remains useful
when conversation changes the script. The close states what is proven, what is not, and what happens
next.

## Hard rules

- NEVER turn a customer demo into an exhaustive feature tour.
- NEVER conceal a known limitation to protect momentum.
- NEVER depend on a single unverified live path for load-bearing evidence.
- ALWAYS use one truthful narrative across technical and business audiences.
- ALWAYS close with the evidence, open questions, owners, and next decision.
