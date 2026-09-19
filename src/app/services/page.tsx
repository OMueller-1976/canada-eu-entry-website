import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import SignalSprintTeaser from "@/components/SignalSprintTeaser";
import ComparisonTable from "@/components/ComparisonTable";
import { SERVICES } from "@/content/services";
import { OFFER_COMPARISON } from "@/content/signal-sprint";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Market-entry services for Canadian B2B companies entering Germany and the EU: the Germany Market Signal Sprint, EU Entry Audit, Germany Market Validation Sprint, German Entity Launch, German Commercial Launch and the Germany Market Office.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Services</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              Modular support across the full market-entry journey
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Every engagement maps to one of three stages — Validate, Establish or Grow — so you
              can start where you are and add the next stage only once it is justified.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured low-commitment entry point */}
      <SignalSprintTeaser />

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Full Program Catalog"
            title="All engagements, from Validate to Grow"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Comparison"
            title="Choosing between the three entry-level programs"
            lede="The Germany Market Signal Sprint, EU Entry Audit and Germany Market Validation Sprint answer different questions at different levels of commitment — they are not interchangeable."
          />
          <div className="mt-10">
            <ComparisonTable rows={OFFER_COMPARISON} />
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 py-16 md:py-24" style={{ backgroundColor: "#EFEDE6" }}>
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="A Note on Scope"
            title="Advisory, implementation and third-party services are kept distinct"
          />
          <p className="mt-6 text-sm leading-relaxed text-graphite">
            Canada EU Entry, operated by OneTitel, provides market-entry advisory, agency
            coordination and commercial implementation. We are not a law firm, tax advisory
            practice, notary or customs broker. Where regulated legal, tax, notarial or customs
            work is required, we coordinate appropriately licensed independent professionals on
            your behalf and keep those costs separate from our own fees.
          </p>
        </Container>
      </section>

      <CtaBanner
        headline="Not sure which program fits your stage?"
        body="Most companies testing Germany for the first time start with the Signal Sprint or the EU Entry Audit. Book an initial conversation and we will recommend the right starting point."
      />
    </>
  );
}
