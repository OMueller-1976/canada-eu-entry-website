import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "EU Market Entry for Canadian Companies | Canada EU Entry by OneTitel",
    template: `%s | ${SITE.brand}`,
  },
  description:
    "Canada EU Entry, by OneTitel, helps Canadian B2B companies validate, establish and grow their business in Germany and the European Union through market-entry strategy, launch coordination and commercial execution.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.fullName,
    title: "EU Market Entry for Canadian Companies | Canada EU Entry by OneTitel",
    description:
      "Validate, establish and grow your business in Germany and the European Union — advisory, launch coordination and commercial execution for Canadian companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EU Market Entry for Canadian Companies | Canada EU Entry by OneTitel",
    description:
      "Validate, establish and grow your business in Germany and the European Union.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.brand,
  alternateName: [SITE.legalName, SITE.descriptor],
  url: SITE.url,
  description:
    "Canada EU Entry, operated by OneTitel, is an independent market-entry agency and consultancy based in Germany, helping Canadian B2B companies validate, establish and grow their commercial presence in Germany and the European Union.",
  areaServed: ["DE", "EU", "CA"],
  // TODO: confirm logo asset path once brand assets are finalized.
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.brand,
  alternateName: [SITE.legalName, SITE.descriptor],
  url: SITE.url,
};

const GTM_ID = "GTM-5KZ2XGLN";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${serif.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
