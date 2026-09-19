import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import { PrimaryButton, SecondaryButton } from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import ComparisonTable from "@/components/ComparisonTable";
import ScorecardPreview from "@/components/ScorecardPreview";
import JsonLd from "@/components/JsonLd";
import { SIGNAL_SPRINT, OFFER_COMPARISON } from "@/content/signal-sprint";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Germany Market Test for Canadian B2B Companies",
  description:
    "Test your German market potential before making a major investment. Canada EU Entry helps Canadian technology, media, AdTech and SaaS companies localize their positioning and collect first commercial market signals.",
  alternates: { canonical: `/${SIGNAL_SPRINT.slug}` },
};

export default function SignalSprintPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: SIGNAL_SPRINT.name,
    name: SIGNAL_SPRINT.name,
    description: SIGNAL_SPRINT.supportingLine,
    provider: { "@type": "Organization", name: SITE.brand, alternateName: SITE.legalName },
    areaServed: ["DE", "EU"],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Canadian B2B technology, media, AdTech, MarTech and SaaS companies",
    },
    offers: {
      "@type": "Offer",
      price: "4900",
      priceCurrency: "EUR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SIGNAL_SPRINT.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* HERO */}
      <section className="relative border-b border-navy/10 bg-white">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-accent" />
        <Container className="py-16 md:py-20">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: `/${SIGNAL_SPRINT.slug}`, label: SIGNAL_SPRINT.name },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              Easy Entry Program
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-[1.05] text-navy md:text-6xl">
              {SIGNAL_SPRINT.claim}
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-graphite/70">
              {SIGNAL_SPRINT.descriptor}
            </p>
            <p className="mt-6 text-xl leading-relaxed text-graphite">
              {SIGNAL_SPRINT.supportingLine}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <p className="font-serif text-3xl font-bold text-navy">
                {SIGNAL_SPRINT.price}
                <span className="ml-2 text-sm font-normal text-graphite">
                  {SIGNAL_SPRINT.priceNote}
                </span>
              </p>
              <p className="text-sm font-semibold text-eublue">{SIGNAL_SPRINT.duration}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contact#eu-readiness">
                Test Your German Market Potential
              </PrimaryButton>
              <SecondaryButton href="#included">View Sprint Details</SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-3">
          <div>
            <SectionHeading eyebrow="Who It's For" title="Primary target sectors" />
            <ul className="mt-6 space-y-2.5">
              {SIGNAL_SPRINT.primaryAudience.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">A good fit when you...</h2>
            <ul className="mt-6 space-y-2.5">
              {SIGNAL_SPRINT.goodFitWhen.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">Not the primary fit for</h2>
            <ul className="mt-6 space-y-2.5">
              {SIGNAL_SPRINT.notPrimaryAudience.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite/70">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-graphite/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* QUESTIONS ANSWERED */}
      <section className="border-y border-navy/10 py-16 md:py-24" style={{ backgroundColor: "#EAF0F6" }}>
        <Container>
          <SectionHeading
            eyebrow="Strategic Purpose"
            title="Five questions the Sprint answers"
            align="center"
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
            {SIGNAL_SPRINT.strategicQuestions.map((q, i) => (
              <div key={q} className="flex gap-4 border-t-4 border-eublue bg-white p-5">
                <span className="font-serif text-2xl font-bold text-eublue">{i + 1}</span>
                <p className="text-sm font-medium leading-relaxed text-navy">{q}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="How It Works" title="A focused 15-working-day process" align="center" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-4">
            {SIGNAL_SPRINT.process.map((p, i) => (
              <div key={p.phase} className="border-t-4 border-accent bg-white p-6 shadow-sm">
                <p className="font-serif text-3xl font-bold text-eublue">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-lg font-bold text-navy">{p.phase}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="scroll-mt-24 border-t border-navy/10 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="What Is Included" title="Eight components, one accountable process" />
          <div className="mt-10 space-y-10">
            {SIGNAL_SPRINT.components.map((c) => (
              <div key={c.number} className="border-b border-navy/10 pb-10 last:border-b-0">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl font-bold text-accent">{c.number}</span>
                  <h3 className="font-serif text-xl font-bold text-navy">{c.name}</h3>
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite">{c.body}</p>

                <div className="mt-5 grid gap-8 md:grid-cols-2">
                  {"includes" in c && c.includes && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">
                        Includes
                      </p>
                      <ul className="mt-3 space-y-2">
                        {c.includes.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-graphite">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"outcome" in c && c.outcome && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">
                        Outcome
                      </p>
                      <ul className="mt-3 space-y-2">
                        {c.outcome.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-graphite">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"categories" in c && c.categories && (
                    <div className="md:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">
                        Scorecard categories
                      </p>
                      <div className="mt-4">
                        <ScorecardPreview categories={c.categories} ratings={c.ratings ?? []} />
                      </div>
                      <p className="mt-4 max-w-2xl text-xs italic leading-relaxed text-graphite/70">
                        Illustrative example only. Ratings reflect a structured management
                        assessment based on information gathered during the Sprint, not a
                        scientific measurement.
                      </p>
                    </div>
                  )}

                  {"questions" in c && c.questions && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">
                        The memo answers
                      </p>
                      <ul className="mt-3 space-y-2">
                        {c.questions.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-graphite">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {"recommendations" in c && c.recommendations && (
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">
                        Possible recommendations
                      </p>
                      <ul className="mt-3 space-y-2">
                        {c.recommendations.map((item) => (
                          <li key={item} className="flex gap-2 text-sm leading-relaxed text-graphite">
                            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {"note" in c && c.note && (
                  <p className="mt-4 border-l-2 border-eublue pl-4 text-sm italic leading-relaxed text-graphite/80">
                    {c.note}
                  </p>
                )}
                {"guarantee" in c && c.guarantee && (
                  <p className="mt-4 border-l-2 border-accent pl-4 text-sm font-medium italic leading-relaxed text-graphite">
                    &ldquo;{c.guarantee}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PRICING */}
      <section className="border-t border-navy/10 py-16 md:py-24" style={{ backgroundColor: "#EAF0F6" }}>
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Pricing and Commercial Terms" title="A focused fixed fee" />
            <p className="mt-6 font-serif text-4xl font-bold text-navy">
              {SIGNAL_SPRINT.price}{" "}
              <span className="text-base font-normal text-graphite">{SIGNAL_SPRINT.priceNote}</span>
            </p>
            <ul className="mt-6 space-y-2">
              {SIGNAL_SPRINT.terms.map((t) => (
                <li key={t} className="text-sm leading-relaxed text-graphite">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-eublue">{SIGNAL_SPRINT.duration}</p>

            <div className="mt-8 border-t-4 border-accent bg-white p-6">
              <h3 className="font-serif text-lg font-bold text-navy">{SIGNAL_SPRINT.upgrade.headline}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{SIGNAL_SPRINT.upgrade.text}</p>
              <ul className="mt-4 space-y-1.5">
                {SIGNAL_SPRINT.upgrade.conditions.map((c) => (
                  <li key={c} className="text-xs leading-relaxed text-graphite/70">
                    — {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-navy">What is not included</h2>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {SIGNAL_SPRINT.exclusions.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-graphite/30" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-graphite/70">
              Third-party costs must be approved by the client before commissioning and may be
              payable in advance.
            </p>
          </div>
        </Container>
      </section>

      {/* COMPARISON */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Comparison"
            title="Three entry points, one continuous journey"
            lede="The Germany Market Signal Sprint does not replace the EU Entry Audit or the Germany Market Validation Sprint — it gives you a lower-commitment way to test fit before a larger investment."
          />
          <div className="mt-10">
            <ComparisonTable rows={OFFER_COMPARISON} />
          </div>
        </Container>
      </section>

      {/* CREDIBILITY */}
      <section className="border-t border-navy/10 py-16 md:py-24" style={{ backgroundColor: "#EAF0F6" }}>
        <Container className="max-w-3xl">
          <SectionHeading eyebrow={`About ${SITE.legalName}'s Relevant Experience`} title="Built on two decades in media, AdTech and B2B commercial roles" />
          <p className="mt-6 text-base leading-relaxed text-graphite">
            The Media and Visibility Route and Market Signal Outreach components draw on more
            than 20 years of hands-on experience across B2B media, digital publishing, enterprise
            sales, German market entry, AdTech and programmatic advertising, SaaS and platform
            business, IT-channel marketing, lead generation, media monetization, digital product
            strategy, agency and direct-client sales, and interim leadership and commercial
            transformation.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-graphite/70">
            [Placeholder: specific professional contexts — for example prior roles at named
            media, advertising or publishing companies — can be referenced here once explicitly
            approved and cleared for trademark and factual accuracy. No employer, client or
            partner logo is used without confirmed usage rights, and no past employment is
            presented as a current partnership, client relationship or endorsement.]
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-10">
            <Faq items={SIGNAL_SPRINT.faq} />
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <CtaBanner
        headline="Test Your German Market Potential"
        body="Start with a focused market signal test before committing to a full German operation."
        primary={{ href: "/contact#eu-readiness", label: "Test Your German Market Potential" }}
        secondary={{ href: "/services", label: "Compare All Programs" }}
      />
    </>
  );
}
