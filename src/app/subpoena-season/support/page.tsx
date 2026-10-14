import type { Metadata } from "next";
import AppLegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subpoena Season Support",
  description: "Support, FAQ and contact for the Subpoena Season app.",
  alternates: { canonical: "/subpoena-season/support" },
};

export default function Page() {
  return (
    <AppLegalPage path="/subpoena-season/support" label="Support" title="Subpoena Season Support">
      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${SITE.email}?subject=Subpoena%20Season%20Support`}>{SITE.email}</a>
        <br />
        Please include your iPhone model, iOS version and app version. We answer in English or
        German, usually within a few business days.
      </p>

      <h2>Common questions</h2>
      <h3>I bought the app on a new iPhone. Where is my purchase?</h3>
      <p>
        Purchases are tied to your Apple ID. Use &ldquo;Restore Purchases&rdquo; in the app
        (Profile) once in-app purchases are active, and sign in with the same Apple ID.
      </p>
      <h3>Can I get a refund?</h3>
      <p>
        Refunds are handled by Apple. Visit{" "}
        <a href="https://reportaproblem.apple.com" rel="noopener noreferrer">reportaproblem.apple.com</a>.
      </p>
      <h3>Where is my data?</h3>
      <p>
        In the current version your picks, name, custom cards and game results are stored on
        your device only. Deleting the app deletes this data. See the{" "}
        <a href="/subpoena-season/privacy">Privacy Policy</a>.
      </p>
      <h3>The Daily Playbook shows an old entry.</h3>
      <p>The Playbook rotates by date. Check that your device date and time are set automatically.</p>

      <h2>Report content or request a takedown</h2>
      <p>
        If you are depicted or named in the app and object to a card, caption or source, or you
        believe a statement is wrong, write to us. See{" "}
        <a href="/subpoena-season/rules">Community Rules &amp; Takedown</a> for what to include.
        We review every notice and correct or remove content where appropriate.
      </p>
    </AppLegalPage>
  );
}
