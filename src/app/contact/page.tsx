import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Canada EU Entry to assess your EU readiness or book an initial conversation about market entry into Germany and the European Union.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-offwhite py-14">
        <Container>
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/contact", label: "Contact" }]} />
          <div className="mt-6 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Contact</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl">
              Let&rsquo;s assess whether Europe is your next market
            </h1>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Use the form to test your German market potential, request an EU Entry Audit, or
              book an initial conversation. We respond to every serious inquiry personally.
            </p>
          </div>
        </Container>
      </section>

      <section id="eu-readiness" className="scroll-mt-24 py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <form className="space-y-5" action={`mailto:${SITE.email}`} method="post" encType="text/plain">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-navy">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-navy">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-navy">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy">
                  Business email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-navy">
                  Website
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://"
                  className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-navy">
                  Industry
                </label>
                <input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="e.g., B2B SaaS, AdTech, Cybersecurity"
                  className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
                />
              </div>
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-navy">
                  Current annual revenue range
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  className="mt-2 w-full rounded-sm border border-navy/20 bg-white px-4 py-2.5 text-sm focus-visible:outline-eublue"
                >
                  <option>Under CAD $1M</option>
                  <option>CAD $1M–$5M</option>
                  <option>CAD $5M–$20M</option>
                  <option>CAD $20M–$50M</option>
                  <option>Over CAD $50M</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="product" className="block text-sm font-medium text-navy">
                Primary product or service
              </label>
              <input
                id="product"
                name="product"
                type="text"
                className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
              />
            </div>

            <div>
              <label htmlFor="markets" className="block text-sm font-medium text-navy">
                Existing international markets
              </label>
              <input
                id="markets"
                name="markets"
                type="text"
                placeholder="e.g., Canada, U.S., UK"
                className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
              />
            </div>

            <div>
              <label htmlFor="whyGermany" className="block text-sm font-medium text-navy">
                Why Germany or the EU?
              </label>
              <textarea
                id="whyGermany"
                name="whyGermany"
                rows={3}
                className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-navy">
                  Preferred market-entry timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="mt-2 w-full rounded-sm border border-navy/20 bg-white px-4 py-2.5 text-sm focus-visible:outline-eublue"
                >
                  <option>Immediately</option>
                  <option>Within 3 months</option>
                  <option>3–6 months</option>
                  <option>6–12 months</option>
                  <option>Exploratory — no fixed timeline</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-navy">
                  Available market-entry budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="mt-2 w-full rounded-sm border border-navy/20 bg-white px-4 py-2.5 text-sm focus-visible:outline-eublue"
                >
                  <option>Under CAD $9,000</option>
                  <option>CAD $9,000–$27,000</option>
                  <option>CAD $27,000–$70,000</option>
                  <option>Over CAD $70,000</option>
                  <option>Not yet determined</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-navy">
                What are you interested in?
              </label>
              <select
                id="interest"
                name="interest"
                className="mt-2 w-full rounded-sm border border-navy/20 bg-white px-4 py-2.5 text-sm focus-visible:outline-eublue"
              >
                <option>Germany Market Signal Sprint</option>
                <option>EU Entry Audit</option>
                <option>Germany Market Validation Sprint</option>
                <option>German Entity Launch</option>
                <option>German Commercial Launch</option>
                <option>Germany Market Office</option>
                <option>German Media Monetization Audit</option>
                <option>Not sure yet — general conversation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-sm border border-navy/20 px-4 py-2.5 text-sm focus-visible:outline-eublue"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 rounded-sm border-navy/30 focus-visible:outline-eublue"
              />
              <label htmlFor="consent" className="text-sm leading-relaxed text-graphite">
                I agree that Canada EU Entry / OneTitel may contact me about this inquiry. See the{" "}
                <a href="/privacy-policy" className="text-eublue underline-offset-2 hover:underline">
                  Privacy Policy
                </a>{" "}
                for details.
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:bg-accent-700"
            >
              Send inquiry
            </button>
            <p className="text-xs text-graphite/70">
              [Implementation note: replace this mailto-based form with a proper form handler
              (e.g., a serverless function or form service) with spam protection before launch.]
            </p>
          </form>

          <aside className="h-fit border border-navy/15 bg-white p-6 text-sm text-graphite">
            <p className="font-serif text-lg font-semibold text-navy">Direct contact</p>
            <p className="mt-3">
              Email: <span className="text-navy">euentry@onetitel.de</span>
            </p>
            <p className="mt-2">
              Address: <span className="text-navy">Am Bruchborn 6, 54570 Kirchweiler, Germany</span>
            </p>
            <p className="mt-2">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/oliver-m-mueller/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-eublue underline underline-offset-2"
              >
                Oliver M. Müller
              </a>
            </p>
            <p className="mt-5 text-xs text-graphite/70">
              Full legal contact details are published in the Legal Notice.
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
