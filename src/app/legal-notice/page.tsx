import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice (Impressum) for Canada EU Entry / OneTitel.",
  alternates: { canonical: "/legal-notice" },
  robots: { index: true, follow: true },
};

export default function LegalNoticePage() {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/legal-notice", label: "Legal Notice" }]} />
        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy">
          Legal Notice (Impressum)
        </h1>
        <p className="mt-2 text-sm font-medium uppercase tracking-wider text-accent">
          Draft — the dispute-resolution and liability sections still require review by a
          qualified German professional before publication
        </p>

        <div className="prose-onetitel mt-8">
          <h2>Information pursuant to Section 5 TMG</h2>
          <p>
            Oliver Markus Müller
            <br />
            trading as &ldquo;Canada EU Entry&rdquo; / &ldquo;OneTitel&rdquo;
            <br />
            Am Bruchborn 6
            <br />
            54570 Kirchweiler, Germany
          </p>

          <h2>Contact</h2>
          <p>Email: euentry@onetitel.de</p>

          <h2>VAT identification number</h2>
          <p>
            VAT identification number pursuant to Section 27a of the German VAT Act (UStG):
            DE 326064654
          </p>

          <h2>Responsible for content pursuant to Section 18(2) MStV</h2>
          <p>
            Oliver Markus Müller
            <br />
            Am Bruchborn 6, 54570 Kirchweiler, Germany
          </p>

          <h2>Professional description</h2>
          <p>
            Canada EU Entry / OneTitel operates as a market-entry consultancy and agency. It is
            not a law firm, tax advisory practice, notary, customs broker or government body, and
            does not claim official affiliation with Canada, Germany, the European Union, CETA,
            Germany Trade &amp; Invest, any chamber of commerce, or any trade commissioner
            service.
          </p>

          <h2>Dispute resolution</h2>
          <p>
            [Placeholder: standard EU online dispute resolution (ODR) platform link and
            consumer-dispute statement, to be confirmed with a qualified professional based on
            applicability.]
          </p>

          <h2>Liability for content and links</h2>
          <p>
            [Placeholder: standard German liability disclaimer language for website content and
            external links, to be drafted or reviewed by a qualified German lawyer.]
          </p>
        </div>
      </Container>
    </section>
  );
}
