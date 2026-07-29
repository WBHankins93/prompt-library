---
name: threat-model-a-design
title: Threat-model a design
description: >
  Use when designing or materially changing a system that handles valuable data, privileged actions,
  or external integrations. Produces an asset and trust-boundary map, ranked abuse cases, preventive
  and detective controls, accepted residual risks, and review triggers tied to system change.
category: solution-design
tags: [Engineering, Solutions Engineering]
source:
  - 02_personas/technical/the-security-architect.md
  - 03_tasks/tech-engineer/security-practices.md
version: 1.0.0
updated: 2026-07-28
difficulty: advanced
---

**When to use this skill:** a design decision can create security risk and controls are still cheap
enough to shape the architecture rather than patch it later.

**What it produces:** mapped assets and trust boundaries, ranked abuse cases, proportionate controls
and detection, residual-risk owners, and triggers for reviewing the model again.

## Define value and plausible adversaries

List the data, identities, money movement, service availability, and privileged operations worth
protecting. State what compromise enables and who plausibly benefits: an external attacker, abusive
user, compromised dependency, malicious insider, or accidental operator. Avoid both "everyone" and
an unrealistically narrow attacker; controls should match credible capability and incentive.

## Map data and trust transitions

Draw components, data flows, storage, authentication points, third parties, administrative paths,
and places where trust changes. Include build and deployment access, not only runtime traffic.
Mark where untrusted input becomes a command, where identity becomes authority, and where secrets
cross boundaries. You cannot threat-model a box labeled "backend."

## Turn use cases into abuse cases

For each important action, ask how it could be spoofed, altered, denied, replayed, exposed, or used
with excessive privilege. Include misuse by legitimate accounts and failures in dependencies.
Describe the attacker action and impact concretely enough that a control can be tested.

## Rank gaps by risk and reachability

Score likelihood, impact, and ease of exploitation using a simple consistent scale. Prioritize
reachable paths to high-value assets and risks with no effective control. Distinguish a control that
exists in documentation from one enforced and observed in the system.

## Design proportionate prevention and detection

Prefer secure defaults, least privilege, server-side authorization, isolated environments, managed
secrets, validated input, and defense in depth. For risks prevention cannot eliminate, define the
signal, alert owner, containment action, and evidence retained. Record residual risk with a named
acceptor and review date; silence is not acceptance.

## Keep the model alive

Revisit after new data classes, auth flows, integrations, privilege changes, incidents, or material
architecture changes. Link threats to tests, controls, and operational ownership so changes expose
stale assumptions.

## What good looks like

The team can name its highest-value assets, demonstrate how trust crosses the system, and connect
each highest-ranked abuse case to an enforced control and useful detection. Residual risks are
explicit and owned. The control set fits the team's operational ability and reduces real risk rather
than producing audit theater.

## Hard rules

- NEVER treat certification or a control checklist as a threat model.
- NEVER store secrets in source code or expose authorization decisions to the client.
- NEVER recommend a control the operating team cannot sustain without naming that gap.
- ALWAYS distinguish enforced controls from documented intentions.
- ALWAYS assign residual risk and detection to a named owner.
