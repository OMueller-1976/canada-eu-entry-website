import type { Metadata } from "next";
import AppLegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subpoena Season Community Rules & Takedown",
  description: "Community rules, content standards and takedown process for Subpoena Season.",
  alternates: { canonical: "/subpoena-season/rules" },
};

export default function Page() {
  return (
    <AppLegalPage
      path="/subpoena-season/rules"
      label="Community Rules"
      title="Community Rules & Takedown"
    >
      <h2>Satire, yes. Smears, no.</h2>
      <p>
        Subpoena Season is political satire about public figures and their public conduct. To
        keep it that way, content you create (custom cards, names, reasons) must follow these
        rules.
      </p>
      <h3>Not allowed</h3>
      <ul>
        <li>Private individuals as targets (neighbours, colleagues, exes, classmates).</li>
        <li>Minors, nudity, sexual content, graphic violence, calls for violence or threats.</li>
        <li>Hate speech or harassment based on race, religion, origin, gender, orientation, disability or similar traits.</li>
        <li>Invented quotes presented as real; statements of criminal conduct presented as fact.</li>
        <li>Impersonation: using a real person&rsquo;s name or photo to appear as that person.</li>
        <li>Images you do not have the right to use.</li>
        <li>Personal data: addresses, phone numbers, family members, medical details.</li>
      </ul>
      <h3>Encouraged</h3>
      <ul>
        <li>Exaggeration of public, documented conduct, clearly recognisable as humour.</li>
        <li>Naming the source. Receipts make better jokes.</li>
      </ul>

      <h2>Report or takedown request</h2>
      <p>
        If you believe content in the App or on this site is unlawful, inaccurate or violates
        your rights, email <a href={`mailto:${SITE.email}?subject=Subpoena%20Season%20Takedown`}>{SITE.email}</a> with:
      </p>
      <ul>
        <li>your name and contact details;</li>
        <li>the card, text or screen concerned (screenshot or description);</li>
        <li>why you believe it is unlawful or incorrect, with supporting evidence;</li>
        <li>for copyright: proof that you are the rights holder.</li>
      </ul>
      <p>
        We review notices promptly, correct factual errors, and remove or change content where
        appropriate. We may remove user content and restrict features for violations of these
        rules.
      </p>
    </AppLegalPage>
  );
}
