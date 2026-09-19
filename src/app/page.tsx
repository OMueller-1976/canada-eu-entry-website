import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import SignalSprintTeaser from "@/components/SignalSprintTeaser";
import JsonLd from "@/components/JsonLd";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { FAQ_ITEMS } from "@/content/faq";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "EU Market Entry for Canadian Companies | Canada EU Entry by OneTitel",
  description:
    "Canada EU Entry, by OneTitel, helps Canadian B2B companies validate, establish and grow their business in Germany and the European Union through market-entry strategy, launch coordination and commercial execution.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-navy/10 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#1F4E8C 1px, transparent 1px), linear-gradient(90deg, #1F4E8C 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-accent" />
        <Container className="relative py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <Image src="/canada-flag.png" alt="Canada" width={32} height={17} className="h-4 w-auto rounded-[1px]" />
              <Image src="/eu-flag.png" alt="European Union" width={32} height={20} className="h-4 w-auto rounded-[1px]" />
            </div>
            <p className="mt-3 text-sm font-bold uppercase tracking-wider text-accent">
              Canada–EU Market Entry Advisory &amp; Execution
            </p>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.08] text-navy sm:text-5xl md:text-7xl">
              Build your business in Germany. Expand across Europe.
            </h1>
            <p className="mt-7 text-xl leading-relaxed text-graphite">
              {SITE.brand} helps Canadian B2B companies validate their European opportunity,
              establish a credible German market presence and build their first local sales
              pipeline.
            </p>
            <p className="mt-4 text-base font-semibold text-eublue">{SITE.tagline}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact#eu-readiness">Assess Your EU Readiness</PrimaryButton>
              <SecondaryButton href="/services">Explore Our Programs</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST / CONTEXT */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Context"
            title="Why Canada and Europe are moving closer"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ul className="space-y-4 text-sm leading-relaxed text-graphite">
              <li>
                Canada has publicly pursued deeper trade ties with Europe as part of diversifying
                beyond a small number of partners, with CETA as its flagship agreement with the EU.{" "}
                <a
                  href="https://www.international.gc.ca/trade-commerce/trade-agreements-accords-commerciaux/agr-acc/ceta-aecg/index.aspx?lang=eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-eublue underline underline-offset-2"
                >
                  Source: Global Affairs Canada, CETA overview
                </a>
              </li>
              <li>
                The EU is Canada&rsquo;s second-largest trading partner after the United States,
                with total EU–Canada trade in goods and services reaching roughly €130.8 billion in
                2025.{" "}
                <a
                  href="https://www.consilium.europa.eu/en/infographics/eu-canada-trade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-eublue underline underline-offset-2"
                >
                  Source: Council of the EU, EU–Canada trade in figures
                </a>
              </li>
              <li>
                Since CETA&rsquo;s provisional application in September 2017, Canada and the EU
                eliminated roughly 98% of tariff lines between them, and EU goods exports to Canada
                have grown by around 26%, now supporting some 700,000 European jobs.{" "}
                <a
                  href="https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/canada/eu-canada-agreements/factsheets-and-guides/factsheet-eu-canada-trade-agreement-ceta_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-eublue underline underline-offset-2"
                >
                  Source: European Commission, CETA factsheet
                </a>
              </li>
            </ul>
            <ul className="space-y-4 text-sm leading-relaxed text-graphite">
              <li>
                EU foreign direct investment stock in Canada reached roughly €244.7 billion in
                2024, with Canadian FDI in the EU at around €230 billion — reflecting deepening
                cooperation in trade, investment, energy and technology.{" "}
                <a
                  href="https://www.consilium.europa.eu/en/infographics/eu-canada-trade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-eublue underline underline-offset-2"
                >
                  Source: Council of the EU, EU–Canada trade in figures
                </a>
              </li>
              <li>
                Germany is the EU&rsquo;s largest economy by GDP, and its central location and
                industrial base make it a common first entry point for companies establishing a
                European presence.{" "}
                <a
                  href="https://www.destatis.de/EN/Home/_node.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-eublue underline underline-offset-2"
                >
                  Source: German Federal Statistical Office (Destatis)
                </a>
              </li>
              <li className="font-medium text-navy">
                Political opportunity does not remove commercial, regulatory or cultural
                complexity — which is exactly where a structured entry approach matters.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* CLIENT PROBLEM */}
      <section className="border-y border-navy/10 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Challenge"
            title="Europe is one market framework – but not one simple market"
            lede="Canadian companies who succeed in Germany and the EU treat it as a structured, multi-stage process rather than a single announcement. The most common challenges we see:"
          />
          <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Deciding which EU country to enter first",
              "Validating actual demand rather than relying on desk research",
              "Navigating national differences within the EU",
              "Understanding compliance and product requirements",
              "Adapting pricing and positioning",
              "Finding credible distributors, partners and buyers",
              "Managing longer B2B sales cycles",
              "Determining whether a German entity is necessary",
              "Coordinating legal, tax, accounting, customs and employment specialists",
              "Building local trust without creating unnecessary fixed costs too early",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-base leading-relaxed text-graphite">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* SOLUTION MODEL */}
      <section id="how-it-works" className="py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Our Model" title="Validate. Establish. Grow." align="center" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Validate",
                body: "Market readiness, demand, competition, regulation and entry-model assessment.",
              },
              {
                step: "02",
                title: "Establish",
                body: "Commercial localization, local infrastructure and, where justified, coordination of a German branch or subsidiary.",
              },
              {
                step: "03",
                title: "Grow",
                body: "Target-account development, partnerships, market representation and pipeline support.",
              },
            ].map((s) => (
              <div key={s.step} className="border-t-4 border-accent bg-white p-8 shadow-sm">
                <p className="font-serif text-4xl font-bold text-eublue">{s.step}</p>
                <h3 className="mt-3 font-serif text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-graphite">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* GERMANY MARKET SIGNAL SPRINT TEASER */}
      <SignalSprintTeaser />

      {/* SERVICES OVERVIEW */}
      <section className="border-y border-navy/10 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Modular engagement, from first assessment to ongoing representation"
            lede="Each program can stand alone or connect into the next stage of your market-entry journey."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10">
            <SecondaryButton href="/services">View all services</SecondaryButton>
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section className="border-y border-navy/10 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={`Why ${SITE.brand}`}
            title="One accountable lead for the complete market-entry journey"
          />
          <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Strategy connected to execution",
              "One central point of coordination",
              "Germany-based market perspective",
              "Canadian business context",
              "Lower risk of premature entity formation",
              "Access to specialized legal, tax, compliance and sector partners",
              "Decisions based on commercial validation",
              "Modular engagement from initial audit to ongoing representation",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-base leading-relaxed text-graphite">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                {item}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* WHEN A GERMAN ENTITY MAKES SENSE */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#EAF0F6" }}>
        <Container>
          <SectionHeading
            eyebrow="Decision Point"
            title="When a German entity makes sense"
            lede="A German GmbH, branch or other local structure may be appropriate when:"
          />
          <div className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Customers require a German or EU contracting party",
              "Local employees will be hired",
              "An importer or responsible economic operator is needed",
              "The company requires warehousing or ongoing operations",
              "Public procurement is relevant",
              "Liability separation is commercially important",
              "The expected European revenue justifies the fixed cost",
              "The company is ready for long-term commitment",
            ].map((item) => (
              <p key={item} className="flex gap-3 text-base leading-relaxed text-graphite">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                {item}
              </p>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base font-semibold text-navy">
            A German entity is not always the correct first step. Commercial validation should
            generally precede structural complexity.
          </p>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Industries" title="Sectors where Canada–EU alignment is strongest" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      {/* FIRST STEPS TEASER */}
      <section className="border-y-4 border-accent bg-white py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">First Steps</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy md:text-4xl">
              A Canadian Company&rsquo;s Guide to Entering Germany and the European Union
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-graphite">
              A 14-chapter practical guide covering the EU, Germany, business culture, CETA,
              market selection, entry models, regulation, company formation and a first-100-days
              roadmap — built to be useful on its own, whether or not you ever engage us.
            </p>
            <div className="mt-8">
              <Link
                href="/first-steps"
                className="inline-flex items-center justify-center rounded-sm bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-700"
              >
                Read the First Steps guide
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
          <div className="mt-10">
            <Faq items={FAQ_ITEMS} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBanner
        headline="Is Europe the right next market for your company?"
        body="Begin with a structured assessment of commercial potential, operational readiness and the most appropriate route into Germany and the EU."
      />
    </>
  );
}
