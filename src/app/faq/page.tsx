import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about EU market entry, CETA, German entity formation and working with Canada EU Entry.",
  alternates: { canonical: "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/faq", label: "FAQ" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">FAQ</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              Frequently asked questions
            </h1>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <Faq items={FAQ_ITEMS} />
        </Container>
      </section>
    </>
  );
}
