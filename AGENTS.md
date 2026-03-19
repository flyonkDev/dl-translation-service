Project

IDP Companion (formerly Driver License Translation PDF)

Commercial web service that generates a driver license companion document in PDF format.
This is not an official government International Driving Permit (IDP).
The product generates a companion IDP-style document to help drivers present their license abroad.



Product Overview

Flow:

Landing (Nuxt SEO site)
→ user selects country + plan
→ Start Application
→ redirect to SPA

SPA (Application form)

Step 1
Driver details
Upload license
Upload headshot
Signature

License image is automatically verified using OCR.

Step 2
Payment

Step 3
Download generated PDF companion document.



Tech Stack

Frontend SPA

Vue 3
TypeScript
Vite
Pinia
vee-validate
zod
Tailwind v4

Feature-Sliced Design

Landing
Nuxt (SSR for SEO)
Tailwind v4
shared UI-kit components

Backend

NestJS
TypeScript
Multer (file upload)
Tesseract.js (OCR)
Prisma ORM
PostgreSQL

Dev Tools

npm workspaces monorepo
DBeaver (database management)

UI-kit for SPA & Landing in packages/ui-kit - have colors variables and etc



Monorepo Structure

apps/

backend/
NestJS API

frontend/
Vue SPA application

landing/
Nuxt marketing site

packages/
UI kit and shared utilities



Key Backend Modules

verify/
Handles OCR verification of driver license.

Endpoint:
POST /api/verify/license

Receives license image and returns:

status:
passed/review/failed

Also returns:
checks/extracted data/hints

Creates temporary verification snapshot with TTL.


countries/
GET /api/countries
Countries list

pricing/
GET /api/pricing
Returns pricing for plans (1 / 2 / 3 years).

applications/
Handles application submission.
Endpoint:
POST /api/applications
multipart/form-data

:applicationId/pdf
generate and download IDP Companion Document



Frontend Architecture

Feature-Sliced Design (FSD)

Layers:

app
pages
widgets
features
entities
shared

Agents must respect FSD boundaries and suggest refactors and improves if some modules not in FSD now

Do not import from higher layers.



Important Product Rules

Verify status:

passed → allow application
review → allow but show warning
failed → block submission

Verify is meant to be a quick quality signal, not strict validation.



Current State

Working:

License verification
Application submission
Countries endpoint
Pricing endpoint

Database:

PostgreSQL configured
Prisma integrated

Applications stored in database.



Planned Features

File storage strategy

We need to implement:

file storage directory
file cleanup
removal of expired uploads

Later

Paddle payments (right now waiting paddle verification approvement)

Flow:

create checkout session
webhook confirms payment
enable PDF download

i18n
Need to add i18n to full project with at least 4 languages (English, Russian, Espanol, German)

Necessary extension:
Verify modules should be extended for working with much many driver licenses from different countries
Form validation extension

Headshot validation
We should implement a basic face matching feature.
When a user uploads:
- a driver license image
- a headshot photo

the system should detect the face on both images and verify that they likely belong to the same person.
This is meant to prevent users from uploading random images as a headshot.
The check does not need to be strict biometric verification — a lightweight similarity check is sufficient.
If the similarity score is too low the system should mark the application as "review".



Coding Rules

TypeScript strict mode.
Avoid any.
Prefer explicit types.
Use DTO validation in NestJS.
Use Zod schemas for frontend validation.


Styling (Tailwind + BEM-like)

Use ~70% of Tailwind's power. Engineering approach:
- Give main widgets and wrappers BEM-like class names (e.g. legal-page, legal-section__heading, header-inner)
- Do not stuff everything into a solid Tailwind-only class string
- Mix both: semantic BEM-like blocks + Tailwind utilities for typography, spacing, colors
- Use layout classes from ui-kit when available: .container (max-width 1280px, responsive padding), .section
- Keep custom scoped CSS minimal; prefer Tailwind utilities for one-off styles



AI Agent Rules

When modifying code:

Do not break Feature-Sliced architecture.
Do not move files across layers without explanation.
Prefer minimal changes.
Avoid introducing new dependencies unless necessary.
Always keep TypeScript types correct.
Preserve existing API contracts.
If unsure about architecture — ask the user.



MVP launch target:

~1 month.

Focus on:

stable application flow
working PDF generation
basic payment integration
simple but reliable architecture
Avoid overengineering.



Author

Project created by a solo developer.Petr Shchepetin @flyonk
Frontend engineer with 6+ years experience.


The codebase prioritizes:

clean architecture
maintainability
type safety