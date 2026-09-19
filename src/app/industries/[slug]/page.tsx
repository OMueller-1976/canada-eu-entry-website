import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import { INDUSTRIES, getIndustryBySlug } from "@/content/industries";

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.whyGermany,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  return (
    <>
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/industries", label: "Industries" },
              { href: `/industries/${industry.slug}`, label: industry.name },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Industry</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              {industry.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">{industry.whyGermany}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy">Common entry barriers</h2>
            <ul className="mt-6 space-y-3">
              {industry.barriers.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-xl font-semibold text-navy">What we can coordinate</h2>
            <ul className="mt-6 space-y-3">
              {industry.coordination.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-graphite/70">
              We coordinate with specialist partners on sector-specific regulatory and compliance
              questions rather than claiming that expertise ourselves.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        headline={`Considering ${industry.name.toLowerCase()} for your EU entry?`}
        body="Start with an EU Entry Audit to validate demand and identify the entry model that fits your sector."
      />
    </>
  );
}
