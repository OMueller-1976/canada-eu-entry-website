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
    >
      <h2>1. Controller</h2>
      <p>
        Oliver Markus Müller, trading as &ldquo;OneTitel&rdquo;, Am Bruchborn 6, 54570
        Kirchweiler, Germany. Contact: {SITE.email}. For website visits, see also the{" "}
        <a href="/privacy-policy">website Privacy Policy</a>.
      </p>

      <h2>2. Short version</h2>
      <ul>
        <li>
          Subpoena Season is political <strong>satire and parody</strong>. It is a game, not news
          reporting.
        </li>
        <li>
          No account is needed for the core game. No advertising. No third-party tracking or
          analytics SDKs.
        </li>
        <li>
          Without an account, your name, picks, custom cards, photos you choose and game results
          stay on your device.
        </li>
        <li>
          Friend leagues (optional) require Sign in with Apple. Then your display name, picks
          and scores are stored on our backend so that leagues and leaderboards work.
        </li>
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

      <h2>4. Accounts and friend leagues (optional)</h2>
      <p>
        If you sign in with Apple to use friend leagues, we process via our backend provider
        Supabase (database and server functions hosted in the United States, AWS us-east-2):
      </p>
      <ul>
        <li>
          an account identifier from Sign in with Apple and, if you choose to share it, your
          email address or Apple&rsquo;s private relay address;
        </li>
        <li>your display name, your picks, league memberships, invite codes and scores;</li>
        <li>
          for the League Pass: the signed transaction data Apple provides for your purchase
          (product and transaction ID), which our server verifies against Apple&rsquo;s
          certificates to unlock league features; we receive no card or payment details;
        </li>
        <li>reports you send us about content, and technical logs needed to run and secure the service.</li>
      </ul>
      <p>
        Purpose: operate leagues, leaderboards and the purchase check, and keep the service
        secure (Art. 6(1)(b) and (f) GDPR). Other members of your leagues can see your display
        name, picks and score within that league. Do not use your real name if you do not want
        that. <strong>You can delete your account at any time in the app (Profile &gt; Delete
        account)</strong>; this removes your server-side data, subject to legal retention duties.
      </p>
      <p>
        League results are based on publicly reported events (such as congressional subpoenas)
        and are a game score only. They are not a legal assessment of any person.
      </p>

      <h2>5. Recipients and transfers</h2>
      <p>
        Apple Inc. (App Store, Sign in with Apple, purchases). Hosting provider of this website:
        Vercel Inc. Backend provider for accounts and leagues: Supabase, Inc. (servers in the
        United States). Transfers to the US and other countries outside the EU/EEA rely on the
        EU-US Data Privacy Framework where the recipient is certified, otherwise on Standard
        Contractual Clauses. We do not sell your data and share it with no other recipients.
      </p>

      <h2>6. Retention</h2>
      <p>
        Local data persists until you delete it or the app. Server-side data is kept while your
        account exists and is deleted when you delete your account in the app, subject to legal
        retention duties. Deleting only the app does not delete your account; use
        &ldquo;Delete account&rdquo; first.
      </p>

      <h2>7. Children</h2>
      <p>
        The App contains political satire and is not directed at children under 13 (US) or 16
        (EU). Please do not use it if you are below that age.</p>
      <p>
        Updated for app version 1.1.0.
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
