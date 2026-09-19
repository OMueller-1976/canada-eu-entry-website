# Canada EU Entry (by OneTitel) — Website

A premium, conversion-focused, SEO-ready marketing website for **Canada EU Entry**, a
Canada–EU market-entry agency and consultancy operated by **OneTitel**, based in Germany.

Domain: `canadaeuentry.com` (registered).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- Static content lives in `src/content/*.ts` — no CMS or database required
- Deployable to Vercel, Netlify, or any Node.js host

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # ESLint
npm run typecheck  # TypeScript, no emit
```

## Project structure

```
src/
  app/                    Routes (App Router). One folder per page.
    services/[slug]/      Dynamic individual service pages
    industries/[slug]/    Dynamic individual industry pages
    market-intelligence/[slug]/  Reusable article template (no articles published yet)
    sitemap.ts             Auto-generated sitemap.xml
    robots.ts              Auto-generated robots.txt
    layout.tsx              Root layout: fonts, header, footer, Organization/WebSite JSON-LD
  components/              Reusable UI: Header, Footer, ServiceCard, IndustryCard, Faq,
                            Breadcrumbs, CtaBanner, JsonLd, ChapterBlocks, etc.
  content/                  Editable content data
    services.ts             The 5 service packages (pricing, scope, terms)
    industries.ts            The 7 industry pages
    faq.ts                    Site-wide FAQ (also used for FAQPage structured data)
    first-steps.ts            The 14-chapter First Steps guide content
  lib/site.ts                Brand name, domain, nav links, CTA labels — edit here first
```

## Editing content

Almost everything is data-driven, so most changes do not require touching component code:

- **Brand name, domain, tagline, nav links, CTA labels** → `src/lib/site.ts`
- **Service pricing, scope, payment terms** → `src/content/services.ts`
- **Industry pages** → `src/content/industries.ts`
- **FAQ** (shown on the homepage, `/faq`, and used for FAQ structured data) → `src/content/faq.ts`
- **First Steps guide chapters** → `src/content/first-steps.ts` (each chapter is a list of
  typed "blocks": paragraphs, headings, bullet lists, or callout notes)
- **Homepage sections** → `src/app/page.tsx`
- **Legal Notice / Privacy Policy placeholders** → `src/app/legal-notice/page.tsx` and
  `src/app/privacy-policy/page.tsx`

Adding a new service or industry is just adding a new object to the relevant array in
`src/content/` — the dynamic route pages, sitemap, and cards pick it up automatically.

## Design system

- Colors are defined in `tailwind.config.ts`: `navy` (primary text/dark UI), `accent`
  (Canadian red — the dominant accent color), `eublue` (EU blue — secondary accent),
  `graphite` (body text), `offwhite`/white (background).
- Typography: Inter (sans, `--font-sans`) for UI/body text, Source Serif 4 (`--font-serif`) for
  headlines — loaded via `next/font/google` in `src/app/layout.tsx`.
- `prefers-reduced-motion` is respected globally in `src/app/globals.css`.
- Focus states are visible by default (`:focus-visible` outline in `globals.css`).

## SEO

- Per-page `metadata` exports (title, description, canonical URL) on every route.
- Open Graph and Twitter card defaults in `src/app/layout.tsx`.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
  automatically from the route list and content arrays.
- Structured data (JSON-LD) via the `<JsonLd>` component: Organization and WebSite (global),
  Service (per service page), Article (First Steps guide), FAQPage (homepage and `/faq`), and
  BreadcrumbList (every page with breadcrumbs).
- No aggregate rating / review schema is used anywhere, per the brief.

## Before launch — required follow-up

Two companion documents list what still needs attention:

- **`CLAIMS-TO-VERIFY.md`** — every factual or statistical claim in the copy that needs a cited,
  authoritative source before publication (trade statistics, CETA specifics, GmbH formation
  rules, etc.).
- **`MISSING-INFORMATION.md`** — business information only the owner can provide (legal name,
  address, VAT ID, contact details, production email, analytics/consent tooling, contact-form
  handler, brand assets).

Do not publish the Legal Notice or Privacy Policy pages as-is — both are explicitly marked as
drafts requiring review by a qualified German legal/data-protection professional.

## Accessibility & performance notes

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`), a skip-to-content link, and
  visible focus states are implemented globally.
- Images are not yet part of the content set (the brief asked to avoid stock-photo clichés and
  stereotypical imagery); when adding images, use `next/image` and provide meaningful `alt` text.
- Fonts are loaded via `next/font` for automatic optimization and no layout shift.
- The mobile navigation menu is keyboard- and screen-reader-accessible (`aria-expanded`,
  `aria-controls`).

## What was intentionally left out (per the brief)

- No fabricated statistics, testimonials, clients, case studies, or dated publications.
- No claim of official affiliation with Canada, Germany, the EU, CETA, GTAI, or any chamber of
  commerce / trade commissioner service.
- No aggregate-rating or review structured data.
- Market Intelligence is shown as an explicit "coming soon" empty state.
- The contact form currently submits via `mailto:` as a functional placeholder — replace with a
  real form handler (serverless function, Formspree, etc.) with spam protection before launch.
