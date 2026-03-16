import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const siteUrl = "https://coderift7.github.io/umzug-demo";

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: siteConfig.company.name,
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [
      {
        url: `${siteUrl}/images/hero-bg.jpg`,
        width: 1920,
        height: 1080,
        alt: `${siteConfig.company.name} – Professioneller Umzugsservice`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [`${siteUrl}/images/hero-bg.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${lexend.variable} ${sourceSans.variable}`}>
      <head>
        {/* FAQ Schema – für KI-Chatbots und Google Featured Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: siteConfig.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        {/* Lokales Unternehmen – JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: siteConfig.company.name,
              legalName: siteConfig.company.legalName,
              description: siteConfig.meta.description,
              url: siteUrl,
              telephone: siteConfig.company.phone,
              email: siteConfig.company.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Musterstraße 42",
                addressLocality: "Berlin",
                postalCode: "10115",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 52.532,
                longitude: 13.3846,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
              },
              priceRange: "€€",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 52.532,
                  longitude: 13.3846,
                },
                geoRadius: "100000",
              },
              serviceType: [
                "Privatumzug",
                "Firmenumzug",
                "Entrümpelung",
                "Möbelmontage",
                "Einpackservice",
                "Lagerung",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
