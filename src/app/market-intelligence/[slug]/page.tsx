import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import ChapterBlocks from "@/components/ChapterBlocks";
import { getArticleBySlug, ARTICLES } from "@/content/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return { title: "Article", robots: { index: false, follow: true } };
  }
  return {
    title: article.title,
    description: article.dek,
    alternates: { canonical: `/market-intelligence/${article.slug}` },
  };
}

export default function MarketIntelligenceArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    // Reusable article template for Market Intelligence content that has not been written yet.
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

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/market-intelligence", label: "Market Intelligence" },
            { href: `/market-intelligence/${article.slug}`, label: article.title },
          ]}
        />
        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            {article.category}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-graphite/70">
            {article.publishDate} · {article.author}
          </p>
          <p className="mt-4 text-base leading-relaxed text-graphite">{article.dek}</p>
        </div>

        <div className="mt-8">
          <ChapterBlocks blocks={article.blocks} />
        </div>

        <div className="mt-10 border-t border-navy/10 pt-6">
          <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">Sources</p>
          <ul className="mt-3 space-y-1.5 text-xs text-graphite/70">
            {article.sources.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-eublue underline underline-offset-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
