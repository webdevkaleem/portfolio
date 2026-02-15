import type { Metadata } from "next";
import PageWrapper from "@/components/page-wrapper";
import { siteConfig } from "@/lib/seo";
import Hero from "./_components/hero";
import Projects from "./_components/projects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore the portfolio of Kaleem Bhatti (webdevkaleem): modern full stack projects, product-focused UI, and Next.js development work.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: siteConfig.title,
    description:
      "Explore the portfolio of Kaleem Bhatti (webdevkaleem): modern full stack projects, product-focused UI, and Next.js development work.",
  },
};

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Projects />
    </PageWrapper>
  );
}
