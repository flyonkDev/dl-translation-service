```md
# Backend – NestJS API

NestJS backend for the driver license translation service.

## What it does (MVP)

- Accepts **image upload** of a driver license via `multipart/form-data`
- Uses **Multer** to store uploads on disk
- Runs a basic **OCR pipeline** (Tesseract) on the image
- Applies simple **heuristics** on the OCR text:
  - checks that this looks like a driver license
  - tries to detect name / number / dates
- Returns a typed DTO with:
  - `status: "passed" | "review" | "failed"`
  - `checks` object with flags
  - `extracted` text fields
  - user-friendly `hints` for re-upload

Later we’ll plug in:

- Prisma + SQLite (MVP) → Postgres
- License/application persistence
- PDF generator (HTML → PDF)
- Payment webhooks

## Dev

```bash
cd apps/backend
npm install
npm run start:dev
# http://localhost:3001 