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
          Content below is complete based on information currently available; a final review by
          a qualified German lawyer is still recommended before publication
        </p>

        <div className="prose-onetitel mt-8">
          <h2>Information pursuant to Section 5 DDG</h2>
          <p className="text-sm text-graphite/70">
            (The German Telemedia Act &ndash; TMG &ndash; was replaced by the Digital Services
            Act &ndash; Digitale-Dienste-Gesetz, DDG &ndash; on 14 May 2024; the equivalent
            information duty is now found in Section 5 DDG.)
          </p>
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
            The European Commission&rsquo;s online dispute resolution (ODR) platform was
            discontinued on 20 July 2025 and is no longer operational; this notice accordingly
            does not link to it. Pursuant to Section 36 of the German Act on Alternative Dispute
            Resolution in Consumer Matters (Verbraucherstreitbeilegungsgesetz, VSBG), we are not
            obliged to participate, and are not willing to participate, in dispute-resolution
            proceedings before a consumer arbitration board (Verbraucherschlichtungsstelle).
          </p>

          <h2>Liability for content</h2>
          <p>
            As a service provider, we are responsible for our own content on these pages under
            the general laws (Section 7(1) DDG). We are not obliged, however, to monitor
            transmitted or stored third-party information, or to investigate circumstances
            indicating unlawful activity (Sections 8&ndash;10 DDG). Obligations to remove or
            block the use of information under general law remain unaffected. Any liability in
            this regard, however, is only possible from the point in time at which we become
            aware of a specific infringement. Upon becoming aware of any such legal violations,
            we will remove the relevant content immediately.
          </p>

          <h2>Liability for links</h2>
          <p>
            Our website contains links to external third-party websites, over whose content we
            have no influence. We therefore cannot accept any liability for this third-party
            content. The respective provider or operator of the linked pages is always
            responsible for their content. The linked pages were checked for possible legal
            violations at the time of linking; no unlawful content was identifiable at that time.
            Permanent monitoring of the content of linked pages is not reasonable without
            concrete evidence of a violation of the law. Upon becoming aware of any legal
            violations, we will remove such links immediately.
          </p>

          <h2>Copyright</h2>
          <p>
            The content and works created by the site operator on these pages are subject to
            German copyright law. Duplication, editing, distribution and any kind of exploitation
            outside the limits of copyright law require the written consent of the respective
            author or creator. Downloads and copies of this site are only permitted for private,
            non-commercial use. Insofar as the content on this site was not created by the
            operator, third-party copyrights are respected; in particular, third-party content is
            marked as such. Should you nonetheless become aware of a copyright infringement,
            please notify us accordingly; upon becoming aware of any legal violations, we will
            remove such content immediately.
          </p>
        </div>
      </Container>
    </section>
  );
}
