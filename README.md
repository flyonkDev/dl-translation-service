# Driver License Translation Service

Monorepo for a driver license translation service (MVP).

- **apps/backend** – NestJS API (file upload, OCR, verification, later DB + PDF)
- **apps/frontend** – Vue 3 SPA with application flow (multi-step form, dashboard in the future)
- **apps/landing** – Nuxt 3 marketing landing (SEO-friendly)

## Getting started

### 1. Install dependencies

```bash
# from repo root
npm install
# or pnpm install


# backend (Nest)
cd apps/backend
npm run start:dev

# frontend (Vue SPA)
cd ../frontend
npm run dev

# landing (Nuxt)
cd ../landing
npm run dev