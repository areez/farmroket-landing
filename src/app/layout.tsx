import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FarmRoket&trade; — Farm-to-Fork Traceability",
  description: "Revolutionary blockchain-powered platform ensuring complete transparency and traceability from farm to fork. Track your food's journey with immutable records and QR verification.",
  keywords: ["farm to fork", "traceability", "blockchain", "food safety", "agriculture", "supply chain", "transparency"],
  authors: [{ name: "FarmRoket&trade; Team" }],
  creator: "FarmRoket&trade;",
  publisher: "FarmRoket&trade;",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farmroket.com",
    title: "FarmRoket&trade; — Farm-to-Fork Traceability",
    description: "Revolutionary blockchain-powered platform ensuring complete transparency and traceability from farm to fork. Track your food's journey with immutable records and QR verification.",
    siteName: "FarmRoket&trade;",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FarmRoket&trade; - Farm-to-Fork Traceability Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FarmRoket&trade; — Farm-to-Fork Traceability",
    description: "Revolutionary blockchain-powered platform ensuring complete transparency and traceability from farm to fork.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
