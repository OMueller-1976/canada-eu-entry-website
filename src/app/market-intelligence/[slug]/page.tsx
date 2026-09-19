import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Article",
  robots: { index: false, follow: true },
};

// Reusable article template for Market Intelligence content.
// No articles are published yet — this route renders a structural placeholder
// so editors can see the intended layout before real content is added.
export default function MarketIntelligenceArticleTemplate({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/market-intelligence", label: "Market Intelligence" },
            { href: `/market-intelligence/${params.slug}`, label: "Article" },
          ]}
        />
        <div className="prose-onetitel mt-8">
          <h1 className="font-serif text-3xl font-semibold text-navy">
            [Article title placeholder]
          </h1>
          <p className="text-sm text-graphite/70">
            [Category] · [Publish date] · [Author]
          </p>
          <p>
            This is the reusable template for Market Intelligence articles. Replace this
            placeholder with the article body once content is written and reviewed. Do not
            publish a real-looking date or byline until the article actually exists.
          </p>
        </div>
      </Container>
    </section>
  );
}
