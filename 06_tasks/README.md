# Tasks · Ready-to-Use Prompts for Everyday Life

## Purpose

The `tasks/` directory contains self-contained, ready-to-use prompts designed for everyday non-technical users.

These are complete prompts you can copy and use immediately with any AI assistant to accomplish specific real-world tasks.

## What Tasks Are

Tasks are:

- **Self-contained** — Each task is a complete, ready-to-use prompt
- **Accessible** — Written for non-technical users, no special knowledge required
- **Practical** — Focused on real-world outcomes you can use today
- **Standalone** — Work independently, though they inherit quality standards from the master prompts

Tasks help you:

- Learn new skills and understand complex topics
- Help others learn and solve problems
- Optimize boring but necessary tasks (grocery shopping, budgeting, etc.)
- Build systems for positive outcomes (habits, productivity, organization)
- Make better decisions
- Create professional documents

## What Tasks Are Not

Tasks are not:

- Expert personas (those are in `03_personas/`)
- Team compositions (those are in `05_teams/`)
- Foundational standards (those are in `00_foundation/`)

Tasks are practical prompts focused on:
- **Helping** — Supporting others in learning and problem-solving
- **Learning** — Building skills and understanding (simple and complex)
- **Positive outcomes** — Creating systems for better life results
- **Efficiency** — Making boring but necessary tasks easier

## How Tasks Relate to the System

All tasks inherit quality standards from:

- `00_foundation/foundation.md` — Identity, research, and reasoning standards
- `04_response-standards/` — Clear, actionable outputs

Tasks may optionally suggest relevant personas when they would add value, but tasks work perfectly fine on their own.

## Task Categories

Tasks are organized by category:

- **Helping** — Teaching, mentoring, helping others learn or solve problems
- **Learning** — Skill development, research deep dives, learning from mistakes
- **Lifestyle** — Meal planning, grocery optimization, budget planning, home organization
- **Organization** — File systems, note-taking, systems that make life easier
- **Documents** — Resumes, cover letters, professional documents
- **Productivity** — Complex productivity systems, habit formation, workflow optimization
- **Decision-Making** — Purchase decisions, career choices, life changes

## How to Use Tasks

1. Browse categories to find what you need
2. Open the task file
3. Copy the prompt
4. Paste it into your AI assistant
5. Follow the instructions and provide your specific information

Each task includes:
- Clear instructions
- What information you'll need to provide
- What to expect as output
- Tips for best results

## Task File Format

Each task includes:

- **Frontmatter** — Category, difficulty, time estimate, optional persona suggestions
- **Task Description** — What this task helps you accomplish
- **Instructions** — Step-by-step guidance
- **Example** — Sample inputs and outputs
- **Tips** — How to get the best results

## Creating New Tasks

When creating a new task:

1. Choose the appropriate category
2. Use kebab-case naming (e.g., `meal-planning.md`)
3. Include frontmatter with category and metadata
4. Write clear, non-technical instructions
5. Provide examples
6. Test it yourself before adding

Tasks should be immediately usable by someone who has never used AI before.

## Design Philosophy

Tasks are intentionally:

- **Simple** — No complex setup required
- **Practical** — Solve real problems people face
- **Accessible** — No technical jargon or assumptions
- **Effective** — Produce useful, actionable results

If a task requires technical knowledge or complex setup, it belongs in `instructions/` instead.
