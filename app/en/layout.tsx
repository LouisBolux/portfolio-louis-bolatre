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
    "Senior PM with 6 years of experience in startups & scale-ups. Discovery → Delivery → and I build too.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Louis Bolatre — Senior Product Manager",
    description:
      "Senior PM with 6 years of experience in startups & scale-ups. Discovery → Delivery → and I build too.",
    url: "https://louisbolatre.com/en",
    siteName: "Louis Bolatre",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louis Bolatre — Senior Product Manager",
    description:
      "Senior PM with 6 years of experience in startups & scale-ups. Discovery → Delivery → and I build too.",
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

export default function RootLayoutEn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
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
