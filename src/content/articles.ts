import type { Block } from "@/content/first-steps";

export type ArticleSource = { label: string; href: string };

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  publishDate: string; // human-readable, e.g. "September 2026"
  author: string;
  blocks: Block[];
  sources: ArticleSource[];
};

export const ARTICLES: Article[] = [
  {
    slug: "eu-canada-trade-relationship-2026",
    category: "Canada–EU Trade Briefs",
    title: "The Canada–EU Trade Relationship in 2026: What Has Changed, and What It Means for Market Entry",
    dek: "CETA is nearly a decade old. In March 2026 the EU and Canada used a Joint Committee meeting to expand it further — here is what actually shifted, and why it matters for a company still deciding whether to enter the EU.",
    publishDate: "September 2026",
    author: "Oliver Markus Müller",
    blocks: [
      {
        type: "p",
        text: "The Comprehensive Economic and Trade Agreement (CETA) has been in provisional application since September 2017. Nine years in, the relationship it created is no longer a novelty — it is measurable, growing, and still being actively expanded. For a Canadian company weighing a first move into Germany or the wider EU, the relevant question is not whether CETA exists, but what it currently makes easier, and where the real work still lies with the company itself.",
      },
      { type: "h3", text: "The trend is still upward" },
      {
        type: "p",
        text: "According to the European Commission and the Council of the EU, total EU–Canada trade in goods and services reached roughly €130.8 billion in 2025. Since CETA's provisional application began, EU goods exports to Canada have grown by an estimated 26%, and two-way goods trade has grown by more than 75%; bilateral services trade has grown by roughly 97%. EU foreign direct investment stock in Canada stood at about €244.7 billion in 2024, against roughly €230 billion of Canadian investment in the EU. Around 98% of tariff lines between the two economies have been liberalized since CETA took effect.",
      },
      {
        type: "p",
        text: "These are aggregate, EU-wide figures — they describe the trend, not any individual company's opportunity. But the direction is consistent and multi-year, which matters when a board is deciding whether a European expansion is a one-off bet or a market that keeps rewarding entrants.",
      },
      { type: "h3", text: "March 2026: the relationship was expanded again" },
      {
        type: "p",
        text: "On 5 March 2026, the EU and Canada issued a joint statement following a CETA Joint Committee meeting, committing to several concrete extensions of the agreement rather than just a review of it. The Joint Committee adopted a formal interpretation on investment protection, and signed off on expedited arbitration procedures specifically designed to make investment dispute resolution more accessible to small and medium-sized enterprises — a detail that matters for a mid-sized Canadian company that would otherwise assume dispute mechanisms are built for multinationals.",
      },
      {
        type: "ul",
        items: [
          "Negotiators agreed to expand the CETA Good Manufacturing Practice (GMP) Protocol to include active pharmaceutical ingredients, allowing mutual recognition of inspections and reducing duplicate testing for that sector.",
          "The Mutual Recognition Agreement for Architects entered into application on 18 December 2025, giving licensed architects an easier path to cross-border work.",
          "The EU and Canada formally launched negotiations toward a dedicated EU–Canada Digital Trade Agreement, intended to sit alongside CETA and set common standards for digital commerce and consumer protection.",
          "Both sides committed to continue working on remaining agricultural market-access barriers and to deepen cooperation through the EU–Canada Economic Security Dialogue.",
        ],
      },
      {
        type: "note",
        text: "None of this changes the fundamentals for a typical B2B technology, media or SaaS company: CETA was never primarily a tariff story for that kind of business. Its relevance is more about legal certainty, reduced friction at the border for physical goods, and a clear political signal that both sides intend to keep the relationship open.",
      },
      { type: "h3", text: "What this does not solve" },
      {
        type: "p",
        text: "CETA reduces or removes many tariffs and several categories of non-tariff barriers, but it does not create a single German or European customer base, a local sales narrative, or market-specific credibility. A Canadian company still needs to answer country-specific questions: how the offer is positioned for German buyers, which regulatory regime actually applies to its product or service, and which of the 27 EU member states should be the priority market. Entering Germany does not, by itself, grant frictionless commercial access to France, the Netherlands or Poland — each still requires its own go-to-market approach.",
      },
      {
        type: "p",
        text: "In practice, the companies that benefit most from the current Canada–EU environment are the ones that treat the trade agreement as infrastructure, not as a strategy. It lowers the cost and risk of doing business across the Atlantic; it does not replace the commercial work of finding the right market, the right entry model and the right first customers.",
      },
    ],
    sources: [
      { label: "Council of the EU — EU–Canada trade: facts and figures", href: "https://www.consilium.europa.eu/en/infographics/eu-canada-trade/" },
      { label: "European Commission — Driving shared prosperity: Boosting EU–Canada trade through CETA (5 March 2026)", href: "https://policy.trade.ec.europa.eu/news/driving-shared-prosperity-boosting-eu-canada-trade-through-ceta-2026-03-05_en" },
      { label: "Government of Canada — Joint statement on CETA (5 March 2026)", href: "https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/ceta-aecg/2026-03-05-statement-declaration.aspx?lang=eng" },
      { label: "European Commission — Factsheet: The EU–Canada trade agreement (CETA)", href: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/canada/eu-canada-agreements/factsheets-and-guides/factsheet-eu-canada-trade-agreement-ceta_en" },
    ],
  },
  {
    slug: "ceta-in-practice-rules-of-origin",
    category: "CETA in Practice",
    title: "CETA in Practice: What It Actually Takes to Claim a Preferential Tariff",
    dek: "CETA's tariff benefits are not automatic. A Canadian exporter has to actively classify, qualify and certify each shipment — here is the process as it works on the ground, and where companies most often get it wrong.",
    publishDate: "September 2026",
    author: "Oliver Markus Müller",
    blocks: [
      {
        type: "p",
        text: "CETA is often described in terms of headline numbers — 98% of tariff lines liberalized, billions of euros in trade. What that framing skips is that none of it is automatic. A Canadian company shipping physical goods into the EU only receives CETA's preferential tariff treatment if it actively proves, shipment by shipment, that its product qualifies. For companies used to trading domestically or with the United States under different rules, this step is where CETA either pays off cleanly or becomes an unexpected cost and delay at the border.",
      },
      { type: "h3", text: "The core sequence" },
      {
        type: "p",
        text: "Based on guidance from Canada's Trade Commissioner Service and the Canada Border Services Agency, the practical steps for a Canadian exporter are consistent across sectors:",
      },
      {
        type: "ul",
        items: [
          "Classify the product using its 6-digit Harmonized System (HS) code — this determines which CETA rule of origin applies, using tools such as the Canada Tariff Finder or the EU's Access2Markets ROSA self-assessment tool.",
          "Check the product-specific rule of origin in the CETA Protocol on Rules of Origin (Annex 5) to confirm how much Canadian (or EU) content, processing or transformation the product needs to qualify — 'made in Canada' in a general sense is not the legal test.",
          "Complete a self-certified origin declaration directly on the commercial invoice or another commercial document, using CETA's prescribed wording, together with the exporter's Canada Revenue Agency business number, date, place and signature.",
          "For shipments valued over €6,000, register for an Exporter Identification Number through the Canada Revenue Agency before the origin declaration can be validly used.",
          "Where classification or origin status is genuinely uncertain, request an advance ruling from the relevant EU member state's customs authority before shipping — this converts a guess into a binding decision.",
          "Retain all supporting records — origin declarations, bills of materials, supplier declarations, production records — for at least six years, since EU customs authorities can request verification well after the goods have cleared.",
        ],
      },
      {
        type: "note",
        text: "There is no central CETA certificate issued by a government agency. Origin certification under CETA is self-certification by the exporter, which means the exporter carries the compliance risk if the claim turns out to be wrong.",
      },
      { type: "h3", text: "Where this goes wrong" },
      {
        type: "p",
        text: "The most common failure mode is not fraud — it is a company assuming its product qualifies because it is manufactured in Canada, without checking the specific rule of origin for its HS classification. Products assembled from a significant share of non-Canadian, non-EU components can fail the origin test even when final assembly happens in Canada. Without a valid origin declaration, the shipment simply pays the full non-preferential EU duty rate on arrival — CETA's tariff benefit is not applied retroactively, and reclaiming it after the fact is a formal, sometimes lengthy customs process.",
      },
      {
        type: "p",
        text: "For most of the B2B technology, media and services companies this firm typically advises, physical customs clearance is a secondary concern — software, media and consulting services are not classified or cleared the way physical goods are. But for hardware, device or physical-product companies planning a German or EU launch, getting the origin-certification process right from the first shipment avoids both unnecessary duty costs and the administrative burden of a later customs dispute.",
      },
    ],
    sources: [
      { label: "Global Affairs Canada — Step-by-step guide for businesses using CETA", href: "https://www.tradecommissioner.gc.ca/en/market-industry-info/free-trade-agreements/canada-european-union-comprehensive-economic-trade-agreement/step-by-step-guide.html" },
      { label: "Canada Border Services Agency — Memorandum D11-4-14: Certification of Origin Under Free Trade Agreements", href: "https://www.cbsa-asfc.gc.ca/publications/dm-md/d11/d11-4-14-eng.html" },
      { label: "European Commission — CETA Rules of Origin explained (EU Chamber of Commerce in Canada)", href: "https://www.euccan.com/wp-content/uploads/2023/09/Guide-CETA-Rules-of-Origins-explained.pdf" },
      { label: "Export Development Canada — Do Canadian exporters need a REX number for Europe under CETA?", href: "https://www.edc.ca/en/article/registered-exporter-system-rex.html" },
    ],
  },
  {
    slug: "germany-business-climate-2026",
    category: "Germany Entry Notes",
    title: "Reading the German Business Climate in 2026: Cautious Recovery, Not Reversal",
    dek: "Germany's headline GDP growth is still modest, but sentiment indicators have been improving for months. For a Canadian company timing a market entry, the distinction between the two matters.",
    publishDate: "September 2026",
    author: "Oliver Markus Müller",
    blocks: [
      {
        type: "p",
        text: "Two different signals are worth separating when assessing whether now is a reasonable time to enter the German market: hard economic output data, and forward-looking business sentiment. Both come from credible, regularly updated German sources, and in 2026 they are telling a consistent but nuanced story — modest growth, paired with a sentiment recovery that has been building for several months.",
      },
      { type: "h3", text: "Output: modest, not stagnant" },
      {
        type: "p",
        text: "According to the German Federal Statistical Office (Destatis), Germany's gross domestic product grew by 0.2% in the second quarter of 2026 compared with the first quarter, on a seasonally and calendar-adjusted basis, following a revised 0.4% increase in the first quarter. Measured year-on-year, the economy grew by 0.9% in the second quarter of 2026. Destatis noted that exports rose compared with the previous quarter, while final consumption expenditure remained subdued and capital formation declined — a pattern consistent with an economy that is growing, but unevenly, and still leaning on external demand more than domestic spending.",
      },
      { type: "h3", text: "Sentiment: a clearer upward trend" },
      {
        type: "p",
        text: "The ifo Institute's Business Climate Index — a closely watched monthly survey of German managers across manufacturing, services, trade and construction — rose to 88.8 points in August 2026, up from 86.7 in July, and described by ifo as a six-month high. The improvement was broad-based: manufacturing managers assessed current conditions as significantly better and expected production increases over the following three months, even though order books in the sector remained a weaker point; service-sector sentiment improved, with IT service providers notably more confident; and retail and wholesale trade sentiment both improved. Business uncertainty, which ifo also tracks separately, declined over the same period.",
      },
      {
        type: "note",
        text: "The improvement was not a single-month spike — the index rose in most months across 2026 (from an unchanged reading in January, through a dip in March, to successive increases from May onward), suggesting a genuine trend rather than a one-off data point.",
      },
      { type: "h3", text: "What this means for market-entry timing" },
      {
        type: "p",
        text: "Neither figure, taken alone, should drive a market-entry decision. GDP growth of well under 1% is not the case for treating Germany as a boom market, and a single sentiment index does not offset company-specific questions about product-market fit. But together, the two data points argue against two opposite mistakes: assuming Germany is in a straightforward downturn that makes market entry ill-timed, and assuming current momentum is strong enough that positioning and validation work can be skipped.",
      },
      {
        type: "p",
        text: "The practical takeaway for a Canadian B2B company is that German buyers — in manufacturing, IT services and trade in particular — are entering a period of improving, not deteriorating, confidence, which tends to translate into more openness to evaluating new suppliers, tools and partners over the following two to three quarters. That is a reasonable moment to run a structured market test rather than either rushing a full-scale launch or waiting indefinitely for a clearer signal that, on the historical pattern of this index, may not arrive as a single dramatic turning point.",
      },
    ],
    sources: [
      { label: "German Federal Statistical Office (Destatis) — GDP in the 2nd quarter of 2026 up 0.2% on the previous quarter", href: "https://www.destatis.de/EN/Press/2026/07/PE26_269_811.html" },
      { label: "ifo Institute — ifo Business Climate Rises (August 2026)", href: "https://www.ifo.de/en/facts/2026-08-25/ifo-business-climate-rises-august-2026" },
      { label: "ifo Institute — ifo Business Climate Index Rises (June 2026)", href: "https://www.ifo.de/en/facts/2026-06-24/ifo-business-climate-index-rises-june-2026" },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return ARTICLES.filter((a) => a.category === category);
}
