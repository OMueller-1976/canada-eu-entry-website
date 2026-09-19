export type Service = {
  slug: string;
  name: string;
  stage: "Validate" | "Establish" | "Grow";
  priceLabel: string;
  summary: string;
  purpose: string;
  scope: string[];
  terms: string[];
  exclusions?: string[];
  disclaimer?: string;
  availableOnRequest?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "eu-entry-audit",
    name: "EU Entry Audit",
    stage: "Validate",
    priceLabel: "CAD $17,500",
    summary:
      "A management-level assessment for Canadian companies considering entry into Germany and the EU.",
    purpose:
      "The EU Entry Audit gives your leadership team a structured, evidence-based view of whether Germany and the European Union are a commercially sound next step — and, if so, which entry model and priority markets make sense before you commit further resources.",
    scope: [
      "Executive readiness workshop",
      "Product-market and market-entry assessment",
      "Preliminary competition and pricing analysis",
      "Selection of priority countries or regions",
      "Regulatory red-flag review",
      "Comparison of direct sales, distributor, partner, branch and subsidiary models",
      "Initial target-account and partner landscape",
      "Indicative market-entry budget",
      "Commercial risk assessment",
      "100-day roadmap",
      "Go, adjust or no-go recommendation",
      "Final executive presentation",
    ],
    terms: [
      "50% payable upon commissioning.",
      "50% payable upon delivery of the agreed final work product.",
    ],
  },
  {
    slug: "germany-market-validation-sprint",
    name: "Germany Market Validation Sprint",
    stage: "Validate",
    priceLabel: "CAD $68,000",
    summary:
      "A deeper, evidence-based validation of the German market before you commit substantial investment.",
    purpose:
      "The Germany Market Validation Sprint goes beyond desk research. It tests your value proposition, pricing and route-to-market against real market participants, and delivers a market-entry business case you can act on with confidence.",
    scope: [
      "Detailed market and competitive assessment",
      "Customer and partner segmentation",
      "Interviews with selected market participants where access is possible",
      "Value-proposition and messaging localization",
      "Pricing and route-to-market validation",
      "Regulatory and operational workstream coordination",
      "Target-account and partner shortlist",
      "Structured market outreach",
      "Feedback from potential customers, partners or distributors",
      "Recommended entry structure",
      "Initial commercial pipeline",
      "Final market-entry business case",
      "Implementation roadmap",
    ],
    terms: [
      "50% payable upon commissioning.",
      "50% payable upon completion and delivery of the agreed project scope.",
    ],
    disclaimer:
      "A specific number of sales, contracts or meetings cannot be guaranteed unless explicitly agreed in a separate statement of work.",
  },
  {
    slug: "german-entity-launch",
    name: "German Entity Launch",
    stage: "Establish",
    priceLabel: "From CAD $27,000, depending on structure and scope",
    summary:
      "Coordination of the establishment of a German subsidiary, branch or suitable operating presence.",
    purpose:
      "OneTitel coordinates the moving parts of forming a German entity — lawyer, notary, tax adviser, bank and registers — so your team has one accountable point of contact instead of five separate vendor relationships.",
    scope: [
      "Entity-choice coordination",
      "Formation roadmap",
      "Coordination with a German lawyer, tax adviser and notary",
      "Coordination of corporate documents",
      "Translation and apostille workflow",
      "Registered business-address coordination",
      "Company bank-account preparation and KYC support",
      "Commercial-register process coordination",
      "Trade-registration coordination",
      "Tax-registration coordination",
      "Transparency-register coordination",
      "Accounting and payroll provider onboarding",
      "VAT and EORI coordination where relevant",
      "Initial compliance calendar",
      "Coordination of intercompany-document requirements",
    ],
    exclusions: [
      "€25,000 GmbH share capital",
      "Notary fees",
      "Legal fees",
      "Tax-advisory fees",
      "Certified translations",
      "Apostilles",
      "Government and register fees",
      "Banking costs",
      "Insurance",
      "Third-party licence or compliance costs",
    ],
    terms: [
      "50% payable upon commissioning.",
      "50% payable once the agreed coordination and launch deliverables have been completed.",
      "Third-party costs are charged separately and may require advance payment.",
    ],
    disclaimer:
      "OneTitel coordinates the process but does not provide legal, tax or notarial advice. Regulated services are provided by appropriately licensed independent professionals.",
  },
  {
    slug: "german-commercial-launch",
    name: "German Commercial Launch",
    stage: "Establish",
    priceLabel: "CAD $45,000–$80,000, depending on scope",
    summary:
      "Build a credible, sales-ready German market presence beyond the legal entity itself.",
    purpose:
      "A registered entity is not a commercial presence. The German Commercial Launch builds the positioning, materials, infrastructure and first outreach that let you operate credibly with German and European customers.",
    scope: [
      "German market positioning",
      "Localized messaging and sales narrative",
      "German or bilingual website presence",
      "Local domain, email and telephone setup",
      "Localized sales presentation and company profile",
      "German pricing and offer architecture",
      "Target-account development",
      "Distributor and partner research",
      "Initial outreach",
      "CRM and sales-process setup",
      "Market-specific trust signals",
      "Association and event recommendations",
      "First 100-day commercial launch plan",
    ],
    terms: [
      "50% payable upon commissioning.",
      "50% payable upon completion of the agreed deliverables.",
    ],
    disclaimer:
      "Third-party media, software, travel, event and production costs are excluded unless expressly included.",
  },
  {
    slug: "germany-market-office",
    name: "Germany Market Office",
    stage: "Grow",
    priceLabel: "CAD $9,000–$18,000 per month",
    summary: "Ongoing fractional market representation and commercial development.",
    purpose:
      "Once you are established, the Germany Market Office gives you a local point of contact who keeps your pipeline moving, manages relationships with local providers and reports on progress every month — without the cost of a full-time hire.",
    scope: [
      "Local point of contact",
      "Market monitoring",
      "Partner and account development",
      "Pipeline management",
      "Meeting preparation and follow-up",
      "Coordination of local service providers",
      "Trade-fair and association support",
      "Monthly commercial reporting",
      "Support for offers and negotiations",
      "Ongoing localization advice",
    ],
    terms: [
      "Monthly retainers, minimum engagement periods, notice periods and payment schedules are defined in the individual proposal.",
      "Recurring retainers are normally payable monthly in advance.",
    ],
  },
  {
    slug: "german-media-monetization-audit",
    name: "German Media Monetization Audit",
    stage: "Validate",
    priceLabel: "CAD $12,500–$16,000, depending on scope",
    summary:
      "For Canadian B2B publishers, media companies and publishing-technology businesses assessing German monetization potential.",
    purpose:
      "A focused assessment of how a media, publishing or content-technology business could monetize in the German market — from advertising positioning and programmatic readiness to lead-generation products and a 90-day monetization roadmap.",
    scope: [
      "Media-product and portfolio assessment",
      "Advertising-market positioning",
      "Pricing and offer architecture",
      "Programmatic and AdTech readiness",
      "Lead-generation products",
      "Webinar, whitepaper, podcast and content formats",
      "Agency and direct-client sales strategy",
      "Monetization-partner assessment",
      "90-day monetization roadmap",
    ],
    terms: [
      "Commercial terms are confirmed in the individual proposal.",
    ],
    availableOnRequest: true,
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
