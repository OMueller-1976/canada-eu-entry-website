import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { SERVICES, getServiceBySlug } from "@/content/services";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.summary,
    provider: { "@type": "Organization", name: SITE.brand, alternateName: SITE.legalName },
    areaServed: ["DE", "EU"],
    audience: { "@type": "BusinessAudience", audienceType: "Canadian B2B companies" },
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: `/services/${service.slug}`, label: service.name },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              {service.stage}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">{service.purpose}</p>
            <p className="mt-4 text-lg font-medium text-navy">{service.priceLabel}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-serif text-xl font-semibold text-navy">Indicative scope</h2>
            <ul className="mt-6 space-y-3">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-eublue" />
                  {item}
                </li>
              ))}
            </ul>

            {service.exclusions && (
              <>
                <h2 className="mt-10 font-serif text-xl font-semibold text-navy">
                  Not included in this fee
                </h2>
                <ul className="mt-6 space-y-3">
                  {service.exclusions.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                      <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {service.disclaimer && (
              <p className="mt-8 border-l-2 border-eublue pl-4 text-sm italic leading-relaxed text-graphite">
                {service.disclaimer}
              </p>
            )}
          </div>

          <aside className="h-fit border border-navy/15 bg-white p-6">
            <h2 className="font-serif text-lg font-semibold text-navy">Commercial terms</h2>
            <ul className="mt-4 space-y-2">
              {service.terms.map((term) => (
                <li key={term} className="text-sm leading-relaxed text-graphite">
                  {term}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-graphite/70">
              Third-party fees and disbursements, where applicable, are always invoiced
              separately. Exact terms are confirmed in the individual proposal.
            </p>
          </aside>
        </Container>
      </section>

      <CtaBanner
        headline={`Ready to discuss the ${service.name}?`}
        body="Book an initial conversation and we will confirm scope, timeline and fit for your company."
      />
    </>
  );
}
