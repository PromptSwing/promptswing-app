# PROMPTSWING_REFERENCE.md
Status: CANON — LOCKED
Scope: PromptSwing (Connect Suites 1–3) + Oracle constraints (Suite 4)
Last updated: 2026-01-25

Purpose
Single source of truth for repos, production infra, domains/ports, workflow, and locked doctrines.

---

## Repositories (Canonical Split)

1) promptswing-app
- Public-facing app and tools for www.promptswing.com (non-Shopify)
- Next.js UI

2) promptswing-api
- Authoritative PromptSwing API (server-side, no UI)
- Must NOT import or execute Oracle runtime code

3) promptswing-connect
- Dedicated Shopify embedded app (Shopify-specific logic + embedded UI)

GitHub org: PromptSwing
Public profile repo: PromptSwing (README only)

---

## Production Infrastructure

Hosting
- Current: VPS (legacy Hostinger)
- Target: Hetzner VPS (production target)

Edge / Runtime
- Nginx (TLS termination + vhosts) → PM2 → Node services

Production domains (locked)
- www.promptswing.com
  - Main marketing site (WordPress + Elementor)
- app.promptswing.com
  - Public app UI (Next.js) — port 3000
- api.promptswing.com
  - Backend API — port 3010
- connect.promptswing.com
  - Shopify embedded UI — port 3012

---

## Execution Doctrine (Applied SaaS)

PromptSwing is an applied SaaS (production-first), not a theoretical system.

Agents are allowed and encouraged ONLY under strict boundaries:
- Execution-bound agents: permitted ONLY in
  - Suite 1: Abandoned Cart
  - Suite 2: Customer Reviews
  Code owns consent, limits, timing, retries, final action.
  Hard limit: exactly one polite, non-incentivized message per lifecycle event.
- Analysis-only agents: permitted in Commerce Intelligence and Oracle
  Zero execution authority.

Ethics/manners are structural (enforced by code), not advisory:
- Consent-first
- No manipulation, urgency pressure, incentives, or misrepresentation
- Explicit prohibitions + auditability

---

## Oracle (Suite 4) — Hard Constraints

Oracle is explain-only, belief-bound, and non-executing.

Isolation requirements (locked)
- Oracle must not interrupt core tools
- Separate service/process (ideally separate port + vhost)
- Separate DB/schema + credentials
- No background ingestion unless ORACLE_ENABLED=true
- Core API must never import/execute Oracle code at runtime
  Communication only via explicit boundaries (HTTP or queue)

Key toggle
- ORACLE_ENABLED=false by default (Oracle inert unless explicitly enabled)

---

## Security Baseline (Locked)

- Separate HTTPS vhosts and certificates for:
  - api.promptswing.com (3010)
  - connect.promptswing.com (3012)
  - app.promptswing.com (3000)
- Shopify embedded auth bootstrap routes (/auth, /verify-session):
  - Isolated from internal API auth
  - Rely on Shopify session tokens only
- Internal-only routes (e.g. /api/headlines):
  - Protected by INTERNAL_API_TOKEN
  - No permissive Shopify-origin/bearer bypasses
- PM2 backend process name stabilized as: api

---

## Workstyle (Locked)

- Cengiz does not want to learn coding.
- All coding, refactors, and debugging are delegated to GPT/Codex.
- Preferred access: SSH (Codespaces optional)
- Production rule: do not break working systems; prefer additive, flag-gated changes.
- Strict separation: Public App ↔ API ↔ Shopify Embedded App

---

## Quick Commands (Operational)

PM2
- List: `pm2 ls`
- Logs: `pm2 logs --lines 200`
- Restart API: `pm2 restart api --update-env`
- Restart public UI (name varies): `pm2 restart <ui_process> --update-env`
- Restart connect (name varies): `pm2 restart <connect_process> --update-env`

Next.js build (public UI)
- Rebuild clean: `rm -rf .next && npm run build`

Nginx
- Test config: `nginx -t`
- Reload: `systemctl reload nginx`

Where am I?
- `pwd`
- `ls -la`
