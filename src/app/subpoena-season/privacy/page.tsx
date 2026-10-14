import type { Metadata } from "next";
import AppLegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subpoena Season Privacy Policy",
  description: "How the Subpoena Season app processes personal data.",
  alternates: { canonical: "/subpoena-season/privacy" },
};

export default function Page() {
  return (
    <AppLegalPage
      path="/subpoena-season/privacy"
      label="Privacy Policy"
      title="Privacy Policy – Subpoena Season"
      note="Draft — to be reviewed by a qualified data-protection professional before the App Store release"
    >
      <h2>1. Controller</h2>
      <p>
        Oliver Markus Müller, trading as &ldquo;OneTitel&rdquo;, Am Bruchborn 6, 54570
        Kirchweiler, Germany. Contact: {SITE.email}. For website visits, see also the{" "}
        <a href="/privacy-policy">website Privacy Policy</a>.
      </p>

      <h2>2. Short version (current app version)</h2>
      <ul>
        <li>No account is required. No advertising. No third-party tracking or analytics SDKs.</li>
        <li>Your name, picks, custom cards, photos you choose and game results stay on your device.</li>
        <li>Purchases are processed by Apple; we receive no payment details.</li>
      </ul>

      <h2>3. Data processed in the app</h2>
      <ul>
        <li>
          <strong>Display name, picks, settings, game results, custom cards.</strong> Stored
          locally on your device (legal basis: performance of the contract, Art. 6(1)(b) GDPR).
          Deleting the app removes this data.
        </li>
        <li>
          <strong>Photos.</strong> If you add an image to a custom card, you select it with the
          iOS photo picker; only the selected image is accessible to the app and it is stored
          locally. We do not upload it.
        </li>
        <li>
          <strong>Purchases.</strong> Handled via Apple StoreKit. Apple is an independent
          controller for payment data.
        </li>
        <li>
          <strong>Website visits</strong> (this page): technical server logs via our hosting
          provider, see the website Privacy Policy.
        </li>
      </ul>

      <h2>4. Planned features: accounts and leagues</h2>
      <p>
        If we release accounts and leagues, we will process (via our backend provider Supabase,
        with servers in the EU/US as configured): an account identifier (Sign in with Apple,
        with an optional private relay email), your display name, picks, league memberships,
        scores and content you choose to share. Purpose: operate leagues and leaderboards
        (Art. 6(1)(b) GDPR). Account deletion will be available in the app. This policy will be
        updated and shown before these features go live.
      </p>

      <h2>5. Recipients and transfers</h2>
      <p>
        Apple Inc. (App Store, purchases). Hosting provider of this website: Vercel Inc.
        Backend provider for planned features: Supabase. Transfers outside the EU/EEA rely on
        adequacy decisions or Standard Contractual Clauses where applicable.
        [Placeholder: confirm final provider list and data-processing agreements.]
      </p>

      <h2>6. Retention</h2>
      <p>
        Local data persists until you delete it or the app. Server-side data (planned features)
        is kept while your account exists and is deleted on account deletion, subject to legal
        retention duties.
      </p>

      <h2>7. Children</h2>
      <p>
        The App contains political satire and is not directed at children under 13 (US) or 16
        (EU). Please do not use it if you are below that age.
      </p>

      <h2>8. Your rights</h2>
      <p>
        You have the right to access, rectify, erase, restrict, object and data portability, and
        to complain to a supervisory authority: Landesbeauftragte für den Datenschutz und die
        Informationsfreiheit Rheinland-Pfalz (LfDI RLP). California and other US residents may
        request access or deletion at {SITE.email}. We do not sell or share personal
        information for advertising.
      </p>
    </AppLegalPage>
  );
}
