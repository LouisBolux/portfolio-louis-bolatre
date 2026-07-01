import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://louisbolatre.com"),
  title: "Louis Bolatre — Senior Product Manager",
  description:
    "Senior PM avec 6 ans d'expérience en startup & scale-up. Discovery → Delivery → et je build aussi.",
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Louis Bolatre — Senior Product Manager",
    description:
      "Senior PM avec 6 ans d'expérience en startup & scale-up. Discovery → Delivery → et je build aussi.",
    url: "https://louisbolatre.com",
    siteName: "Louis Bolatre",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis Bolatre — Senior Product Manager",
    description:
      "Senior PM avec 6 ans d'expérience en startup & scale-up. Discovery → Delivery → et je build aussi.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Louis Bolatre",
  jobTitle: "Senior Product Manager",
  url: "https://louisbolatre.com",
  email: "mailto:louis.bolatre@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/louis-bolatre-product-manager-pm/",
    "https://github.com/louisbolatre",
  ],
  knowsAbout: [
    "Product Management",
    "Product Discovery",
    "Shape Up",
    "OKRs",
    "FinTech",
    "GreenTech",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Thiga",
  },
};

export default function RootLayoutFr({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-white text-zinc-900 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
