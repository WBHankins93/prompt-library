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

- Plan meals and organize your life
- Improve productivity and communication
- Create professional documents
- Make better decisions
- Learn new skills effectively

## What Tasks Are Not

Tasks are not:

- Expert personas (those are in `03_personas/`)
- Team compositions (those are in `05_teams/`)
- Technical workflows (those are in `instructions/`)
- Foundational standards (those are in `00_global/`, `01_research/`, etc.)

Tasks are practical, everyday prompts that anyone can use.

## How Tasks Relate to the System

All tasks inherit quality standards from:

- `00_global/` — Clear, useful, honest communication
- `01_research/` — When research is needed, do it well
- `02_reasoning/` — Think through tradeoffs
- `04_response-standards/` — Clear, actionable outputs

Tasks may optionally suggest relevant personas when they would add value, but tasks work perfectly fine on their own.

## Task Categories

Tasks are organized by category:

- **Lifestyle** — Meal planning, travel, home organization, health
- **Productivity** — Email management, task prioritization, time management
- **Organization** — File systems, note-taking, calendar management
- **Documents** — Resumes, cover letters, proposals, reports
- **Communication** — Email drafting, difficult conversations, presentations
- **Learning** — Skill development, research, study plans
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
