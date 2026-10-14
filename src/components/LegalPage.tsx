import type { ReactNode } from "react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AppLegalPage({
  path,
  label,
  title,
  note,
  children,
}: {
  path: string;
  label: string;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-2xl">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/subpoena-season", label: "Subpoena Season" },
            { href: path, label },
          ]}
        />
        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy">{title}</h1>
        {note && (
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-accent">{note}</p>
        )}
        <div className="prose-onetitel mt-8">{children}</div>
        <p className="mt-10 text-sm text-graphite/70">
          Last updated: October 2026 ·{" "}
          <a className="underline" href="/subpoena-season">Back to Subpoena Season</a> ·{" "}
          <a className="underline" href="/legal-notice">Legal Notice (Impressum)</a>
        </p>
      </Container>
    </section>
  );
}
