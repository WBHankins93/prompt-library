<!-- ================================================================ -->
<!-- CLAUDE.md - Project Configuration & Context                      -->
<!-- ================================================================ -->
<!-- 
This file is automatically loaded by Claude in this project.
It defines identity, context, active teams, and project-specific knowledge.

Last Updated: [DATE]
Project: [PROJECT_NAME]
Phase: [CURRENT_PHASE]
-->

<!-- ================================================================ -->
<!-- SECTION 1: FOUNDATION & STANDARDS (Required)                     -->
<!-- ================================================================ -->

# Foundation & Standards

**CRITICAL: Always load these before responding**

Before any response in this project, you must load and follow:

1. **`00_foundation/foundation.md`**  
   - Identity & Accountability (WHO the system is)
   - Research Standards (HOW to gather information)
   - Reasoning Standards (HOW to form judgments)

2. **`01_response-standards/response-standards.md`**  
   - Output quality and expression discipline
   - Formatting, tone, and actionability standards

**These are non-negotiable.** All personas, teams, and project-specific instructions operate within these boundaries.

---

<!-- ================================================================ -->
<!-- SECTION 2: PROJECT IDENTITY & MANDATE                            -->
<!-- ================================================================ -->

# Project Identity

## Project Name
[PROJECT_NAME]

## Project Type
<!-- Choose one or describe: -->
- [ ] Business/Commercial
- [ ] Creative/Brand
- [ ] Technical/Engineering
- [ ] Personal/Productivity
- [ ] Research/Learning
- [ ] Other: [DESCRIPTION]

## Project Mandate

**What this project exists to accomplish:**

[2-4 sentences describing the core purpose and non-negotiable goals]

**What this project explicitly does NOT do:**

[1-3 sentences defining out-of-scope activities to prevent drift]

## Current Phase

**Phase:** [DISCOVERY / FOUNDATION / EXECUTION / OPTIMIZATION / MAINTENANCE]

**Focus:** [What matters most right now]

**Timeline:** [Current phase timeline or milestones]

---

<!-- ================================================================ -->
<!-- SECTION 3: ACTIVE TEAM & PERSONAS                                -->
<!-- ================================================================ -->

# Active Team & Personas

## Lead Persona

**Primary Decision Authority:** [PERSONA_NAME]

**Role:** [What this persona decides]

**Responsibilities:**
- [Key responsibility 1]
- [Key responsibility 2]
- [Key responsibility 3]

## Supporting Personas

<!-- List all active personas with their mandates -->

### [PERSONA_NAME_1]
**Mandate:** [What this persona owns]  
**Authority:** [What decisions they can make/influence]

### [PERSONA_NAME_2]
**Mandate:** [What this persona owns]  
**Authority:** [What decisions they can make/influence]

### [PERSONA_NAME_3]
**Mandate:** [What this persona owns]  
**Authority:** [What decisions they can make/influence]

## Team Composition File

**If using a pre-defined team:**  
Reference: `05_personal/teams/[TEAM_FILE].md`

**Team Focus:** [Primary domain — e.g., technical / creative / commercial / mixed]

## Persona Power Boundaries

**Decision hierarchy:**
1. [Lead Persona] - Final authority on [DOMAIN]
2. [Persona 2] - Can veto on [SPECIFIC_CONDITION]
3. [Persona 3] - Advisory on [DOMAIN]
4. [Persona 4] - Recommends but does not decide

**Override conditions:**
- [Condition where normal hierarchy doesn't apply]
- [Emergency or risk-based exceptions]

## Excluded Personas

**The following personas are NOT allowed in this project:**
- [PERSONA_NAME] - Reason: [WHY_EXCLUDED]
- [PERSONA_NAME] - Reason: [WHY_EXCLUDED]

These may be valuable elsewhere but create [SPECIFIC_PROBLEM] in this context.

## Routing Mode

<!-- Choose one. Default is AUTO. -->

**Mode:** AUTO

```
AUTO    — team-composition.md classifies intent and selects the persona stack automatically.
          No manual configuration required. Use this for most projects.

MANUAL  — Specific personas are locked in for this project. Auto-routing is disabled.
          List the active personas explicitly below.
          Use when: the project has a narrow, stable domain and routing variance creates noise.

HYBRID  — Auto-routing is active, but one or more personas are always included
          regardless of intent classification. Useful when a persona should
          always be present (e.g., Inner Voice on a writing-focused project,
          Red Team on a high-stakes decision project).
```

<!-- For MANUAL mode: list active personas here -->
<!-- Personas: [PERSONA_NAME_1], [PERSONA_NAME_2] -->

<!-- For HYBRID mode: list always-on personas here -->
<!-- Always include: [PERSONA_NAME] — Reason: [WHY_ALWAYS_ON] -->

---

<!-- ================================================================ -->
<!-- SECTION 4: DOMAIN CONTEXT                                        -->
<!-- ================================================================ -->

# Domain Context

## Problem Space

**This project owns decisions about:**
- [Domain area 1]
- [Domain area 2]
- [Domain area 3]

**This project does NOT own:**
- [Out-of-scope area 1]
- [Out-of-scope area 2]

## Target Audience / Users

**Primary:** [WHO]  
**Characteristics:** [KEY_ATTRIBUTES]  
**Needs:** [WHAT_THEY_NEED]

**Secondary:** [WHO] (if applicable)  
**Characteristics:** [KEY_ATTRIBUTES]

## Success Metrics

**Observable outcomes that define success:**
- [ ] [Measurable outcome 1]
- [ ] [Measurable outcome 2]
- [ ] [Measurable outcome 3]
- [ ] [Measurable outcome 4]

**This project has failed if:**
- [Failure condition 1]
- [Failure condition 2]

---

<!-- ================================================================ -->
<!-- SECTION 5: TECHNICAL/DOMAIN SPECIFICATIONS                       -->
<!-- ================================================================ -->

# Technical Specifications

<!-- Adapt this section based on project type -->

## Technology Stack
<!-- For technical projects -->

**Core Technologies:**
- [Technology 1] - [Version / Notes]
- [Technology 2] - [Version / Notes]
- [Technology 3] - [Version / Notes]

**Development Environment:**
- [Environment details]

**Deployment:**
- [Deployment platform/process]

## Code Standards
<!-- For software projects -->

**Language/Framework:** [LANGUAGE]  
**Style Guide:** [REFERENCE]

**Preferences:**
- [Code style preference 1]
- [Code style preference 2]
- [Code style preference 3]

**Quality Gates:**
- [ ] [Check 1]
- [ ] [Check 2]
- [ ] [Check 3]

## Brand Specifications
<!-- For brand/creative projects -->

**Brand Voice:** [DESCRIPTION]  
**Tone:** [DESCRIPTION]  
**Personality:** [DESCRIPTION]

**Visual Identity:**
- Color palette: [COLORS]
- Typography: [FONTS]
- Style: [AESTHETIC_DESCRIPTION]

**What we avoid:**
- [Anti-pattern 1]
- [Anti-pattern 2]

## Service/Product Specifications
<!-- For business projects -->

**Core Offering:**
- [Service/Product 1]: [DESCRIPTION]
- [Service/Product 2]: [DESCRIPTION]

**Pricing Structure:** [APPROACH]  
**Target Market:** [DESCRIPTION]

---

<!-- ================================================================ -->
<!-- SECTION 6: CONSTRAINTS & BOUNDARIES                              -->
<!-- ================================================================ -->

# Constraints & Boundaries

## Hard Constraints

**These cannot be changed or worked around:**
- [Constraint 1] - Reason: [WHY]
- [Constraint 2] - Reason: [WHY]
- [Constraint 3] - Reason: [WHY]

## Soft Constraints

**These are preferred but flexible under specific conditions:**
- [Constraint 1] - Can flex if: [CONDITION]
- [Constraint 2] - Can flex if: [CONDITION]

## Resource Constraints

**Time:** [TIME_AVAILABILITY]  
**Budget:** [BUDGET_CONSTRAINTS]  
**Skills:** [SKILL_LIMITATIONS]  
**Tools:** [TOOL_AVAILABILITY]

## Ethical/Value Boundaries

**Non-negotiable principles:**
- [Principle 1]
- [Principle 2]
- [Principle 3]

**We will never:**
- [Hard line 1]
- [Hard line 2]

---

<!-- ================================================================ -->
<!-- SECTION 7: DECISION FRAMEWORKS                                   -->
<!-- ================================================================ -->

# Decision Frameworks

## Decision Model

**When personas conflict, resolve by:**
1. [Resolution step 1]
2. [Resolution step 2]
3. [Final authority: PERSONA/CRITERIA]

**Priority order:**
1. [Priority 1] beats [Priority 2]
2. [Priority 2] beats [Priority 3]
3. Exception: [When normal priority inverts]

## Tradeoff Hierarchy

**When forced to choose:**
- [Value A] over [Value B] - Except when: [CONDITION]
- [Value C] over [Value D] - Except when: [CONDITION]

## Risk Posture

**This project's risk tolerance:**
- [CONSERVATIVE / MODERATE / AGGRESSIVE]

**Accept risk when:**
- [Condition 1]
- [Condition 2]

**Never accept risk when:**
- [Condition 1]
- [Condition 2]

---

<!-- ================================================================ -->
<!-- SECTION 8: WORKFLOWS & PROCESSES                                 -->
<!-- ================================================================ -->

# Workflows & Processes

## Standard Operating Procedures

### [PROCESS_NAME_1]
**Trigger:** [When to use this process]  
**Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Output:** [What this produces]

### [PROCESS_NAME_2]
**Trigger:** [When to use this process]  
**Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Output:** [What this produces]

## Review & Quality Gates

**Before delivering [ARTIFACT_TYPE]:**
- [ ] [Check 1]
- [ ] [Check 2]
- [ ] [Check 3]

**Before making [DECISION_TYPE]:**
- [ ] [Verification 1]
- [ ] [Verification 2]

## Communication Protocols

**When reporting progress:**
- [Format/Structure]

**When flagging issues:**
- [Escalation process]

**When requesting input:**
- [How to frame requests]

---

<!-- ================================================================ -->
<!-- SECTION 9: PROJECT KNOWLEDGE BASE                                -->
<!-- ================================================================ -->

# Project Knowledge Base

## Key Documents

**Uploaded to this project:**
- `[FILENAME]` - [DESCRIPTION / PURPOSE]
- `[FILENAME]` - [DESCRIPTION / PURPOSE]
- `[FILENAME]` - [DESCRIPTION / PURPOSE]

## How to Use Project Documents

**When [TASK_TYPE], reference:**
- [Document set 1]
- [Document set 2]

**Precedence order:**
1. [Document type 1] - Source of truth for [DOMAIN]
2. [Document type 2] - Reference for [DOMAIN]
3. [Document type 3] - Background only

## External References

**Primary sources:**
- [Resource 1]: [URL / LOCATION]
- [Resource 2]: [URL / LOCATION]

**Secondary sources:**
- [Resource 3]: [URL / LOCATION]

---

<!-- ================================================================ -->
<!-- SECTION 10: PROJECT HISTORY & DECISIONS                          -->
<!-- ================================================================ -->

# Project History & Decisions

## Key Decisions Log

### [DECISION_DATE] - [DECISION_TITLE]
**Decision:** [WHAT_WAS_DECIDED]  
**Rationale:** [WHY]  
**Impact:** [WHAT_CHANGED]  
**Revisit if:** [CONDITION_FOR_REVISITING]

### [DECISION_DATE] - [DECISION_TITLE]
**Decision:** [WHAT_WAS_DECIDED]  
**Rationale:** [WHY]  
**Impact:** [WHAT_CHANGED]  
**Revisit if:** [CONDITION_FOR_REVISITING]

## Lessons Learned

### [LESSON_TITLE]
**Context:** [WHAT_HAPPENED]  
**Learning:** [WHAT_WE_LEARNED]  
**Applied:** [HOW_THIS_CHANGED_APPROACH]

## Anti-Patterns to Avoid

**Based on this project's history:**
- ❌ [Anti-pattern 1] - Led to [PROBLEM]
- ❌ [Anti-pattern 2] - Led to [PROBLEM]
- ❌ [Anti-pattern 3] - Led to [PROBLEM]

---

<!-- ================================================================ -->
<!-- SECTION 11: CURRENT FOCUS & PRIORITIES                           -->
<!-- ================================================================ -->

# Current Focus & Priorities

## Active Workstreams

### Priority 1: [WORKSTREAM_NAME]
**Goal:** [WHAT_THIS_ACHIEVES]  
**Status:** [CURRENT_STATE]  
**Next Actions:**
- [ ] [Action 1]
- [ ] [Action 2]

### Priority 2: [WORKSTREAM_NAME]
**Goal:** [WHAT_THIS_ACHIEVES]  
**Status:** [CURRENT_STATE]  
**Next Actions:**
- [ ] [Action 1]
- [ ] [Action 2]

## Deferred / On Hold

**Not working on right now:**
- [Item 1] - Reason: [WHY_DEFERRED]
- [Item 2] - Reason: [WHY_DEFERRED]

## Upcoming Milestones

- [ ] **[DATE]** - [MILESTONE]
- [ ] **[DATE]** - [MILESTONE]
- [ ] **[DATE]** - [MILESTONE]

---

<!-- ================================================================ -->
<!-- SECTION 12: OUTPUT ARTIFACTS                                     -->
<!-- ================================================================ -->

# Expected Output Artifacts

## This Project Must Produce

**Required deliverables:**
- [ ] [Artifact 1] - [DESCRIPTION]
- [ ] [Artifact 2] - [DESCRIPTION]
- [ ] [Artifact 3] - [DESCRIPTION]

**Optional/Nice-to-have:**
- [ ] [Artifact 4] - [DESCRIPTION]

## Artifact Standards

### [ARTIFACT_TYPE_1]
**Format:** [FORMAT]  
**Quality bar:** [STANDARD]  
**Must include:**
- [Element 1]
- [Element 2]

### [ARTIFACT_TYPE_2]
**Format:** [FORMAT]  
**Quality bar:** [STANDARD]  
**Must include:**
- [Element 1]
- [Element 2]

---

<!-- ================================================================ -->
<!-- SECTION 13: CONTEXT FOR SPECIFIC TASKS                           -->
<!-- ================================================================ -->

# Task-Specific Context

## When Working on [TASK_TYPE_1]

**Context to consider:**
- [Context 1]
- [Context 2]

**Preferred approach:**
- [Approach guideline]

**Avoid:**
- [Anti-pattern]

## When Working on [TASK_TYPE_2]

**Context to consider:**
- [Context 1]
- [Context 2]

**Preferred approach:**
- [Approach guideline]

**Avoid:**
- [Anti-pattern]

---

<!-- ================================================================ -->
<!-- SECTION 14: DISSOLUTION & EVOLUTION                              -->
<!-- ================================================================ -->

# Project Evolution

## Dissolution Conditions

**This project/phase ends when:**
- [ ] [Condition 1]
- [ ] [Condition 2]
- [ ] [Condition 3]

**What happens next:**
- [Transition plan]

## Evolution Triggers

**Shift to new phase when:**
- [Trigger 1]
- [Trigger 2]

**What changes in next phase:**
- [Change 1]
- [Change 2]

## Version History

**v1.0** - [DATE] - Initial project setup  
**v1.1** - [DATE] - [WHAT_CHANGED]  
**v1.2** - [DATE] - [WHAT_CHANGED]

---

<!-- ================================================================ -->
<!-- SECTION 15: QUICK REFERENCE                                      -->
<!-- ================================================================ -->

# Quick Reference

## One-Line Reminders

- **Project Goal:** [ONE_SENTENCE]
- **Lead Persona:** [NAME]
- **Current Phase:** [PHASE]
- **Top Priority:** [WHAT_MATTERS_MOST_NOW]
- **Non-Negotiable:** [CORE_PRINCIPLE]

## Common Questions

**Q: [QUESTION]**  
**A:** [ANSWER]

**Q: [QUESTION]**  
**A:** [ANSWER]

## Emergency Contacts / Resources

- [Resource name]: [LOCATION / URL]
- [Contact name]: [ROLE / WHEN_TO_USE]

---

<!-- ================================================================ -->
<!-- TEMPLATE METADATA                                                -->
<!-- ================================================================ -->

<!-- 
Template Version: 1.0
Created: 2026-01-29
Last Updated: 2026-01-29

This template is designed to work with the prompt-library foundation system.
Always load 00_foundation/foundation.md and 01_response-standards/response-standards.md
before applying project-specific context.

Sections can be removed if not applicable to your project type.
All sections marked [REQUIRED] should be completed for every project.
-->