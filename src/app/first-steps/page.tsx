import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChapterBlocks from "@/components/ChapterBlocks";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { CHAPTERS, GUIDE_TITLE } from "@/content/first-steps";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: GUIDE_TITLE,
  description:
    "A practical, 14-chapter guide for Canadian companies entering Germany and the European Union: the EU, why Germany, business culture, CETA, market selection, entry models, regulation, company formation and a first-100-days roadmap.",
  alternates: { canonical: "/first-steps" },
};

export default function FirstStepsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: GUIDE_TITLE,
    author: { "@type": "Organization", name: SITE.brand, alternateName: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.brand },
    articleSection: "Market Entry Guide",
    // TODO: set a real datePublished once the guide is finalized for launch.
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/first-steps", label: "First Steps" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">
              First Steps
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              {GUIDE_TITLE}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              A practical reference for Canadian founders, executives and expansion leads
              evaluating Germany and the European Union — useful on its own, whether or not you
              ever work with us.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-wider text-graphite/70">
              Chapters
            </p>
            <nav aria-label="Guide chapters" className="mt-4">
              <ol className="space-y-2 text-sm">
                {CHAPTERS.map((chapter) => (
                  <li key={chapter.id}>
                    <a
                      href={`#${chapter.id}`}
                      className="text-graphite hover:text-navy hover:underline"
                    >
                      {chapter.number}. {chapter.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <Link
              href="/contact#eu-readiness"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-sm font-medium text-offwhite hover:bg-navy-700"
            >
              Request an EU Entry Audit
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-graphite/70">
              Canadian B2B technology, media, AdTech or SaaS company?{" "}
              <Link href="/germany-market-signal-sprint" className="font-medium text-accent hover:underline">
                The Germany Market Signal Sprint
              </Link>{" "}
              is a lower-commitment way to test fit first.
            </p>
          </aside>

          <div>
            {CHAPTERS.map((chapter) => (
              <article key={chapter.id} id={chapter.id} className="mb-16 scroll-mt-28 border-b border-navy/10 pb-16 last:border-b-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-eublue">
                  Chapter {chapter.number}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-navy">
                  {chapter.title}
                </h2>
                <div className="mt-6">
                  <ChapterBlocks blocks={chapter.blocks} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        headline="Ready to move from reading to validating?"
        body="Request an EU Entry Audit and get a management-level, evidence-based view of your German and EU opportunity."
      />
    </>
  );
}
