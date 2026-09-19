# Missing Business Information Required Before Launch

Update (2026-09-19): most items below have been filled in from information the business owner
provided (CV, onetitel.de, direct instruction). Two items remain outstanding and are marked
**STILL NEEDED**.

## Legal & compliance (Legal Notice, `/legal-notice`)

- Full legal name: **Oliver Markus Müller**, trading as "Canada EU Entry" / "OneTitel" — done.
- Full serviceable business address (street, postal code, city) in Germany — **STILL NEEDED**.
  Only the general location (Kirchweiler) is on the site; the exact street address must be
  supplied and added to `/legal-notice`, `/privacy-policy` and the About page.
- Business telephone number: **+49 175 2079295** — done.
- Business email address: **om@onetitel.de** — done.
- VAT identification number (Section 27a UStG), if applicable — **STILL NEEDED**.
- Confirmation of whether an EU online dispute resolution (ODR) statement is required and, if
  so, the correct current link — still open, recommend confirming with a German lawyer.
- Final liability/disclaimer language, drafted or reviewed by a German lawyer — still open.

## Privacy Policy (`/privacy-policy`)

- Data controller's name: Oliver Markus Müller / OneTitel — done; address still pending (see
  above).
- Data-protection contact email: om@onetitel.de — done.
- Final list of any tools/processors actually in use — hosting is Vercel; no analytics/CRM tool
  is in use yet. Update the policy once one is added.
- GDPR legal basis wording drafted (Art. 6(1)(b)/(f)) — recommend a final read-through by a
  data-protection professional.
- International data transfer note (incl. to Canada) drafted — recommend confirming safeguards
  with a professional once the final hosting/CRM stack is set.
- Data-retention periods — drafted generically; confirm exact periods with a professional.
- Competent supervisory authority — drafted as the Rhineland-Palatinate LfDI based on the
  Kirchweiler location; confirm once the exact registered address is set.

## Contact page (`/contact`)

- Contact email: **om@onetitel.de** now shown directly (site-wide default in `src/lib/site.ts`
  is still `hello@canadaeuentry.com` for the mailto: form action — confirm whether to switch
  this to om@onetitel.de or set up a dedicated inbox).
- Business phone number: **+49 175 2079295** — shown.
- Registered business address — **STILL NEEDED** (same street address as above).
- LinkedIn added: https://www.linkedin.com/in/oliver-m-mueller/
- A decision on the contact-form handler: still a functional `mailto:` placeholder; replace
  with a real form-submission service (serverless function, Formspree, Basin, etc.) with spam
  protection before launch.

## About page (`/about`)

- Legal personal name: **Oliver Markus Müller** — done.
- Title used: "Founder & Managing Consultant" — done, avoids "Managing Director".
- Career background, certifications (BAFA-listed consultant, Forschungszulage/AI R&D seal,
  Scrum Master, Product Owner, Systemic Coach, certified mediator, Digital Transformation
  Manager) and LinkedIn link added from the CV supplied — done. Named past employers/consulting
  clients are listed as plain text (no logos) — see `CLAIMS-TO-VERIFY.md` item 12 for the
  confirmation still needed.

## Brand & technical

- Domain confirmed: canadaeuentry.com / www.canadaeuentry.com — done (already registered).
- Canada and EU flag icons added (header, footer, homepage hero) — done, using plain flag
  imagery (not official government/EU wordmarks) to avoid implying official affiliation.
- Favicon and Open Graph / social preview image — still not created; **outstanding**.
- Analytics/tag manager: Google Tag Manager (GTM-5KZ2XGLN) is now installed site-wide
  (`src/app/layout.tsx`). No analytics/marketing tags are enabled inside it yet — **before
  adding any tag in GTM (GA4, Ads, etc.), a cookie-consent banner must be implemented** so
  non-essential tags only fire after consent, and `/privacy-policy` must be updated to name
  each specific tag added.
- Official brand color values — using the implemented Canadian red / EU blue direction; no
  further brand guideline was supplied.

## Content

- Market Intelligence: a sourced "Canada–EU trade in numbers" section with linked EU sources
  was added to `/market-intelligence`. The eight category cards remain an intentional "coming
  soon" empty state — no fabricated articles were added, since none exist yet.
- Homepage and First Steps guide source-verification placeholders replaced with real, linked
  sources (Council of the EU, European Commission CETA factsheet, Global Affairs Canada,
  Destatis) — done, see `CLAIMS-TO-VERIFY.md`.
- German-language version — still deferred, not built.

## Resolved (2026-09-19, second pass)

- Full street address: **Am Bruchborn 6, 54570 Kirchweiler, Germany** — now on Legal Notice,
  Privacy Policy and Contact page.
- VAT ID: **DE 326064654** — now on Legal Notice.
- Contact email switched to **euentry@onetitel.de** site-wide (was `hello@canadaeuentry.com` /
  `om@onetitel.de`).
- Phone number removed from the site entirely, per the business owner's instruction.
- About page editorial note removed.
- Header nav spacing/sizing fixed to stop wrapping; Canada/EU flags removed from the header only
  (kept in the homepage hero and footer).

## Resolved (2026-09-19, third pass)

- Legal Notice is now fully drafted, including: updated to Section 5 DDG (the TMG was replaced
  by the Digitale-Dienste-Gesetz on 14 May 2024); a Dispute Resolution section reflecting that
  the EU ODR platform was discontinued on 20 July 2025 (no longer referenced/linked) plus the
  Section 36 VSBG non-participation statement; full liability-for-content, liability-for-links
  and copyright sections using standard German boilerplate language.
- No more `[Placeholder]` text remains on `/legal-notice`.

## Still needed from the business owner (summary)

1. Favicon / OG image assets.
2. Final sign-off of the Legal Notice by a qualified German lawyer is still recommended
   (content is complete and researched, not a placeholder, but a professional review before
   go-live is good practice).
3. Privacy Policy: final hosting/processor list confirmation once the tech stack is locked in.
