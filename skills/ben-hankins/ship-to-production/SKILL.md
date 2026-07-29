---
name: ship-to-production
title: Ship to production
description: >
  Use when designing or reviewing the path from a code change to a production release. Produces a
  release contract, risk-based CI gates, reproducible artifact and environment strategy,
  backward-compatible migration plan, automated deployment, rollback path, and post-release
  verification tied to user outcomes.
category: engineering
tags: [Engineering]
source:
  - 03_tasks/tech-engineer/build-and-test.md
  - 03_tasks/tech-engineer/ci-cd-pipeline.md
  - 03_tasks/tech-engineer/deployment.md
version: 1.0.0
updated: 2026-07-28
difficulty: advanced
---

**When to use this skill:** a team needs a release path that is reproducible, observable, and
reversible rather than a collection of manual deployment habits.

**What it produces:** a release contract, automated quality gates, immutable artifact and
environment plan, safe migration sequence, deployment and rollback design, and verification plan.

## Define the release contract

State what must be true for a change to enter production: review, tests, security checks,
environment approval, migration readiness, and observable acceptance criteria. Scale gates to the
risk of the system and change. A content-only site and a payment service should not carry identical
ceremony, but neither should depend on undocumented memory.

## Put fast evidence before expensive evidence

Run formatting, lint, types, and focused unit tests early; run integration, end-to-end, build,
dependency, and artifact checks after cheap failures are excluded. Parallelize independent gates
and cache deterministic inputs. Flaky checks are broken production controls—repair or quarantine
them rather than teaching the team to rerun until green.

## Promote one reproducible artifact

Build from locked dependencies in a clean environment and promote the same immutable artifact
through environments. Keep configuration and secrets outside it with consistent variable names and
environment-specific values. Match production-critical dependencies in staging; an environment
that cannot reveal production behavior is a preview, not a gate.

## Make data change backward-compatible

Separate schema expansion, application transition, and cleanup. Deploy additive changes before code
depends on them, support old and new representations during transition, and remove old paths only
after verification. State whether rollback includes data reversal or only application rollback.

## Automate a bounded deployment

Use health checks and gradual exposure when impact warrants it. Record the previous known-good
artifact and the precise rollback trigger. Humans may approve consequential releases; machines
should execute the repeatable steps. DNS, certificates, access, and external dependencies need
owners before the release window.

## Verify behavior after the pipeline is green

Confirm the deployed version, critical user path, errors, latency, and business outcome. Watch long
enough to cover delayed failures and background work. Communicate status and capture anomalies.
Pipeline success proves the deployment process ran, not that the release works.

## What good looks like

The same inputs create the same artifact, failures stop before production, and a release can be
rolled back within the system's recovery objective. Database change does not trap application
rollback. The team can identify what version is live, why it was accepted, and whether users are
receiving the intended outcome.

## Hard rules

- NEVER deploy from an uncommitted or manually altered workspace.
- NEVER rebuild a different artifact for each environment.
- NEVER ship a destructive migration without a staged compatibility plan.
- ALWAYS define rollback triggers before deployment.
- ALWAYS verify a critical user outcome after the release.
