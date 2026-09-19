import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Canada EU Entry, by OneTitel, is an independent market-entry consultancy based in Germany, led by Oliver Markus Müller — 20+ years in international sales, digital business and go-to-market strategy.",
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
          </div>
        </Container>
      </section>

      <section className="border-y border-navy/10 bg-offwhite py-16 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            Network &amp; Expertise
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-navy md:text-3xl">
            A network built across industries, not just one CV
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite">
            More than 20 years of international sales, go-to-market and digital-business work
            leave behind more than a career history — they leave a working network of industry
            contacts, former colleagues and specialist partners. OneTitel draws on that network
            for every engagement, with particular depth in the sectors most relevant to Canadian
            companies entering Germany and the EU:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "FMCG", note: "Fast-moving consumer goods" },
              { label: "IT & CE", note: "IT and consumer electronics" },
              { label: "Mechanical Engineering", note: "Maschinenbau" },
              { label: "Automotive", note: "Automotive supply and OEM" },
              { label: "Digital & Media", note: "AdTech, SaaS and platforms" },
            ].map((sector) => (
              <div
                key={sector.label}
                className="border border-navy/15 bg-white p-5 text-center"
              >
                <p className="font-serif text-base font-bold leading-tight text-navy">
                  {sector.label}
                </p>
                <p className="mt-2 text-xs leading-snug text-graphite/70">{sector.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-graphite">
            OneTitel also maintains an ongoing exchange with two professors at German
            universities, who contribute an academic and research perspective — particularly on
            digital transformation, innovation management and international business — alongside
            the hands-on commercial work of each client engagement.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <div className="prose-onetitel">
            <h2>Oliver Markus Müller — Founder &amp; Managing Consultant</h2>
            <p>
              Canada EU Entry is led by Oliver Markus Müller, founder of OneTitel and the principal
              consultant behind every engagement. He brings more than 20 years of international
              experience in sales, go-to-market strategy and digital business — spanning AdTech,
              SaaS, media and platform companies — including senior and interim leadership roles
              with P&amp;L responsibility of up to €8 million and disciplinary leadership of teams
              of up to seven people.
            </p>
            <p>
              His background covers enterprise sales and key account management, market-entry and
              go-to-market strategy, business development and revenue scaling, programmatic
              advertising and data-driven marketing, and agile project and organizational
              leadership. Over his career he has led go-to-market, sales and commercialization
              mandates — as both an employee and an interim/consulting lead — for companies
              including Amazon Advertising Germany, ProSiebenSat.1 Media SE / Seven.One / Glomex,
              AOL Germany / Yahoo! Deutschland (Verizon Media), Handelsblatt Media Group (iq
              digital), Vibrant Media, ADventori (Paris/Frankfurt), The Channel Company (CRN
              Germany), Vogel IT-Medien, WESER-KURIER and publish-industry Verlag. These are past
              employment, interim-management or consulting engagements, not current partnerships,
              client relationships or endorsements, and are named here solely as professional
              background.
            </p>
            <p>
              He is a{" "}
              <strong>BAFA-listed management consultant</strong>, registered with Germany&rsquo;s
              Federal Office for Economic Affairs and Export Control (BAFA) for subsidized SME
              consulting (Beratungsförderung), and holds a research-and-development certification
              (Forschungszulage) seal for an AI-driven project. He is also a certified Scrum
              Master and Product Owner, a Systemic Coach (QRC), a certified mediator
              (ZMediatAusbV), and a Digital Transformation Manager (AI), and is the author of two
              publications on digital marketing and transformation:{" "}
              <em>The Digital Utopia — How Online Marketing Creates a New Paradigm</em> and{" "}
              <em>Opportunities of Digital Transformation</em>.
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/oliver-m-mueller/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-eublue underline underline-offset-2"
              >
                Connect on LinkedIn
              </a>
            </p>

            <h2>Operating basis</h2>
            <p>
              Canada EU Entry currently operates on a freelance / sole-proprietor basis under
              OneTitel (Oliver Markus Müller), based in Kirchweiler, Rhineland-Palatinate,
              Germany. Oliver Markus Müller is the principal consultant and the person responsible
              for this website&rsquo;s content. The full registered business address and contact
              details are provided in the{" "}
              <a href="/legal-notice" className="text-eublue underline underline-offset-2">
                Legal Notice
              </a>
              .
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
