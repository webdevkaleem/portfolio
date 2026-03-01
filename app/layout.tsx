import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { siteConfig } from "@/lib/seo";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Providers from "./providers";

const fragmentMono = Fragment_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Kaleem Bhatti",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.xHandle,
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://github.com/webdevkaleem",
      "https://www.linkedin.com/in/webdevkaleem",
      "https://x.com/webdevkaleem",
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${fragmentMono.className} antialiased text-sm`}>
        <Providers>
          <Nav />

          {/* 176px = 80px (nav) + 64px (footer) + 32px (footer my-4) */}
          <main className="mt-20 max-w-6xl mx-auto px-8 min-h-[calc(100vh-176px)]">
            {children}
          </main>

          <Footer />
        </Providers>

        <Analytics />
        <Script id="person-structured-data" type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </Script>
        <Script id="website-structured-data" type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </Script>
      </body>
    </html>
  );
}
