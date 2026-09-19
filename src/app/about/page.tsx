import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Canada EU Entry, by OneTitel, is an independent market-entry consultancy based in Germany, combining strategic advisory, commercial implementation and market intelligence for Canadian companies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">About</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              Independent, Germany-based, and focused on one thing
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="prose-onetitel">
            <p>
              Canada EU Entry, operated by OneTitel, is an independent market-entry consultancy
              based in Germany. It combines strategic advisory, commercial implementation and
              market intelligence for Canadian companies entering Germany and the European Union.
            </p>
            <p>
              The consultancy is specialized rather than generalist: its focus is the specific
              commercial journey of established Canadian B2B companies moving from domestic
              success to a validated, sales-ready German operation. That focus shapes everything
              from the service structure to the industries covered.
            </p>
            <p>
              Regulated services — legal, tax, notarial and customs work — are never provided
              directly. Where an engagement requires that expertise, Canada EU Entry coordinates
              trusted, appropriately licensed independent professionals, and keeps their fees and
              scope clearly separate from its own.
            </p>
            <h2>Operating basis</h2>
            <p>
              Canada EU Entry currently operates on a freelance / sole-proprietor basis under
              OneTitel. [Placeholder: legal personal name of the responsible natural person]
              is the principal consultant and the person responsible for this website&rsquo;s content.
              [Placeholder: registered business address] and [placeholder: contact details] are
              provided in the Legal Notice.
            </p>
            <p className="text-sm text-graphite/70">
              [Editorial note: do not describe the business as a GmbH, do not use the title
              &ldquo;Managing Director,&rdquo; and do not reference offices, employees or partnerships unless
              and until these are factually accurate and confirmed by the business owner.]
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        headline="Want to talk before committing to an engagement?"
        body="Book an initial conversation — there's no obligation, and it's the fastest way to find out whether we're a fit."
      />
    </>
  );
}
