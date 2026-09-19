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
