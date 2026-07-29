---
name: scope-a-poc
title: Scope a POC
description: >
  Use when defining the scope of a proof-of-concept or technical evaluation with a customer —
  deciding what the POC will prove, what's explicitly out of scope, how success is judged, and
  which failure modes to name up front. Produces a tight POC scope tied to a business outcome,
  an exit/success definition both sides agree on, named failure modes with mitigations, and a
  short list of what you are deliberately not doing.
category: poc-design
tags: [Solutions Engineering, Sales Engineering]
source: 02_personas/technical/solution-architect-mentor.md
version: 1.0.0
updated: 2026-07-28
difficulty: advanced
---

**When to use this skill:** discovery is done and you're defining what a POC will actually prove —
before any environment is stood up. Whoever scopes the POC controls the evaluation; scope it wrong
and you either lose on a technicality or "win" something that won't survive production.

**What it produces:** a POC scope tied to a specific business outcome, a success/exit definition both
sides sign off on, named failure modes with mitigations, and an explicit out-of-scope list.

## Scope to the business outcome, not the feature tour

A POC is *mutual validation*, not a demo. Pick the smallest scope that proves the one thing that
justifies the purchase — the business success criterion from discovery — and cut everything else.
Breadth is the enemy: a POC that touches ten features proves none of them and drags for weeks. If a
capability isn't load-bearing for the decision, it goes on the out-of-scope list, in writing.

## Define success and "done" before you start

Agree, explicitly and in advance, on:

- **The success bar** — the observable result that means "this works" (a metric, a passed test, a
  workflow completed end-to-end), phrased so both the engineer and the buyer read it the same way.
- **The exit** — when the POC ends and what happens next if it passes. An open-ended POC never
  converts; it just accretes new asks until momentum dies.

Write these down and get a yes. Ambiguity here is where deals stall after a "successful" POC.

## Name the failure modes out loud

Surface risks before they become surprises — surfacing a risk early reads as competence; discovering
it mid-POC reads as a gap. For each likely failure mode (a product limitation, a data-quality
dependency, an integration the customer hasn't built yet), name it and pair it with a mitigation or a
honest "here's the boundary." Customers forgive known limits; they don't forgive being ambushed.

## Design for 2 AM, not for the slide

The test of the scope isn't whether it demos well — it's whether the customer's own team could
operate the result during an outage. If the POC only succeeds with you driving, it proved the wrong
thing. Build the scope so success means *their* engineers ran it and trusted it.

## Win through incremental proof

Sequence the POC as a few small, visible wins rather than one big reveal at the end. Each win builds
confidence and gives you a checkpoint to adjust scope when reality demands. Communicate progress
constantly; silence during a POC reads as trouble.

## What good looks like

The POC closes because it was scoped correctly — it proved exactly the business outcome that
mattered, and the result survives contact with production. The customer's engineers respect the depth
and could run it without you. Nothing "in scope" was a surprise, and the out-of-scope list prevented
the evaluation from sprawling. You'd be comfortable if the customer ran this in prod on Monday.

## Hard rules

- NEVER let a POC succeed on a scope that won't survive production — a rigged win creates a customer who churns angry.
- NEVER promise a capability the product can't deliver to get the POC greenlit — vaporware is discovered at the worst time.
- NEVER leave success undefined — "we'll know it when we see it" is how POCs die after passing.
- NEVER hide a known limitation to keep momentum — name it, mitigate it, keep the trust.
- ALWAYS tie the scope to one business outcome; if you can't name it, go back to discovery.
