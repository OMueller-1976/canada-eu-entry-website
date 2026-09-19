import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Market Intelligence",
  description:
    "Canada EU Entry Market Intelligence: practical research on Canada–EU trade, CETA, Germany market entry, regulation and sector opportunity, supporting informed market-entry decisions.",
  alternates: { canonical: "/market-intelligence" },
};

const CATEGORIES = [
  {
    name: "Canada–EU Trade Briefs",
    description: "Practical notes on the state of Canada–EU trade and what it means for market entry.",
  },
  {
    name: "CETA in Practice",
    description: "How the Canada–EU trade agreement actually works for companies on the ground.",
  },
  {
    name: "Germany Entry Notes",
    description: "Observations on the German market relevant to companies planning an entry.",
  },
  {
    name: "Sector Opportunity Reports",
    description: "Sector-specific views on demand, competition and entry timing.",
  },
  {
    name: "Regulatory Watch",
    description: "Tracking regulatory developments relevant to Canadian companies entering the EU.",
  },
  {
    name: "Executive Interviews",
    description: "Conversations with executives navigating Canada–EU market entry.",
  },
  {
    name: "Market Entry Case Notes",
    description: "Structured, anonymized notes on market-entry decisions and outcomes.",
  },
  {
    name: "Annual Canada–Germany Business Outlook",
    description: "A yearly view of the Canada–Germany commercial relationship.",
  },
];

export default function MarketIntelligencePage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs
            items={[{ href: "/", label: "Home" }, { href: "/market-intelligence", label: "Market Intelligence" }]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              Canada EU Entry Market Intelligence
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              Research that supports better market-entry decisions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Market Intelligence is our research and publishing layer — practical intelligence
              about EU–Canada trade, CETA, Germany, regulation, industries and market-entry
              trends. It supports our advisory work and reinforces authority and trust, but it is
              not our primary offer: our core work is market-entry consultancy and execution.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-navy/10 bg-white py-16 md:py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            Canada–EU trade in numbers
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl">
            The current baseline, with sources
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-navy/10 bg-offwhite p-6">
              <p className="font-serif text-3xl font-bold text-navy">€130.8B</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                Total EU–Canada trade in goods and services, 2025.
              </p>
              <a
                href="https://www.consilium.europa.eu/en/infographics/eu-canada-trade/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-eublue underline underline-offset-2"
              >
                Council of the EU
              </a>
            </div>
            <div className="border border-navy/10 bg-offwhite p-6">
              <p className="font-serif text-3xl font-bold text-navy">98%</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                Of tariff lines eliminated between Canada and the EU since CETA&rsquo;s
                provisional application in September 2017.
              </p>
              <a
                href="https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/canada/eu-canada-agreements/factsheets-and-guides/factsheet-eu-canada-trade-agreement-ceta_en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-eublue underline underline-offset-2"
              >
                European Commission
              </a>
            </div>
            <div className="border border-navy/10 bg-offwhite p-6">
              <p className="font-serif text-3xl font-bold text-navy">+26%</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                Growth in EU goods exports to Canada since CETA, now supporting an estimated
                700,000 European jobs.
              </p>
              <a
                href="https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/canada/eu-canada-agreements/factsheets-and-guides/factsheet-eu-canada-trade-agreement-ceta_en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-eublue underline underline-offset-2"
              >
                European Commission
              </a>
            </div>
            <div className="border border-navy/10 bg-offwhite p-6">
              <p className="font-serif text-3xl font-bold text-navy">€244.7B</p>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                EU foreign direct investment stock in Canada, 2024 — versus roughly €230B of
                Canadian FDI in the EU.
              </p>
              <a
                href="https://www.consilium.europa.eu/en/infographics/eu-canada-trade/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-eublue underline underline-offset-2"
              >
                Council of the EU
              </a>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-graphite/60">
            Figures are the latest official EU/European Commission figures available at the time
            of writing and are subject to periodic revision — always check the linked primary
            source before citing them externally.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="border border-dashed border-navy/25 bg-white p-7">
                <h2 className="font-serif text-lg font-semibold text-navy">{cat.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{cat.description}</p>
                <p className="mt-5 inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-graphite/70">
                  Coming soon
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-graphite/70">
            This section is intentionally an empty state today. Articles will be published here
            as they are researched and written — nothing on this page represents an existing
            publication or dated report.
          </p>
        </Container>
      </section>

      <CtaBanner
        headline="Want research on a specific question?"
        body="If you need intelligence on a specific sector, market or regulatory question, get in touch and we'll let you know what we can help with."
      />
    </>
  );
}
