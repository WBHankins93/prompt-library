# CI/CD Pipeline

> Automating the path from commit to production.
> Focused on GitHub Actions since it's the most common choice for small teams.

---

## What CI/CD Actually Does

**Continuous Integration (CI):** Every push triggers automated checks — lint, type-check, test, build. If any step fails, the commit is flagged before it reaches `main`. CI catches bugs early and enforces standards without relying on developer discipline.

**Continuous Deployment (CD):** When code merges to `main` (or a release branch), it's automatically deployed to staging or production. No manual steps. The pipeline is the deploy process.

The goal is fast, reliable feedback. A developer should know within 5 minutes whether their change is safe to merge.

---

## GitHub Actions: Standard Workflows

### CI Workflow (JavaScript/TypeScript)

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true  # Cancel stale runs on new pushes

jobs:
  lint-and-typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci

      - run: npm run lint
      - run: npm run type-check  # tsc --noEmit

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm test -- --coverage

      - name: Upload coverage
        uses: actions/upload-artifact@v4
        with:
          name: coverage
          path: coverage/

  build:
    runs-on: ubuntu-latest
    needs: [lint-and-typecheck, test]  # Only build if checks pass
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: build
          path: dist/  # or .next/ or build/
```

### CI Workflow (Python)

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: pip

      - run: pip install ruff
      - run: ruff check .
      - run: ruff format --check .

  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: test
          POSTGRES_PASSWORD: test
          POSTGRES_DB: testdb
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: pip

      - run: pip install -r requirements.txt
      - run: pip install pytest pytest-cov

      - name: Run tests
        env:
          DATABASE_URL: postgresql://test:test@localhost:5432/testdb
        run: pytest --cov=app --cov-report=xml

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: pip

      - run: pip install pip-audit
      - run: pip-audit -r requirements.txt
```

---

## CD: Deployment Automation

### Auto-Deploy to Vercel/Netlify

If you're using Vercel or Netlify, CD is built in — push to `main` triggers a production deploy. No extra workflow needed. Configure branch-based deploys in the platform dashboard.

### Deploy to Railway/Render/Fly.io

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    needs: [ci]  # Reference your CI workflow or use workflow_call
    environment: production  # GitHub environment with protection rules

    steps:
      - uses: actions/checkout@v4

      # Example: Railway
      - name: Deploy to Railway
        uses: bervProject/railway-deploy@main
        with:
          railway_token: ${{ secrets.RAILWAY_TOKEN }}
          service: my-app

      # Example: Fly.io
      # - uses: superfly/flyctl-actions/setup-flyctl@master
      # - run: flyctl deploy --remote-only
      #   env:
      #     FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

### Docker Build and Push

```yaml
# .github/workflows/docker.yml
name: Build and Push Docker Image

on:
  push:
    branches: [main]
    tags: ["v*"]

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: |
            ghcr.io/${{ github.repository }}:latest
            ghcr.io/${{ github.repository }}:${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

---

## Pipeline Design Decisions

### Parallelism

Run independent jobs in parallel. Lint and test don't depend on each other — run them simultaneously. Build depends on both passing — use `needs:` to enforce ordering.

```
push → [lint] ──┐
     → [test] ──┼→ [build] → [deploy]
     → [audit] ─┘
```

This cuts total pipeline time significantly. A 10-minute sequential pipeline becomes 4 minutes when lint, test, and audit run in parallel.

### Caching

**Node modules:** `actions/setup-node` with `cache: npm` caches `node_modules` based on `package-lock.json`. Saves 30-60 seconds per run.

**Python packages:** `actions/setup-python` with `cache: pip` does the same for pip.

**Docker layers:** Use `cache-from: type=gha` in `docker/build-push-action` to cache Docker build layers in GitHub's cache.

**Build artifacts:** If your build output is needed by multiple jobs, use `actions/upload-artifact` and `actions/download-artifact` instead of rebuilding.

### Secrets Management

- Store secrets in GitHub repository settings → Secrets and variables → Actions
- Reference as `${{ secrets.SECRET_NAME }}`
- Use GitHub Environments for per-environment secrets (staging vs production)
- Enable environment protection rules for production (require manual approval, restrict to `main` branch)
- Never print secrets in logs — GitHub redacts known secrets, but don't rely on it exclusively

### Branch Protection Rules

Configure in GitHub repository settings:

- Require status checks to pass before merging (select your CI jobs)
- Require pull request reviews (at least 1 for solo developers, 2 for teams)
- Require branches to be up to date before merging
- Do not allow bypassing the above settings (even for admins)

---

## Pipeline for Client Sites

Client sites have a simpler lifecycle but still benefit from CI/CD.

```yaml
# .github/workflows/client-site.yml
name: Client Site CI/CD

on:
  push:
    branches: [main, staging]
  pull_request:
    branches: [main]

jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run lint
      - run: npm run build

      # Lighthouse CI for performance/accessibility
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000/
            http://localhost:3000/about
          budgetPath: .github/lighthouse-budget.json
          uploadArtifacts: true
```

### Lighthouse Budget File

```json
// .github/lighthouse-budget.json
[
  {
    "path": "/*",
    "timings": [
      { "metric": "first-contentful-paint", "budget": 2000 },
      { "metric": "interactive", "budget": 3500 }
    ],
    "resourceSizes": [
      { "resourceType": "total", "budget": 500 }
    ]
  }
]
```

---

## Monitoring Pipeline Health

A pipeline that's always red is worse than no pipeline — people learn to ignore it.

**Track these metrics:**
- **Pass rate:** Should be >90%. If it's lower, your tests are flaky or your linter is misconfigured
- **Duration:** CI should complete in under 5 minutes for most projects. Over 10 minutes and developers start skipping it
- **Queue time:** If jobs wait more than a minute to start, consider self-hosted runners or larger GitHub plan

**When the pipeline is flaky:**
- Identify the flaky test or step (GitHub Actions shows per-step timing and failure history)
- Fix or quarantine it immediately — a flaky pipeline erodes trust fast
- Never "just rerun" a failed pipeline without investigating why it failed

---

## Checklist

- [ ] CI workflow triggers on push and PR to `main`
- [ ] Lint, type-check, and test run in parallel
- [ ] Build step depends on checks passing
- [ ] Dependency caching configured (npm/pip)
- [ ] Secrets stored in GitHub Secrets (not in code)
- [ ] Branch protection rules enabled
- [ ] CD auto-deploys on merge to `main`
- [ ] Production environment has protection rules
- [ ] Pipeline completes in under 5 minutes
- [ ] Lighthouse CI for client sites (performance budgets)
