import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FarmRoket — Compliance-Ready Supply Chain SaaS Platform on Blockchain",
  description: "Compliance-ready supply chain SaaS platform powered by blockchain technology. Ensure regulatory compliance, complete traceability, and transparency across your entire supply chain with decentralized ledgers.",
  keywords: ["supply chain", "compliance", "blockchain", "SaaS platform", "traceability", "regulatory compliance", "decentralized ledgers", "transparency", "food safety", "agriculture"],
  authors: [{ name: "FarmRoket Team" }],
  creator: "FarmRoket",
  publisher: "FarmRoket",
  metadataBase: new URL('https://farmroket.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon-farmrocket.svg',
    shortcut: '/icon-farmrocket.svg',
    apple: '/icon-farmrocket.svg',
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farmroket.com",
    title: "FarmRoket — Compliance-Ready Supply Chain SaaS Platform on Blockchain",
    description: "Compliance-ready supply chain SaaS platform powered by blockchain technology. Ensure regulatory compliance, complete traceability, and transparency across your entire supply chain with decentralized ledgers.",
    siteName: "FarmRoket",
    images: [
      {
        url: "https://farmroket.com/images/main/farmroket-meta-image-00.jpg",
        width: 1200,
        height: 630,
        alt: "FarmRoket - Compliance-Ready Supply Chain SaaS Platform on Blockchain",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmRoket — Compliance-Ready Supply Chain SaaS Platform on Blockchain",
    description: "Compliance-ready supply chain SaaS platform powered by blockchain technology. Ensure regulatory compliance and complete traceability.",
    images: ["https://farmroket.com/images/main/farmroket-meta-image-00.jpg"],
    creator: "@farmroket",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FarmRoket',
    url: 'https://farmroket.com',
    logo: 'https://farmroket.com/icon-farmrocket.svg',
    description: 'Compliance-ready supply chain SaaS platform powered by blockchain technology.',
    foundingDate: '2024',
    industry: 'Blockchain Supply Chain Technology',
    sameAs: [
      'https://twitter.com/farmroket'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  };

  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
