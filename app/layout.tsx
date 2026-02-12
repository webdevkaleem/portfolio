import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
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
  title: "Kaleem Bhatti | webdevkaleem",
  description:
    "Kaleem Bhatti. Full Stack Developer, Designer, and Creator. Portfolio, Projects, and Contact Information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fragmentMono.className} antialiased`}>
        <Providers>
          <Nav />

          {/* 128px = 64px (nav height) + 64px (footer height) */}
          <main className="mt-16 max-w-6xl mx-auto px-8 min-h-[calc(100vh-128px)]">
            {children}
          </main>

          <Footer />
        </Providers>

        <Analytics />
      </body>
    </html>
  );
}
