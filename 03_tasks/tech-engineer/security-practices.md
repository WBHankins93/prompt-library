# Security Practices

> Baseline security posture for web development — freelance, agency, or SaaS.
> These are non-negotiable minimums, not aspirational goals.

---

## Dependency Management

Every project ships with third-party code. That code is your liability.

**Lock files are mandatory.** `package-lock.json`, `poetry.lock`, `Pipfile.lock` — whatever your stack uses, commit it. Reproducible builds are a security control, not a convenience feature.

**Audit regularly.** Run `npm audit`, `pip-audit`, or `safety check` as part of your CI pipeline, not as an afterthought. Flag critical/high vulnerabilities as build-breakers. Medium and below get triaged weekly.

**Pin versions in production.** Semver ranges (`^1.2.3`) are fine in development. Production deployments should resolve to exact versions via lock files. A surprise minor bump has broken more sites than most exploits.

**Automate updates.** Dependabot or Renovate, configured to open PRs against a staging branch. Review diffs — don't auto-merge. Supply chain attacks hide in patch bumps.

---

## Authentication and Authorization

**Never roll your own auth.** Use battle-tested libraries or managed services: NextAuth, Auth0, Firebase Auth, Supabase Auth, Django's auth framework. The CVE you avoid is worth the vendor cost.

**Password storage:** bcrypt, scrypt, or Argon2id. Never MD5, SHA-1, or SHA-256 without a salt and work factor. If you're hashing passwords with `hashlib` and no library wrapper, you're doing it wrong.

**Session management:**
- HTTP-only, Secure, SameSite=Strict cookies for session tokens
- Rotate session IDs on privilege escalation (login, role change)
- Set reasonable expiration — 24h for standard apps, shorter for sensitive ops
- Invalidate server-side on logout (don't just delete the cookie)

**Authorization checks happen server-side.** Every protected route, every API endpoint. Client-side guards are UX, not security. Middleware or decorators that enforce role checks before the handler runs.

**API keys and secrets:**
- Never in source code, never in client bundles
- Environment variables loaded from `.env` (excluded from git via `.gitignore`)
- For production: use a secrets manager (AWS Secrets Manager, Vault, Doppler)
- Rotate on any suspected compromise — don't wait to confirm

---

## Input Validation and Injection Prevention

**Validate on the server.** Client-side validation is for UX. Server-side validation is for security. Both are required.

**SQL injection:** Use parameterized queries or an ORM. Never interpolate user input into SQL strings. This includes search features, filters, and admin panels — not just login forms.

**XSS prevention:**
- Escape all user-generated content on render (React does this by default; raw HTML insertion opts you out)
- Set `Content-Security-Policy` headers — at minimum, restrict `script-src` to `'self'`
- Sanitize any HTML you intentionally render from user input (DOMPurify for client-side, bleach for Python)

**CSRF protection:** Use anti-CSRF tokens for any state-changing request. Most frameworks provide this out of the box — make sure it's actually enabled. SameSite cookies reduce but don't eliminate the risk.

**File uploads:** Validate MIME type server-side (don't trust the `Content-Type` header). Restrict file size. Store uploads outside the webroot or in object storage (S3). Never execute uploaded files.

---

## HTTPS and Transport Security

**HTTPS everywhere.** No exceptions. Free via Let's Encrypt / Certbot or your hosting provider's built-in SSL.

**HSTS headers:** `Strict-Transport-Security: max-age=31536000; includeSubDomains`. Once you're confident, add `preload`.

**Redirect HTTP to HTTPS** at the infrastructure level (Nginx, Cloudflare, load balancer). Don't rely on application-level redirects alone.

**API communication:** All internal service-to-service calls over TLS. No plaintext HTTP between your backend and your database proxy, cache, or third-party APIs.

---

## Environment and Configuration Security

**Separate environments completely.** Dev, staging, and production should have different credentials, different databases, different API keys. Sharing any of these across environments is a breach waiting to happen.

**`.env` files:**
- Never committed to version control
- `.env.example` with placeholder values is committed (documents required vars)
- Production values injected via CI/CD secrets or a secrets manager

**Principle of least privilege:** Database users for your app get only the permissions they need. Your web app should not connect as a database superuser. Your deploy pipeline should not have admin access to your cloud account.

**Error handling:** Never expose stack traces, database errors, or internal paths to end users in production. Log them server-side. Return generic error messages to the client.

---

## Client Site Security (When Building for Others)

When you're building sites for clients, you're responsible for their security posture at delivery.

**CMS hardening (WordPress, etc.):**
- Change default admin paths
- Limit login attempts (Wordfence, Fail2Ban)
- Remove unused themes and plugins
- Keep core, themes, and plugins updated — or document that the client is responsible for this

**Third-party scripts:** Every analytics tag, chat widget, and tracking pixel is an attack surface. Audit what's loaded. Use `integrity` attributes on CDN scripts where possible. Subresource Integrity (SRI) catches tampered scripts.

**Backup strategy:** Automated daily backups with at least 30 days retention. Test restores quarterly. The backup that's never been tested is not a backup.

**Handoff documentation:** When you deliver a site, include a security section: what's configured, what the client is responsible for, and what happens if they install random plugins or share admin credentials.

---

## Incident Response (Minimum Viable)

You don't need a 40-page incident response plan. You need answers to these questions before something goes wrong:

1. **How do I know if something is compromised?** — Monitoring, alerts, log review cadence
2. **What do I shut down first?** — Revoke API keys, rotate credentials, disable affected endpoints
3. **Who do I notify?** — Client, affected users, relevant authorities (if PII is involved)
4. **How do I recover?** — Restore from backup, redeploy from known-good state
5. **What do I fix to prevent recurrence?** — Root cause analysis, not just symptom patching

---

## Checklist (Per Project)

- [ ] Dependencies locked and audited
- [ ] Auth using a vetted library/service
- [ ] Passwords hashed with bcrypt/scrypt/Argon2id
- [ ] Session tokens in HTTP-only Secure cookies
- [ ] Server-side input validation on all endpoints
- [ ] Parameterized queries (no string interpolation in SQL)
- [ ] CSP headers configured
- [ ] HTTPS enforced with HSTS
- [ ] Secrets in env vars or secrets manager, not in code
- [ ] `.env` in `.gitignore`
- [ ] Error messages don't leak internals
- [ ] File uploads validated and stored safely
- [ ] Backups automated and tested
- [ ] Security handoff documentation for client
