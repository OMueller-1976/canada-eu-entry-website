export type Industry = {
  slug: string;
  name: string;
  whyGermany: string;
  barriers: string[];
  coordination: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "technology-ai-digital-infrastructure",
    name: "Technology, AI & Digital Infrastructure",
    whyGermany:
      "Germany is Europe's largest software and IT-services market, with a Mittelstand that is actively digitizing and an enterprise base willing to pay for proven, well-supported technology.",
    barriers: [
      "GDPR and data-residency expectations from enterprise buyers",
      "Preference for German-language documentation and support",
      "Longer procurement and security-review cycles than in North America",
      "Established local and pan-European competitors in most categories",
    ],
    coordination: [
      "Coordination with specialist partners on GDPR and data-protection posture",
      "Localization of technical and commercial materials",
      "Introductions into relevant industry associations and events",
    ],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    whyGermany:
      "Rising regulatory pressure (including EU-wide directives on network and information security) and high-profile incidents have pushed German industrial and public-sector buyers to prioritize cybersecurity investment.",
    barriers: [
      "Certification and compliance expectations that vary by sector and customer",
      "Preference for vendors with a demonstrable local support model",
      "Public-sector and critical-infrastructure procurement can involve additional scrutiny",
      "Crowded field of established European vendors",
    ],
    coordination: [
      "Coordination with specialist partners on relevant certifications and standards",
      "Positioning against local and pan-European competitors",
      "Structured introductions to systems integrators and channel partners",
    ],
  },
  {
    slug: "advanced-manufacturing",
    name: "Advanced Manufacturing",
    whyGermany:
      "Germany's industrial base and engineering culture make it a natural proving ground for advanced manufacturing technology, components and automation solutions, with strong spillover into Central Europe.",
    barriers: [
      "High technical due-diligence standards and long qualification cycles",
      "CE marking and product-safety documentation requirements",
      "Entrenched supplier relationships within German industrial supply chains",
      "Expectation of local technical support and spare-parts logistics",
    ],
    coordination: [
      "Coordination with specialist partners on CE marking and technical documentation",
      "Identification of trade fairs and industry associations relevant to the sector",
      "Support in preparing technical and commercial proof points for German buyers",
    ],
  },
  {
    slug: "defence-aerospace-dual-use",
    name: "Defence, Aerospace & Dual Use",
    whyGermany:
      "Increased European defence spending and deepening Canada–EU security cooperation are creating openings for qualified Canadian suppliers, particularly in dual-use technology and aerospace components.",
    barriers: [
      "Export-control and dual-use authorization requirements on both sides",
      "Security clearance and vetting requirements for many programs",
      "Long, relationship-driven procurement cycles with prime contractors and government buyers",
      "Strict confidentiality and documentation standards",
    ],
    coordination: [
      "Coordination with specialist partners on export-control and dual-use compliance",
      "Introductions to relevant industry associations",
      "Support in structuring initial conversations with primes and public buyers",
    ],
  },
  {
    slug: "clean-technology-energy",
    name: "Clean Technology & Energy",
    whyGermany:
      "Germany's energy transition (Energiewende) and broader EU climate policy are driving sustained demand for clean-technology solutions across power, industry, mobility and the built environment.",
    barriers: [
      "Product certification and grid-connection requirements",
      "Public funding and subsidy landscapes that shift with policy cycles",
      "Strong domestic and European competition in mature clean-tech categories",
      "Sales cycles tied to utility, municipal or industrial procurement timelines",
    ],
    coordination: [
      "Coordination with specialist partners on certification and grid-compliance questions",
      "Mapping of relevant funding programs and industry bodies",
      "Support in identifying pilot customers and reference sites",
    ],
  },
  {
    slug: "critical-minerals-strategic-supply-chains",
    name: "Critical Minerals & Strategic Supply Chains",
    whyGermany:
      "German and EU industry are actively seeking to diversify critical-mineral and strategic-supply-chain sourcing away from concentrated suppliers, creating an opening for credible Canadian partners.",
    barriers: [
      "Long-term offtake and supply-agreement negotiation cycles",
      "EU due-diligence and traceability expectations for supply chains",
      "Capital-intensive customer decisions with multiple internal stakeholders",
      "Limited direct-to-market entry points outside large industrial buyers",
    ],
    coordination: [
      "Coordination with specialist partners on EU supply-chain due-diligence requirements",
      "Identification of relevant industry bodies and strategic-dialogue forums",
      "Support in structuring initial conversations with industrial buyers",
    ],
  },
  {
    slug: "medtech-regulated-products",
    name: "Medtech and Regulated Products",
    whyGermany:
      "Germany's healthcare system and manufacturing base make it an important market for medical-technology and other regulated products, provided the regulatory pathway is understood early.",
    barriers: [
      "EU Medical Device Regulation and related conformity-assessment requirements",
      "Reimbursement and health-system procurement complexity",
      "Requirement for an EU-based responsible person or importer in many cases",
      "Long clinical and regulatory validation timelines",
    ],
    coordination: [
      "Coordination with specialist regulatory and legal partners on conformity requirements",
      "Support in identifying the appropriate EU responsible-person or importer arrangement",
      "Introductions to relevant industry associations and channel partners",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
