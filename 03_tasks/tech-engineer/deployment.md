# Deployment

> Getting code from your machine to production reliably.
> Covers static sites, server-rendered apps, and API backends.

---

## Deployment Principles

A deployment should be boring. If it requires heroics, manual steps, or crossing your fingers, the process is broken.

**Every deployment should be:** reversible (you can roll back in minutes), reproducible (same inputs produce same outputs), observable (you know immediately if something is wrong), and automated (humans approve, machines execute).

---

## Deployment Models by Project Type

### Static Sites (Client Marketing Sites, Landing Pages)

**Best platforms:** Vercel, Netlify, Cloudflare Pages

These are the default choice for client websites built with Next.js, Astro, Hugo, or any static site generator. You push to a branch, the platform builds and deploys. Zero server management.

**Why these win for agency/freelance work:**
- Free tier covers most client sites
- Automatic HTTPS, CDN, and preview deployments
- Git-based deploys — merge to `main` and it's live
- Rollback is clicking a button in the dashboard
- Client can be given limited dashboard access

**Tradeoffs:** You're locked into the platform's build system and edge network. Fine for marketing sites. Potentially limiting for complex apps.

### Server-Rendered Apps (Next.js SSR, Django, FastAPI)

**Option A: Platform-as-a-Service (PaaS)**
- Vercel (for Next.js specifically — best-in-class)
- Railway, Render, Fly.io (for Django, FastAPI, Node)
- Heroku (still works, more expensive than alternatives)

**When to use:** You want to ship fast, don't want to manage infrastructure, and the cost is acceptable. This is the right choice for most projects until you hit a specific scaling or cost constraint that forces you off.

**Option B: Containerized (Docker + cloud hosting)**
- AWS ECS/Fargate, Google Cloud Run, Azure Container Apps
- DigitalOcean App Platform

**When to use:** You need more control over the runtime, have specific scaling requirements, or are already invested in a cloud provider. Adds operational complexity — only choose this if PaaS doesn't work for you.

**Option C: VPS (Virtual Private Server)**
- DigitalOcean Droplets, Linode, Hetzner
- You manage everything: OS, runtime, web server, SSL, firewall

**When to use:** Budget is extremely tight, or you need full control. The cheapest option in dollars, the most expensive in time. Don't use this for client sites unless you're prepared to be their sysadmin indefinitely.

### API Backends

**Serverless functions:** AWS Lambda, Vercel Functions, Cloudflare Workers. Good for low-to-medium traffic APIs, pay-per-invocation. Cold starts are the main tradeoff.

**Containerized services:** Cloud Run or ECS for always-on APIs with predictable traffic. Better latency than serverless, higher base cost.

**Traditional deployment:** Django/FastAPI on a VPS with Gunicorn + Nginx. Works fine, but you own the uptime.

---

## Deployment Workflow

Regardless of platform, the flow should look like this:

```
Code → Push → CI (lint, test, build) → Staging → Approval → Production
```

### Step by Step

1. **Developer pushes to a feature branch** — triggers CI pipeline
2. **CI runs:** lint, type-check, test, build. All must pass.
3. **Preview deployment** (automatic on Vercel/Netlify) — shareable URL for review
4. **PR review and merge to `main`** — triggers staging deployment
5. **Staging verification** — smoke test critical paths (manual or automated)
6. **Production deployment** — automatic on merge to `main` (or manual trigger for higher-risk changes)
7. **Post-deploy verification** — check health endpoints, error rates, key user flows

### Branch Strategy

**For most projects:** trunk-based development. Short-lived feature branches, merge to `main` frequently. `main` is always deployable.

**For client sites with approval gates:** `main` → staging, `production` branch → production. Client approves on staging, you merge `main` into `production` to deploy.

---

## Docker Deployment (When You Need It)

### Dockerfile Template (Node.js)

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Don't run as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 appuser

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

USER appuser
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

### Dockerfile Template (Python/FastAPI)

```dockerfile
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.12-slim
WORKDIR /app

RUN useradd --create-home appuser
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY --from=builder /usr/local/bin /usr/local/bin
COPY . .

USER appuser
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Key Docker Practices

- **Multi-stage builds** — keep production images small (no build tools, no dev dependencies)
- **Don't run as root** — create a non-root user in the Dockerfile
- **`.dockerignore`** — exclude `node_modules`, `.git`, `.env`, test files
- **Pin base images** — use specific versions (`node:20.11-alpine`), not `latest`
- **Health checks** — `HEALTHCHECK CMD curl -f http://localhost:3000/health || exit 1`

---

## Environment Management

### Required Environments

**Development** — local machine, Docker Compose, or dev container. Uses test/sandbox API keys.

**Staging** — mirrors production as closely as possible. Same infrastructure, same config structure, different data. This is where you catch deployment-specific bugs.

**Production** — the real thing. Least-access principle. No SSH unless you're debugging an active incident.

### Environment Variables

```bash
# .env.example — committed to repo
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
API_KEY=your-api-key-here
SMTP_HOST=smtp.example.com
NODE_ENV=development

# .env — NOT committed (in .gitignore)
DATABASE_URL=postgresql://realuser:realpass@db.host:5432/proddb
API_KEY=sk-live-abc123
```

**In CI/CD:** Set environment variables as secrets in your CI platform (GitHub Actions secrets, Vercel environment variables, Railway variables). Never hardcode them in config files.

---

## Domain and DNS

### For Client Sites

1. **Client owns the domain** — always. They register it, they control it. You get delegated access for DNS configuration.
2. **DNS configuration:** Point the domain to your hosting provider (CNAME for subdomains, A record or ALIAS for apex domains). Vercel and Netlify provide the records you need.
3. **SSL is automatic** on modern platforms. If you're manually provisioning certs, use Certbot with auto-renewal.
4. **Document the DNS setup** in the project handoff. The client needs to know where their site is pointed and how to change it if they leave you.

### DNS Propagation

After changing DNS records, propagation takes 1-48 hours (usually under an hour for low-TTL records). Set TTL to 300 (5 minutes) before a migration, wait for the old TTL to expire, then make the switch.

---

## Rollback Strategy

Every deployment should have a rollback plan decided before you deploy.

**Platform deployments (Vercel, Netlify, Railway):** One-click rollback to previous deployment in the dashboard. This is instantaneous.

**Container deployments:** Keep the previous image tagged and available. Rollback = redeploy the previous image tag.

**Database migrations:** This is the hard part. If a deployment includes a database migration, rollback means either running the reverse migration or accepting that the schema change stays and rolling back only the application code. This is why migrations should be backward-compatible whenever possible.

**Backward-compatible migrations:**
- Adding a column is safe (old code ignores it)
- Removing a column is NOT safe (deploy new code first, then remove column in a separate migration)
- Renaming a column = add new column, migrate data, deploy code using new column, remove old column

---

## Checklist (Per Deployment)

- [ ] All CI checks passing (lint, test, build)
- [ ] Preview/staging deployment reviewed
- [ ] Environment variables set for target environment
- [ ] Database migrations tested against staging data
- [ ] Rollback plan documented (what to do if this breaks)
- [ ] DNS configured and verified (for new sites)
- [ ] HTTPS confirmed working
- [ ] Health check endpoint responding
- [ ] Error monitoring active (see monitoring-upkeep.md)
- [ ] Client notified (if applicable)
