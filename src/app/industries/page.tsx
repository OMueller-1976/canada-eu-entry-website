import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndustryCard from "@/components/IndustryCard";
import CtaBanner from "@/components/CtaBanner";
import { INDUSTRIES } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Sectors where Canada–EU commercial alignment is strongest: technology and AI, cybersecurity, advanced manufacturing, defence and aerospace, clean technology, critical minerals, and medtech.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/industries", label: "Industries" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Industries</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              Sectors where Canada–EU alignment is strongest
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              These are the sectors where we most often see genuine commercial fit between
              established Canadian companies and the German and EU market. Each page outlines why
              Germany may be attractive, the common entry barriers, and what we can coordinate.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        headline="Don't see your sector listed?"
        body="We work with established Canadian B2B companies across other sectors as well. Book a conversation and we'll assess fit honestly."
      />
    </>
  );
}
