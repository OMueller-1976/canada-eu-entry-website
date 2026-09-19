import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "./Button";
import Container from "./Container";
import { SIGNAL_SPRINT } from "@/content/signal-sprint";

export default function SignalSprintTeaser() {
  return (
    <section className="border-y-4 border-eublue bg-white py-16 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-accent">
            Easy Entry Program
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl">
            {SIGNAL_SPRINT.claim}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite">{SIGNAL_SPRINT.supportingLine}</p>
          <p className="mt-4 text-sm text-graphite/70">
            Built for Canadian B2B technology, media, AdTech, MarTech and SaaS companies — a
            focused market test that sits before the EU Entry Audit, not a replacement for it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contact#eu-readiness">Test Your German Market Potential</PrimaryButton>
            <SecondaryButton href={`/${SIGNAL_SPRINT.slug}`}>View Sprint Details</SecondaryButton>
          </div>
        </div>

        <div className="border-t-4 border-accent bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-graphite/60">
            Germany Market Signal Sprint
          </p>
          <p className="mt-3 font-serif text-4xl font-bold text-navy">{SIGNAL_SPRINT.price}</p>
          <p className="text-xs text-graphite/70">{SIGNAL_SPRINT.priceNote}</p>
          <p className="mt-4 text-sm font-semibold text-eublue">{SIGNAL_SPRINT.duration}</p>
          <ul className="mt-5 space-y-1.5 text-sm text-graphite">
            <li>— Localized positioning &amp; one-pager</li>
            <li>— Industry ecosystem map</li>
            <li>— Two executive interviews with target-industry decision-makers</li>
            <li>— Market Signal Scorecard &amp; decision memo</li>
          </ul>
          <Link
            href={`/${SIGNAL_SPRINT.slug}`}
            className="mt-5 inline-flex items-center text-sm font-medium text-accent hover:underline"
          >
            Full scope and terms →
          </Link>
        </div>
      </Container>
    </section>
  );
}
