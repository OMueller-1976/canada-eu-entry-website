import type { Metadata } from "next";
import AppLegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Subpoena Season Terms of Use",
  description: "Terms of Use for the Subpoena Season satire and prediction game.",
  alternates: { canonical: "/subpoena-season/terms" },
};

export default function Page() {
  return (
    <AppLegalPage
      path="/subpoena-season/terms"
      label="Terms of Use"
      title="Terms of Use – Subpoena Season"
    >
      <h2>1. Provider and scope</h2>
      <p>
        These terms govern your use of the iPhone app &ldquo;Subpoena Season&rdquo; (the
        &ldquo;App&rdquo;) and this website section. Provider: Oliver Markus Müller, trading as
        &ldquo;OneTitel&rdquo;, Am Bruchborn 6, 54570 Kirchweiler, Germany, see the{" "}
        <a href="/legal-notice">Legal Notice</a>. Contact: {SITE.email}.
      </p>

      <h2>2. Satire and parody – no statements of fact</h2>
      <p>
        The App is a work of political satire, parody and entertainment. Figures, caricatures,
        card texts, scenes, captions and game mechanics are exaggerated and humorous and are{" "}
        <strong>not</strong> factual reporting. Nothing in the App states or implies that any
        person has committed a crime or any wrongdoing. All persons are presumed innocent.
        References to public events are marked with sources and reflect publicly reported
        information at the time of writing. The App is not affiliated with or endorsed by any
        government, agency, party, campaign or depicted person.
      </p>
      <p>By continuing in the App you confirm that you understand and accept this.</p>

      <h2>3. Game only – no gambling</h2>
      <p>
        The App is a prediction and entertainment game with fictional scoring. There are no
        real-money bets, stakes, payouts or prizes. Scores have no monetary value.
      </p>

      <h2>4. Purchases</h2>
      <p>
        The App is sold through the Apple App Store. Optional in-app purchases (for example
        &ldquo;League Pass&rdquo;) are one-time, non-consumable purchases unless stated
        otherwise in the App Store listing. Prices, taxes, billing, refunds and Apple&rsquo;s
        usage rules are governed by Apple&rsquo;s terms. Where you are an EU consumer, your
        statutory withdrawal rights are not affected by these terms.
      </p>

      <h2>5. Your content (custom cards, names, reasons)</h2>
      <p>
        You may create custom cards, display names and pick reasons. You are responsible for
        this content and promise that you hold the rights to any image you upload; that the
        content does not depict private individuals without consent, minors, nudity, or
        violence; does not contain hate speech, harassment, threats, invented quotes presented
        as real, or allegations of criminal conduct presented as fact; and does not violate law
        or third-party rights. See the <a href="/subpoena-season/rules">Community Rules</a>. In
        the current version custom content is stored on your device only. If shared features
        (e.g. leagues) are introduced, you grant us a limited licence to host and display your
        content within those features, and we may remove content that violates these terms.
      </p>

      <h2>6. Licence and restrictions</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable licence to use the App on
        devices you own or control, subject to Apple&rsquo;s Usage Rules. You may not copy,
        reverse engineer, resell or misuse the App, or use it to harass others or to
        impersonate a real person.
      </p>

      <h2>7. Accounts and leagues (planned)</h2>
      <p>
        Future versions may offer accounts (e.g. Sign in with Apple), private leagues and
        invite links. Additional terms may apply and will be shown before you use these
        features. You can delete your account in the App once accounts are available.
      </p>

      <h2>8. Availability and changes</h2>
      <p>
        We may update, change or discontinue features. Daily content and sources may change as
        facts develop.
      </p>

      <h2>9. Warranty and liability</h2>
      <p>
        The App is provided as is for entertainment. To the extent permitted by law we are
        liable without limitation for intent, gross negligence, injury to life, body or health
        and where mandatory law applies (including the German Product Liability Act). For slight
        negligence we are liable only for breach of essential contractual obligations and
        limited to foreseeable, typical damage. Mandatory consumer rights remain unaffected.
        To the extent permitted by applicable law, we disclaim implied warranties for users
        outside the EU.
      </p>

      <h2>10. Takedown and complaints</h2>
      <p>
        Persons who believe content infringes their rights can notify us at {SITE.email}; see{" "}
        <a href="/subpoena-season/rules">Community Rules &amp; Takedown</a>.
      </p>

      <h2>11. Governing law and jurisdiction</h2>
      <p>
        German law applies, excluding the UN Convention on Contracts for the International Sale
        of Goods. For consumers, mandatory consumer-protection provisions of the country of your
        habitual residence remain unaffected. Apple is a third-party beneficiary of these terms
        to the extent required by Apple&rsquo;s App Store rules; Apple is not responsible for
        the App, its maintenance, support or claims relating to it.
      </p>

      <h2>12. Changes to these terms</h2>
      <p>We may update these terms for legitimate reasons; the current version is always available here.</p>
    </AppLegalPage>
  );
}
