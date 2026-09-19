import Link from "next/link";
import Container from "./Container";
import { FOOTER_LINKS, NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-navy text-offwhite">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-lg font-semibold uppercase">{SITE.brand}</p>
          <p className="mt-1 text-sm text-offwhite/60">{SITE.byline}</p>
          <p className="mt-1 text-sm uppercase tracking-wider text-offwhite/60">
            {SITE.descriptor}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-offwhite/80">
            {SITE.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-offwhite/60">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-offwhite/85 hover:text-offwhite">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-offwhite/60">
            Company
          </p>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-offwhite/85 hover:text-offwhite">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-offwhite/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-offwhite/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. General information only — not legal, tax
            or customs advice.
          </p>
          <p>Based in Germany, serving Canadian companies entering the European Union.</p>
        </Container>
      </div>
    </footer>
  );
}
