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
        (Profile) and sign in with the same Apple ID. This also restores the League Pass.
      </p>
      <h3>Can I get a refund?</h3>
      <p>
        Refunds are handled by Apple. Visit{" "}
        <a href="https://reportaproblem.apple.com" rel="noopener noreferrer">reportaproblem.apple.com</a>.
      </p>
      <h3>Where is my data?</h3>
      <p>
        Without an account, your picks, name, custom cards and game results are stored on your
        device only. If you use friend leagues (Sign in with Apple), your display name, picks
        and scores are also stored on our backend. See the{" "}
        <a href="/subpoena-season/privacy">Privacy Policy</a>.
      </p>
      <h3>How do I join or create a league?</h3>
      <p>
        Open the Leagues tab, sign in with Apple and unlock the League Pass. Friends join with
        your invite code or link; they need the League Pass too.
      </p>
      <h3>How do I delete my account?</h3>
      <p>In the app: Profile &gt; Delete account. This removes your server-side data.</p>
      <h3>Is this real?</h3>
      <p>
        No. Subpoena Season is political satire and parody. It is a game, not news, and nothing
        in it is a statement of fact about anyone. See the{" "}
        <a href="/subpoena-season/terms">Terms of Use</a>.
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
