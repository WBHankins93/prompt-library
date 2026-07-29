---
name: run-technical-discovery
title: Run technical discovery
description: >
  Use when preparing for, running, or debriefing a technical discovery conversation with a
  prospect or customer — the early call(s) where you map the real problem, the people, and the
  constraints before anyone scopes a POC or writes a proposal. Produces a stakeholder map, a
  prioritized question set, the hidden constraints to surface, and both technical and business
  success criteria in the customer's own words.
category: discovery
tags: [Solutions Engineering, Sales Engineering]
source: 02_personas/technical/solution-architect-mentor.md
version: 1.0.0
updated: 2026-07-28
---

**When to use this skill:** you have a discovery call coming up (or just had one) and need to
find the real problem, the people who decide, and the constraints that will sink a POC — before
committing to scope.

**What it produces:** a stakeholder map, a prioritized discovery question set, a list of hidden
constraints to surface, and technical *and* business success criteria captured in the customer's words.

## Map the stakeholders before the problem

Discovery is where deals are won or lost, and the person who understands the room controls what
gets scoped. Identify three overlapping groups and treat them differently:

- **Technical** — who will operate this at 2 AM during an outage? They judge on credibility and honesty.
- **Business** — who owns the outcome and the budget? They judge on results and risk.
- **Political** — who has veto power? The quiet person in the room often holds it. Name them explicitly.

Missing the political map is the most common discovery failure: a technically perfect evaluation
dies because nobody surfaced the one skeptic who was never in the meetings.

## Surface the constraints people don't volunteer

Requirements documents describe the wish; constraints describe reality. Ask directly about the
things that quietly kill deployments: **network** (egress, air-gap, latency), **security and
compliance** (data residency, audit, SSO/SCIM), **budget** (real number and who signs), and
**timeline** (what forces the date — a contract, a launch, a fiscal boundary). A constraint found
in discovery is a design input; the same constraint found during the POC is a fire.

## Capture success in their words — both kinds

Get two success definitions, explicitly, and write them down verbatim:

- **Technical success** — what has to be *true* for their engineers to trust it.
- **Business success** — what outcome justifies the spend to the person who signs.

If you only have one of these, you don't have discovery yet. A POC that hits the technical bar but
never mapped to a business outcome has no champion when procurement gets hard.

## Ask questions that make them think, not recite

Prioritize questions that expose the gap between the stated ask and the real problem: *"What
happens today when this breaks?"*, *"Who feels the pain, and how do they escalate?"*, *"What have
you already tried, and why didn't it stick?"* Follow the friction, not the feature list.

## What good looks like

You leave discovery able to state the customer's problem better than they did — including the
constraint they hadn't said out loud and the stakeholder who wasn't in the room. Both success
criteria are written in their language, not yours. The next POC scope writes itself because the
inputs are real. Nobody had to be impressed by a demo for this to work.

## Hard rules

- NEVER skip discovery to hit a timeline — scoping mistakes always cost more than the planning skipped.
- NEVER pitch during discovery; the goal is to understand, not to sell. Talking loses information.
- NEVER accept a vague success criterion ("make it better", "modernize") — pin it to something testable.
- NEVER fake understanding of a constraint to look sharp — say "walk me through that" and earn the credibility.
- ALWAYS identify who can say no, even if they never say anything.
