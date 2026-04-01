# Build and Test

> Standards for building web projects that don't break in production.
> Applies to client sites, internal tools, and SaaS products.

---

## Build Philosophy

A build process exists to answer one question: **can this code be shipped?** If your build succeeds, the artifact should be deployable. If it fails, you should know exactly why before anyone touches production.

Build steps should be deterministic, automated, and fast enough that developers actually run them. A 20-minute build that people skip is worse than a 3-minute build that people trust.

---

## Project Structure Conventions

Consistency across projects reduces cognitive overhead and onboarding time.

**Monorepo vs. multi-repo:** For freelance/agency work with multiple client sites, a per-client repo is simpler. For a SaaS product, a monorepo with Turborepo or Nx makes sense once you have shared packages. Don't adopt monorepo tooling until you have something to share.

**Standard directory layout (example for a Next.js/React project):**

```
project-root/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level components
│   ├── lib/            # Utility functions, API clients
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles, theme config
│   └── types/          # TypeScript type definitions
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── public/             # Static assets
├── scripts/            # Build/deploy/seed scripts
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

**For Python projects (Django/Flask/FastAPI):**

```
project-root/
├── app/
│   ├── api/            # Route handlers
│   ├── models/         # Database models
│   ├── services/       # Business logic
│   ├── schemas/        # Pydantic models / serializers
│   └── utils/
├── tests/
├── migrations/
├── scripts/
├── requirements.txt    # or pyproject.toml
├── .env.example
└── README.md
```

---

## Linting and Formatting

These are not optional. They prevent entire categories of bugs and eliminate style debates.

**JavaScript/TypeScript:** ESLint + Prettier. Configure once, enforce via pre-commit hooks and CI. Use `eslint-config-next` for Next.js projects, `@typescript-eslint` for TS.

**Python:** Ruff (replaces flake8, isort, and most of black's functionality). Fast, opinionated, and consolidates tooling. Alternatively: Black + isort + flake8.

**Pre-commit hooks:** Use `husky` + `lint-staged` (JS) or `pre-commit` framework (Python) to run linters on staged files before every commit. If it's not automated, it won't happen.

**Editor config:** Ship an `.editorconfig` and workspace settings (`.vscode/settings.json`) with every project. Tab width, line endings, and trailing whitespace should not vary by developer.

---

## Testing Strategy

### What to Test

Not everything needs a test. Focus testing effort where it delivers the most risk reduction per hour invested.

**Always test:**
- Authentication and authorization logic
- Payment processing and financial calculations
- Data validation and transformation
- API endpoints that accept external input
- Business logic with branching conditions

**Usually test:**
- Utility functions with non-obvious behavior
- Complex UI components with state management
- Database queries with joins or aggregations

**Rarely worth testing:**
- Pure presentational components with no logic
- Direct wrappers around third-party libraries
- Configuration files

### Test Types

**Unit tests** — Fast, isolated, no external dependencies. Test a function or module in isolation. Mock external calls. These form the base of your pyramid.
- JS: Vitest or Jest
- Python: pytest

**Integration tests** — Verify that components work together. Hit the actual database (use a test database). Call your API endpoints. These catch the bugs that unit tests miss.
- JS: Supertest for API testing, Testing Library for component integration
- Python: pytest with test client (FastAPI's TestClient, Django's test Client)

**End-to-end tests** — Simulate real user behavior in a browser. Expensive to write and maintain. Use sparingly for critical user flows.
- Playwright (recommended) or Cypress
- Test: signup, login, checkout, core feature happy path
- Don't test: every form validation message, every edge case

### Test Coverage

**Target 70-80% on business logic.** 100% coverage is a vanity metric. Untested code in critical paths is the actual risk. Use coverage reports to find blind spots, not as a score to maximize.

### Running Tests

```bash
# JavaScript
npm test              # Unit + integration
npm run test:e2e      # E2E (requires running app)
npm run test:ci       # All tests, CI mode (no watch, coverage report)

# Python
pytest                # All tests
pytest tests/unit     # Unit only
pytest --cov=app      # With coverage
```

---

## Build Process

### JavaScript/TypeScript

**For client sites (Next.js, Astro, etc.):**
```bash
npm ci                    # Clean install from lock file
npm run lint              # ESLint
npm run type-check        # tsc --noEmit (if TypeScript)
npm test                  # Unit + integration tests
npm run build             # Production build
```

**Key points:**
- `npm ci` (not `npm install`) in CI — uses lock file exactly, fails on mismatch
- Type checking is a separate step from compilation in many setups — run it explicitly
- Build should produce a self-contained artifact (static files, Docker image, or serverless bundle)

### Python

```bash
pip install -r requirements.txt   # Or: poetry install
ruff check .                       # Lint
ruff format --check .              # Format check
mypy app/                          # Type checking (if using type hints)
pytest                             # Tests
```

---

## Database Migrations

**Migrations are code.** They belong in version control. They run as part of deployment, not as a manual step.

**Rules:**
- Never edit a migration that's been applied to staging or production — create a new one
- Test migrations against a copy of production data before deploying (or at minimum, against staging)
- Every migration should be reversible where possible (include `down` / `reverse` methods)
- Keep migrations small and focused — one schema change per migration

**Tools:** Alembic (SQLAlchemy), Django migrations, Prisma Migrate, Drizzle Kit, Knex migrations.

---

## Environment Parity

Development, staging, and production should be as similar as possible.

**Use Docker for local development** if your production environment is containerized. `docker-compose.yml` with your app, database, and any required services.

**Database parity:** If production runs PostgreSQL, don't develop against SQLite. The query behavior differences will burn you. Use Docker to run Postgres locally.

**Environment variables:** Same variable names across all environments. Different values. Document every required variable in `.env.example`.

---

## Checklist (Per Project)

- [ ] Lock file committed and used in CI (`npm ci` or equivalent)
- [ ] Linter configured and enforced (ESLint/Ruff)
- [ ] Formatter configured and enforced (Prettier/Ruff)
- [ ] Pre-commit hooks installed (husky/pre-commit)
- [ ] Unit tests for auth, payments, and business logic
- [ ] Integration tests for API endpoints
- [ ] E2E tests for critical user flows (signup, login, core feature)
- [ ] Type checking enabled and passing (TypeScript/mypy)
- [ ] Build produces a deployable artifact
- [ ] Migrations versioned and reversible
- [ ] `.env.example` documents all required variables
- [ ] Local dev environment matches production stack
