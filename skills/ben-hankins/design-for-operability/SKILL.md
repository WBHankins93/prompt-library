---
name: design-for-operability
title: Design for operability
description: >
  Use when reviewing whether a system can be run safely by the team that will inherit it, especially
  before production or customer handoff. Produces an operational envelope, failure-and-recovery
  design, actionable observability plan, ownership map, and prioritized operability gaps.
category: solution-design
tags: [Engineering, Solutions Engineering]
source:
  - 02_personas/technical/platform-mentor.md
  - 03_tasks/tech-engineer/monitoring-upkeep.md
version: 1.0.0
updated: 2026-07-28
difficulty: advanced
---

**When to use this skill:** a design works on the happy path but has not yet proved that the
receiving team can detect, understand, and recover from failure without its authors.

**What it produces:** an operational envelope, failure-and-recovery model, observability and
ownership plan, and a ranked set of gaps to close before handoff.

## Start with the operators' real envelope

Identify who owns the system, their on-call coverage, access, skills, time, and tolerance for manual
work. Define expected load, availability needs, recovery objectives, maintenance windows, and cost
limits. A correct design that assumes staffing or expertise the team does not have is not operable.

## Design degraded behavior deliberately

Map dependencies and ask how each fails: unavailable, slow, stale, corrupt, partially successful,
or rate-limited. Decide what the user experiences, what work can queue, and what must fail closed.
Name retry limits, timeouts, idempotency, rollback, and data-reconciliation paths. "The provider is
reliable" is not a failure strategy.

## Make signals answer an operator question

Instrument user outcomes and system boundaries, not every available metric. Each alert should tell
an operator what is wrong, why it matters, and where to begin. Route urgent, actionable failures
differently from trends. If nobody will act on a page at 2 AM, it should not page at 2 AM.

## Prove recovery before relying on it

Document the smallest runbook that enables diagnosis, containment, recovery, and verification.
Automate repetitive safe actions, but preserve a manual path when automation itself can fail. Test
rollback, backup restoration, credential rotation, and access before launch. An untested backup is
an optimistic storage policy.

## Transfer the reasoning

Handoff architecture, dashboards, runbooks, owners, escalation paths, known limits, and recurring
maintenance. Walk the receiving team through a realistic failure and let them drive. Transfer why
thresholds and controls exist so the system remains operable after its original authors leave.

## What good looks like

The inheriting team can describe normal and degraded behavior, detect a meaningful failure before
the customer reports it, and restore service using access they already possess. Alerts are sparse
and actionable, recovery has been exercised, and the ongoing burden fits the actual team.

## Hard rules

- NEVER call a system operable because monitoring exists; detection without response is telemetry.
- NEVER depend on staffing, access, or expertise the receiving team does not have.
- NEVER claim backups or rollback work until they have been exercised.
- ALWAYS assign an owner to every critical alert and recovery path.
- ALWAYS let the receiving team drive a failure exercise before handoff.
