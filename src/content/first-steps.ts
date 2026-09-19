export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h3"; text: string }
  | { type: "note"; text: string };

export type Chapter = {
  id: string;
  number: number;
  title: string;
  blocks: Block[];
};

export const GUIDE_TITLE =
  "First Steps: A Canadian Company's Guide to Entering Germany and the European Union";

export const CHAPTERS: Chapter[] = [
  {
    id: "understanding-the-eu",
    number: 1,
    title: "Understanding the European Union",
    blocks: [
      {
        type: "p",
        text: "The European Union is a political and economic union of 27 member states that share a common legal and regulatory framework in many areas — from product standards to data protection — while remaining separate countries with their own languages, tax systems, business cultures and consumer markets.",
      },
      {
        type: "p",
        text: "It is easy to conflate several overlapping terms. The EU is the political and legal union. The euro area (or eurozone) is the subset of EU members that use the euro as their currency — Germany is one of them, but not every EU country is. The Schengen area is a passport-free travel zone that includes most, but not all, EU members and a few non-EU countries. 'Europe' as a geography is broader still, including countries that are neither in the EU, the euro area nor Schengen.",
      },
      {
        type: "p",
        text: "EU-wide rules matter enormously for market entry: product safety and CE marking, data protection under GDPR, and many customs and trade rules apply consistently across all member states. This is genuinely useful — it means a single compliance effort can, in many product categories, cover the whole bloc.",
      },
      {
        type: "p",
        text: "But national law and business culture still govern how you actually sell. Contract law details, employment law, public procurement procedures, language expectations, payment norms, distribution structures and buyer psychology all vary by country. A German enterprise buyer, a French public-sector tender and a Dutch mid-market distributor each expect a different approach.",
      },
      {
        type: "p",
        text: "This is why Canadian companies should not treat Europe as a single, homogeneous sales territory. A more accurate mental model is: one regulatory foundation, many distinct commercial markets built on top of it.",
      },
      {
        type: "p",
        text: "A German base is a strong way to start, because it gives you a foothold in the EU's largest economy, a central logistics position, and credibility with buyers across neighbouring markets. It does not, however, automatically solve every national-market requirement in France, Italy or Poland — each of those still needs its own commercial validation when the time comes.",
      },
    ],
  },
  {
    id: "why-germany",
    number: 2,
    title: "Why Germany",
    blocks: [
      {
        type: "p",
        text: "Germany is the EU's largest economy and one of the world's leading industrial and export nations. Its industrial base spans automotive, machinery, chemicals, electronics, medical technology and an increasingly digital services sector.",
      },
      {
        type: "p",
        text: "The German 'Mittelstand' — the large population of small and mid-sized, often family-owned, engineering and manufacturing companies — is a defining feature of the economy. These companies are frequently the actual buyers for B2B technology, components and services, and they tend to be technically demanding, relationship-driven and loyal once trust is established.",
      },
      {
        type: "p",
        text: "Beyond industrial strength, Germany offers purchasing power, a central geographic location with strong logistics and transport links to the rest of continental Europe, and significant public-procurement and regulated-industry activity. For many sectors, a credible presence in Germany also functions as a trust signal when approaching buyers in neighbouring markets.",
      },
      { type: "h3", text: "Challenges to plan for" },
      {
        type: "ul",
        items: [
          "Slower decision cycles than in much of North America, particularly in larger organizations",
          "A strong preference for evidence, documented quality and verifiable references over persuasive pitching",
          "Real regulatory complexity, especially in regulated or industrial sectors",
          "An expectation of German-language materials and, often, German-language sales conversations",
          "Formal, structured procurement processes, especially with larger or public-sector buyers",
          "Price sensitivity in some sectors and strong, established local competition",
        ],
      },
      {
        type: "note",
        text: "[Source-verification placeholder: figures on German GDP, export volumes, or Mittelstand company counts should cite Destatis (German Federal Statistical Office) or Germany Trade & Invest before publication.]",
      },
    ],
  },
  {
    id: "german-business-culture",
    number: 3,
    title: "German Business Culture",
    blocks: [
      {
        type: "p",
        text: "General cultural commentary is often reduced to caricature. What actually matters commercially is more specific and more useful.",
      },
      {
        type: "ul",
        items: [
          "Punctuality and preparation are taken as signals of professionalism — arriving prepared with clear materials matters more than charisma",
          "Communication tends to be direct and issue-focused rather than indirect; this is a communication style, not unfriendliness",
          "Technical detail is valued: buyers often want to understand how something works, not only what it does for them",
          "Realistic, specific commitments are trusted far more than broad or promotional claims",
          "Decision processes are often formal and involve multiple stakeholders, including technical specialists who may not be in the room for early conversations",
          "Hierarchy and specialist expertise are respected; the person with the technical answer may carry more weight than the most senior title present",
          "Written documentation is expected to follow up verbal conversations — decisions and commitments are usually confirmed in writing",
          "Risk awareness is high; buyers often want to understand what could go wrong before discussing what could go right",
          "Trust is built through demonstrated reliability over time rather than rapid rapport-building",
          "Friendliness in a meeting should not be read as commercial commitment — a warm conversation and a signed order are separate events",
        ],
      },
      {
        type: "p",
        text: "On language: German-language materials are not always mandatory, particularly in technology and international B2B sectors where English is common, but they are frequently an advantage and, in more traditional industrial sectors, often an expectation. Where German-language capability is not internal to your company, professional localization — not machine translation — is worth the investment.",
      },
    ],
  },
  {
    id: "canada-eu-trade-and-ceta",
    number: 4,
    title: "Canada–EU Trade and CETA",
    blocks: [
      {
        type: "p",
        text: "The Comprehensive Economic and Trade Agreement (CETA) between Canada and the EU has been provisionally applied since 2017 and reduces or eliminates tariffs on the large majority of goods traded between the two economies, while also addressing services access, government procurement and other trade barriers.",
      },
      {
        type: "ul",
        items: [
          "Tariff advantages: most goods traded between Canada and the EU benefit from reduced or eliminated tariffs under CETA, subject to meeting the agreement's requirements",
          "Rules of origin: tariff benefits generally require that goods meet specific origin criteria — qualifying as sufficiently 'Canadian' or 'EU' under the agreement's rules, not simply being shipped from Canada",
          "Customs documentation: claiming CETA benefits requires correct origin documentation and customs declarations",
          "Services and temporary entry: CETA includes provisions that can ease temporary entry for certain business purposes and improve market access for services",
          "Government procurement: CETA opens many EU (and Canadian) public-procurement opportunities to qualifying suppliers from the other party",
        ],
      },
      {
        type: "p",
        text: "CETA does not replace product compliance. A tariff advantage does not mean a product is automatically approved for sale — CE marking, technical standards, sector-specific authorizations and other requirements still apply in full. Companies should verify their specific eligibility for CETA benefits, and their compliance obligations, with qualified customs and legal specialists rather than assuming coverage.",
      },
      {
        type: "p",
        text: "In practice, many companies underuse the trade-agreement benefits available to them — either because they are unaware of CETA provisions relevant to their sector, or because the origin and documentation requirements were never worked through with a specialist.",
      },
      {
        type: "note",
        text: "This guide is informational and does not constitute customs or legal advice. [Source-verification placeholder: cite the European Commission's CETA page and Global Affairs Canada's CETA resources for current, authoritative detail.]",
      },
    ],
  },
  {
    id: "selecting-the-first-eu-market",
    number: 5,
    title: "Selecting the First EU Market",
    blocks: [
      {
        type: "p",
        text: "Germany is the right first market for many Canadian companies, but not automatically for all of them. A structured selection process weighs several factors together rather than relying on any single one.",
      },
      {
        type: "ul",
        items: [
          "Customer concentration: where are the most relevant buyers for your product already located or headquartered?",
          "Industry clusters: does the target market have a recognized cluster in your sector (for example, automotive in southern Germany, life sciences around specific regions)?",
          "Regulation: how heavily regulated is your product or service in each candidate market, and how does that compare?",
          "Language: what does the market expect in terms of language capability, and can you meet that expectation credibly?",
          "Logistics: what are the practical implications for shipping, service delivery, and support?",
          "Competitive intensity: how crowded is the market already, and by whom?",
          "Sales-cycle length: how long will it realistically take to close first business given typical buyer behaviour?",
          "Partner availability: are there credible distributors, resellers or channel partners active in the space?",
          "Pricing and expected margin: does the market support pricing that makes the effort worthwhile?",
          "Cost of market presence: what will it cost to establish and maintain credibility there?",
          "Strategic spillover: does succeeding in this market make the next market easier — for example, does a German base help you reach Austria, Benelux or Central Europe more efficiently?",
        ],
      },
      {
        type: "p",
        text: "The goal of this exercise is not to find a perfect market — it is to make a deliberate, evidence-based choice rather than defaulting to Germany because it is the largest economy, or drifting toward whichever market produced the first inbound inquiry.",
      },
      {
        type: "note",
        text: "Canadian B2B technology, media, AdTech, MarTech and SaaS companies who want a fast, low-commitment read on Germany specifically before a larger audit or validation project can start with the Germany Market Signal Sprint (see the Services section).",
      },
    ],
  },
  {
    id: "validating-demand",
    number: 6,
    title: "Validating Demand",
    blocks: [
      {
        type: "p",
        text: "Market entry decisions are too often based on desk research and assumption. Structured validation replaces assumption with evidence before you commit meaningful resources.",
      },
      {
        type: "ul",
        items: [
          "Target-customer hypotheses: define, specifically, who you believe will buy and why, so the hypothesis can actually be tested",
          "Buyer interviews: structured conversations with real prospective buyers, not just to pitch but to listen",
          "Competitor review: who already solves this problem in the market, and how well",
          "Willingness to pay: what buyers say — and, better, what they have actually paid — for comparable solutions",
          "Procurement requirements: what a buyer's internal process actually demands before it can purchase from a new, foreign supplier",
          "Distributor economics: whether the margins and volumes on offer would make a distributor relationship viable for both sides",
          "Localization needs: what would genuinely need to change in your product, pricing or materials",
          "Objections: the specific, recurring reasons buyers give for not moving forward",
          "Expected implementation effort: what it would take for a buyer to actually adopt your solution operationally",
          "Measurable go/no-go criteria: agreed in advance, so validation produces a decision rather than an open-ended process",
        ],
      },
      {
        type: "p",
        text: "The point of validation is not to produce a confident-sounding report. It is to produce a decision you can defend to your own board or investors, based on evidence gathered from the market itself.",
      },
    ],
  },
  {
    id: "choosing-an-entry-model",
    number: 7,
    title: "Choosing an Entry Model",
    blocks: [
      {
        type: "p",
        text: "There is no single correct entry model — the right choice depends on your product, sales motion, regulatory exposure and appetite for fixed commitment.",
      },
      {
        type: "h3", text: "Direct cross-border sales",
      },
      {
        type: "p",
        text: "Selling directly from Canada with no local structure. Lowest fixed cost and fastest to start; weakest on local trust, support responsiveness and, in some sectors, procurement eligibility.",
      },
      { type: "h3", text: "Commercial agent" },
      {
        type: "p",
        text: "An independent local representative who sells on your behalf for commission. Low fixed cost and fast local access; less control over the sales process and typically limited exclusivity leverage early on.",
      },
      { type: "h3", text: "Distributor" },
      {
        type: "p",
        text: "A local company buys and resells your product, typically holding stock. Useful for physical products needing local logistics and support; margin is shared and end-customer relationships are less direct.",
      },
      { type: "h3", text: "Reseller or integration partner" },
      {
        type: "p",
        text: "A partner embeds or resells your product as part of a broader solution. Efficient route into established customer bases; success depends heavily on partner selection and enablement.",
      },
      { type: "h3", text: "Employer-of-record arrangement" },
      {
        type: "p",
        text: "A third party formally employs local staff on your behalf while they work for you. Enables hiring a local presence without immediately forming an entity; typically a bridge, not a long-term structure.",
      },
      { type: "h3", text: "German branch" },
      {
        type: "p",
        text: "A registered extension of the Canadian company, without separate legal personality. Faster to establish than a subsidiary in some respects; liability generally extends back to the parent company.",
      },
      { type: "h3", text: "German subsidiary (GmbH)" },
      {
        type: "p",
        text: "A separate German legal entity, wholly or partly owned by the Canadian parent. Provides liability separation, local contracting capacity and procurement eligibility; carries real fixed cost and ongoing compliance obligations.",
      },
      { type: "h3", text: "Acquisition or joint venture" },
      {
        type: "p",
        text: "Acquiring or partnering with an existing local company. Can dramatically accelerate market access and credibility; carries integration risk and requires significant capital and diligence.",
      },
      {
        type: "note",
        text: "These comparisons are general in nature and are not individualized legal or tax recommendations. The right entry model for your company should be confirmed with qualified legal and tax advisors in light of your specific circumstances.",
      },
    ],
  },
  {
    id: "building-a-german-commercial-identity",
    number: 8,
    title: "Building a German Commercial Identity",
    blocks: [
      {
        type: "p",
        text: "A credible German presence is built from many small, consistent signals rather than one large gesture.",
      },
      {
        type: "ul",
        items: [
          "German-language communication, at least for customer-facing materials and support",
          "A local telephone number and email address that a German buyer would recognize as local",
          "A named local contact person that customers and partners can reach",
          "A localized website — not simply a translated one, but one that reflects local expectations and references",
          "Compliant legal notice (Impressum) and privacy policy content, as required under German law",
          "Euro pricing, presented clearly and consistently",
          "Contracts and terms that are appropriate for the German and EU legal context",
          "Customer references that a German buyer can relate to, wherever these genuinely exist",
          "Engagement with relevant industry associations",
          "Presence at appropriate German trade fairs",
          "Response times and customer-service norms that meet local expectations",
          "A genuine local customer-service capability, not only a forwarding address",
        ],
      },
      {
        type: "p",
        text: "There is an important line here: a credible local presence is not the same as a misleading one. Presenting a company as more locally established than it is — sometimes called 'German washing' — creates legal and reputational risk and tends to unravel quickly with sophisticated buyers. The goal is genuine, proportionate localization, not the appearance of a presence that does not exist.",
      },
    ],
  },
  {
    id: "regulation-and-compliance",
    number: 9,
    title: "Regulation and Compliance",
    blocks: [
      {
        type: "p",
        text: "This chapter is a high-level orientation checklist, not a compliance determination. Requirements depend heavily on your specific product, sector, business model and target country, and should always be confirmed with qualified specialists.",
      },
      {
        type: "ul",
        items: [
          "GDPR and data processing: rules governing how personal data is collected, stored and processed across the EU",
          "Product safety requirements applicable to your product category",
          "CE marking, where applicable to your product",
          "Technical documentation obligations that typically accompany CE marking and other conformity requirements",
          "Importer responsibilities under EU market-surveillance rules",
          "Packaging registration obligations in relevant countries",
          "VAT registration and compliance",
          "EORI number and customs-related requirements for moving goods",
          "Employment law, where you plan to hire staff locally",
          "Intellectual property protection and registration in the EU",
          "Sector-specific authorizations (for example, in medtech, defence, financial services or energy)",
          "Export controls and dual-use rules, particularly relevant for technology, defence and certain industrial sectors",
          "Environmental and supply-chain due-diligence requirements, an increasingly active area of EU regulation",
        ],
      },
      {
        type: "note",
        text: "This is general information, not legal or regulatory advice. Every item above requires confirmation from a qualified specialist based on your specific product, sector and business model.",
      },
    ],
  },
  {
    id: "forming-a-german-company",
    number: 10,
    title: "Forming a German Company",
    blocks: [
      {
        type: "p",
        text: "This chapter provides a general, high-level orientation to German company formation. It is not legal advice, and specific steps should be confirmed with a German lawyer, tax adviser and notary.",
      },
      {
        type: "ul",
        items: [
          "Subsidiary versus branch: a subsidiary is a separate German legal entity with its own liability; a branch is a registered extension of the Canadian parent",
          "The GmbH (Gesellschaft mit beschränkter Haftung) is the most common limited-liability structure used by foreign companies entering Germany",
          "A standard GmbH requires €25,000 in nominal share capital",
          "For a standard cash formation, registration is generally possible once at least €12,500 (half of the nominal capital) has been paid in, while the obligation to contribute the remaining amount continues after registration — this general rule should be confirmed with a notary or lawyer, since specific circumstances can affect it",
          "A registered German business address is required",
          "At least one managing director (Geschäftsführer) must be appointed",
          "Formation requires notarization of the company's articles of association",
          "The company must be entered in the commercial register (Handelsregister)",
          "Trade registration (Gewerbeanmeldung) is required at the local level",
          "Tax registration with the relevant German tax office is required",
          "Entry in the transparency register (Transparenzregister) is required, disclosing beneficial ownership",
          "A German business bank account is required, which involves a KYC (know-your-customer) process",
          "Ongoing accounting and annual compliance obligations apply once the entity is formed",
          "Canadian corporate documents (such as certificates of incorporation or good standing) will typically require apostille certification and certified translation before they can be used in the German formation process",
        ],
      },
      {
        type: "note",
        text: "None of the above is legal, tax or notarial advice. Company formation should always proceed under the guidance of a licensed German lawyer, tax adviser and notary.",
      },
    ],
  },
  {
    id: "sales-in-germany",
    number: 11,
    title: "Sales in Germany",
    blocks: [
      {
        type: "p",
        text: "B2B sales in Germany tend to reward patience, technical credibility and process discipline more than speed or aggressive pursuit.",
      },
      {
        type: "ul",
        items: [
          "Account-based selling generally outperforms broad outbound campaigns in German B2B contexts",
          "Procurement processes, especially at larger companies, are often more formal and document-heavy than in North America",
          "Trust-building periods are typically longer; expect more touchpoints before a first commitment",
          "Trade fairs and industry associations remain genuinely important channels for credibility and introductions",
          "Technical proof — demonstrations, pilots, documented performance data — carries significant weight",
          "Case studies and reference customers, where they exist, are valued highly and should be used deliberately",
          "Pilots are a common and often expected way to de-risk a first purchase for the buyer",
          "Partner-led sales can shorten the trust-building period by borrowing an established local relationship",
          "German-language outreach materials generally perform better than English-only campaigns outside a small number of English-fluent sectors",
          "CRM discipline matters: longer, multi-stakeholder sales cycles are hard to manage without structured tracking",
          "Pipeline expectations should be set realistically from the start — early-stage market entry pipelines convert more slowly than a comparable domestic pipeline",
        ],
      },
    ],
  },
  {
    id: "common-failure-modes",
    number: 12,
    title: "Common Failure Modes",
    blocks: [
      {
        type: "p",
        text: "Most European market-entry failures we observe trace back to a small number of recurring mistakes.",
      },
      {
        type: "ul",
        items: [
          "Treating Europe as one market rather than a set of related but distinct national markets",
          "Forming a GmbH before demand has actually been validated",
          "Reusing U.S. or Canadian messaging without adapting it for the German or European buyer",
          "Underestimating the scope and timeline of regulatory requirements",
          "Relying on a single distributor relationship without validating it first",
          "Assuming CETA guarantees market access, without checking actual origin rules and compliance requirements",
          "Underbudgeting the localization and sales effort required to reach a first meaningful customer base",
          "Expecting decisions to move at a North American pace",
          "Lacking a clearly accountable internal owner for the European expansion effort",
          "Confusing a full calendar of meetings with an actual sales pipeline",
          "Creating a superficial German identity — a translated website, a local phone number — without the operational substance to back it up",
        ],
      },
    ],
  },
  {
    id: "first-100-days",
    number: 13,
    title: "First 100 Days",
    blocks: [
      { type: "h3", text: "Days 1–30: Readiness and hypotheses" },
      {
        type: "p",
        text: "Confirm internal readiness and ownership, articulate your market-entry hypotheses, identify regulatory red flags early, and complete an initial segmentation of target customers and markets.",
      },
      { type: "h3", text: "Days 31–60: Validation and positioning" },
      {
        type: "p",
        text: "Test your hypotheses through buyer and partner conversations, refine positioning and pricing based on real feedback, and begin testing your preferred entry model against what you are learning.",
      },
      { type: "h3", text: "Days 61–100: Decision and launch preparation" },
      {
        type: "p",
        text: "Make the go, adjust or no-go decision, build the launch roadmap, begin structured partner or account outreach, and — only if justified by what you have learned — begin preparing entity formation.",
      },
      {
        type: "p",
        text: "This timeline is illustrative. Actual pacing depends on your sector, product complexity and the depth of validation required.",
      },
    ],
  },
  {
    id: "eu-entry-readiness-checklist",
    number: 14,
    title: "EU Entry Readiness Checklist",
    blocks: [
      {
        type: "p",
        text: "Use these questions to assess your own readiness before committing significant resources to European expansion.",
      },
      {
        type: "ul",
        items: [
          "Product-market fit: Have you validated that your product genuinely solves a problem for European buyers, not only Canadian ones?",
          "Revenue and financial readiness: Do you have the domestic revenue base and financial capacity to fund an extended market-entry effort?",
          "Internal ownership: Is there a named, accountable owner of the European expansion inside your company?",
          "Localization: What would need to change in your product, pricing, materials and support model?",
          "Regulatory requirements: Have you identified the compliance requirements relevant to your specific product and sector?",
          "Market selection: Have you deliberately chosen your first market, or defaulted to the most familiar one?",
          "Pricing: Have you validated euro pricing and margin expectations with real market feedback?",
          "Partners: Do you have, or a credible path to, distribution or channel partners where relevant?",
          "Legal structure: Have you determined whether — and when — a German entity will actually be necessary?",
          "Hiring: Do you have a plan for local representation, whether employed, contracted or through an employer-of-record arrangement?",
          "Logistics: Have you worked through the practicalities of shipping, delivery or service provision?",
          "Data protection: Have you assessed your GDPR obligations?",
          "Customs: Do you understand your CETA eligibility and customs documentation requirements?",
          "Sales capacity: Do you have the internal capacity to run a longer, multi-stakeholder European sales cycle?",
          "Timeline and budget: Have you set a realistic timeline and budget for validation, launch and initial growth?",
        ],
      },
      {
        type: "p",
        text: "If several of these questions remain open, that is a normal starting point — it is exactly what a structured EU Entry Audit is designed to resolve.",
      },
    ],
  },
];
