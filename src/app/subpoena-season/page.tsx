import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subpoena Season – The Satirical Midterms Game for iPhone",
  description:
    "Subpoena Season is a satirical prediction game for iPhone: pick your investigative committee targets, follow the Daily Playbook, shave a Beardo and rename the Lincoln Memorial. Parody. Not legal advice.",
  alternates: { canonical: "/subpoena-season" },
  openGraph: {
    title: "Subpoena Season – Satire for the Midterms",
    description: "Pick your picks. Call your witnesses. Keep the receipts. A political parody game for iPhone.",
    url: `${SITE.url}/subpoena-season`,
  },
};

const FEATURES = [
  {
    icon: "🃏",
    title: "The Witness Deck",
    text: "21 caricatured public figures as collectible cards. Flip them for the satirical back: public record, sourced controversies, zero invented quotes. Tap for fullscreen so even the fine print is readable.",
  },
  {
    icon: "📜",
    title: "Your Picks",
    text: "Choose the people your imaginary investigative committee calls first. Pick a topic, a time window, or write your own reason (80 characters of pure oversight).",
  },
  {
    icon: "📰",
    title: "The Daily Playbook",
    text: "Every day, a recurring move from the political repertoire: the rename, the tariff, the announced check, the “Blame Biden, then Obama” classic. Each entry comes with a source. Satire needs receipts.",
  },
  {
    icon: "🗂️",
    title: "Epstein Memory",
    text: "A 3×3 memory game in which every tile is the same redacted document. Match them all and the law passes, and we still know nothing more. Documents only. No persons, no victims.",
  },
  {
    icon: "🪒",
    title: "Shave a Beardo",
    text: "Drag to shave. Hit 96 % and you are officially REGULATION COMPLIANT. Beat your best time.",
  },
  {
    icon: "🇨🇦",
    title: "Canada Special",
    text: "Rename the 50 states on an interactive map, swap landmarks, and share the result. Friendly, polite, slightly smug. Sorry in advance.",
  },
  {
    icon: "🎴",
    title: "Your Own Candidates",
    text: "Create custom cards with your own photo, name and title. They stay on your device. Be fair, be funny, be lawful (see Community Rules).",
  },
  {
    icon: "🔔",
    title: "Witness Notices",
    text: "Every fifth launch the app serves an important notice to the summoned. Nothing a real lawyer would sign.",
  },
];

const FAQ = [
  ["Is this real?", "No. It is political satire and parody. It does not claim that any depicted person committed a crime. It is a game."],
  ["Can I win money?", "No. No real-money bets, no stakes, no prizes. Bragging rights only, and those are non-transferable."],
  ["Who is behind it?", "An independent developer in Germany. Not affiliated with any government, party, campaign or depicted person."],
  ["Is it on Android?", "Not yet. iPhone first, because we have a deadline called November 3."],
  ["Will there be leagues with friends?", "Yes, planned for a post-election update: private leagues, invite links, leaderboards. League Pass is a one-time in-app purchase, also required for invited friends."],
  ["What does it cost?", "One-time purchase on the App Store. No ads, no tracking, no subscription."],
];

export default function SubpoenaSeasonPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Subpoena Season",
    operatingSystem: "iOS 17+",
    applicationCategory: "GameApplication",
    description: "A political satire and prediction game for iPhone.",
    url: `${SITE.url}/subpoena-season`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-navy py-16 text-offwhite md:py-24">
        <Container>
          <div className="text-offwhite/70 [&_a]:text-offwhite/70 [&_span]:text-offwhite">
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/subpoena-season", label: "Subpoena Season" }]} />
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-accent">
            A satirical game for iPhone · Midterms 2026
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold md:text-6xl">
            Subpoena Season
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-offwhite/85 md:text-xl">
            Congress changes hands. The paperwork piles up. You choose who gets called first.
            Pick your witnesses, follow the Daily Playbook, shave a Beardo and rename the
            Lincoln Memorial. Accountability, but make it a game.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold text-offwhite">
              Coming to the App Store
            </span>
            <a
              href="#features"
              className="inline-block rounded border border-offwhite/40 px-6 py-3 text-sm font-semibold text-offwhite hover:bg-offwhite/10"
            >
              See what is in the box
            </a>
          </div>
          <p className="mt-6 max-w-2xl text-xs text-offwhite/60">
            Parody and satire. Not news, not legal advice, no allegations of fact. Any resemblance
            to real events is what happens when reality refuses to be subtle.
          </p>
        </Container>
      </section>

      <section id="features" className="py-16 md:py-20">
        <Container>
          <h2 className="font-serif text-3xl font-semibold text-navy">What is in the box</h2>
          <p className="mt-3 max-w-2xl text-graphite">
            One app. One deadline. Eight ways to feel mildly better about the news cycle.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-lg border border-navy/10 bg-navy-50 p-6">
                <p className="text-3xl" aria-hidden="true">{f.icon}</p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-50 py-16 md:py-20">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy">How a season works</h2>
            <ol className="mt-6 space-y-4 text-graphite">
              <li><strong>1. Choose your picks.</strong> Your first call list for the investigative committee.</li>
              <li><strong>2. Read the Playbook.</strong> Each day brings a documented move, with its source.</li>
              <li><strong>3. Score the day.</strong> Verified events count. Opinions do not. Receipts or it did not happen.</li>
              <li><strong>4. Play, share, rename.</strong> Games and the Canada Special for the long weeks in between.</li>
            </ol>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy">Our ground rules</h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-graphite">
              <li>Satire of public conduct, never of private people.</li>
              <li>No invented quotes. No claims of guilt. Sources or silence.</li>
              <li>No real-money gambling. No prizes. No ads. No tracking.</li>
              <li>Your own cards are for your device, and they must be lawful.</li>
            </ul>
            <p className="mt-6 text-sm">
              <Link className="underline" href="/subpoena-season/rules">Read the Community Rules</Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold text-navy">Questions, answered under oath</h2>
          <dl className="mt-8 space-y-6">
            {FAQ.map(([q, a]) => (
              <div key={q}>
                <dt className="font-semibold text-navy">{q}</dt>
                <dd className="mt-1 text-graphite">{a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-navy/10 py-12">
        <Container>
          <h2 className="font-serif text-xl font-semibold text-navy">The fine print (the actual one)</h2>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <li><Link className="underline" href="/subpoena-season/support">Support</Link></li>
            <li><Link className="underline" href="/subpoena-season/terms">Terms of Use</Link></li>
            <li><Link className="underline" href="/subpoena-season/privacy">Privacy Policy</Link></li>
            <li><Link className="underline" href="/subpoena-season/rules">Community Rules &amp; Takedown</Link></li>
            <li><Link className="underline" href="/legal-notice">Legal Notice (Impressum)</Link></li>
          </ul>
          <p className="mt-6 max-w-3xl text-xs text-graphite/70">
            Subpoena Season is an independent political satire and prediction game. It is not
            affiliated with, endorsed by or connected to any government, agency, political party,
            campaign or any person depicted. Depictions are caricatures and parody. Statements in
            the app refer to publicly reported events and are marked with sources; they are not
            allegations of fact or of criminal conduct. All persons are presumed innocent.
          </p>
        </Container>
      </section>
    </>
  );
}
