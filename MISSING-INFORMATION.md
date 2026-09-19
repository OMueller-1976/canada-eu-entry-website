# Missing Business Information Required Before Launch

The business owner needs to supply the following before this site can go live. Search the
codebase for `[placeholder` and `TODO` to find every instance in context.

## Legal & compliance (Legal Notice, `/legal-notice`)

- Full legal name of the responsible natural person / registered trading name
- Full serviceable business address (street, postal code, city) in Germany
- Business telephone number
- Business email address
- VAT identification number (Section 27a UStG), if applicable
- Confirmation of whether an EU online dispute resolution (ODR) statement is required and, if
  so, the correct current link
- Final liability/disclaimer language, drafted or reviewed by a German lawyer

## Privacy Policy (`/privacy-policy`)

- Data controller's full legal name and address (should match Legal Notice)
- Data-protection contact email
- Final list of any tools/processors actually in use (email provider, hosting provider,
  analytics, CRM) and their role
- Confirmation of the specific GDPR legal basis relied on for each processing activity
- Confirmation of any data transfer outside the EU/EEA (including to Canada) and the safeguard
  relied upon
- Data-retention periods for inquiry/contact data
- The competent supervisory authority to name for complaints, based on the registered address

## Contact page (`/contact`)

- Production contact email address (currently a placeholder in `src/lib/site.ts` —
  `hello@canadaeuentry.com` — confirm or replace)
- Business phone number
- Registered business address (for display, matching the Legal Notice)
- A decision on the contact-form handler: the current implementation is a functional
  `mailto:` placeholder and should be replaced with a real form-submission service (a
  serverless function, Formspree, Basin, etc.) with spam protection before launch

## About page (`/about`)

- Legal personal name of the principal consultant/responsible natural person
- Confirmation of the correct title to use (the brief restricts "Managing Director" unless
  legally accurate, and suggests "Founder" or "Principal Consultant" only if approved)

## Brand & technical

- Confirmation that `canadaeuentry.com` is the final production domain (already registered per
  the owner) and that `www.canadaeuentry.com` (used throughout `src/lib/site.ts` and
  metadata) is the intended canonical form, vs. the bare apex domain
- Logo and favicon assets (none are included yet; the site currently uses a text-only wordmark)
- Open Graph / social preview image (1200×630, referenced from `layout.tsx` metadata once
  created)
- Analytics tool decision (e.g., Plausible, Google Analytics with consent gating) and the
  cookie/consent-management tool to pair with it — the brief requires no non-essential tracking
  before consent
- Any existing brand guidelines (exact red/blue hex values, if the owner has official brand
  colors beyond the "Canadian red / EU blue" direction implemented here)

## Content

- Whether any of the "[Source-verification placeholder]" statistics in `CLAIMS-TO-VERIFY.md`
  should be sourced now or removed if they cannot be verified before launch
- Real Market Intelligence articles (the section currently ships as an intentional empty state)
- Decision on whether a German-language version should be built now or deferred (the site's
  information architecture is prepared for this — see `src/lib/site.ts` `locale` field — but
  only English is implemented)
