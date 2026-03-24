import { ArrowUpRight, Loader2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/page-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RandomizedTextEffect } from "@/components/ui/randomized-text-effect";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ShopNextify Project",
  description:
    "ShopNextify is a production-ready ecommerce template by Kaleem Bhatti, built with Next.js and Payload CMS.",
  alternates: {
    canonical: "/projects/shopnextify",
  },
  openGraph: {
    url: "/projects/shopnextify",
    title: `ShopNextify | ${siteConfig.name}`,
    description:
      "Case study and gallery for ShopNextify, a production-ready ecommerce project by Kaleem Bhatti.",
  },
};

export default function ShopNextifyPage() {
  const galleryImages = [
    {
      id: "shopnextify-ui-1",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4OwOLcTrctNJLh3IHxzPGM8wOXriSpU56Koqy",
    },
    {
      id: "shopnextify-ui-2",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4JSoD4XLWjoqOglNTmVK71v3YicetAJ05SPUG",
    },
    {
      id: "shopnextify-ui-3",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4ExorUAqP02b3G7ABZnxhIXpmjOSsFciRWHqw",
    },
    {
      id: "shopnextify-ui-4",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4rXi9kasSynQCzAIKtwhOle47WVGfYFqdZBHR",
    },
    {
      id: "shopnextify-ui-5",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC49itepF12Hp8FjSV5Wr6sknGRPuyQofDX7elY",
    },
    {
      id: "shopnextify-ui-6",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4sddTiGhA8d5SDZfUXxLIPY3W92sHQgCvhEGk",
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-176px)] flex flex-col md:flex-row gap-8 md:gap-16 py-16">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-between md:w-4/12 md:sticky md:top-20 md:self-start md:py-8">
          <RandomizedTextEffect
            as="h1"
            content={`SHOPNEXTIFY`}
            className="text-5xl leading-tight break-all"
          />

          <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`YEAR`}
                className="text-muted-foreground shrink-0"
              />
              <RandomizedTextEffect as="p" content={`2026`} />
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`SERVICES`}
                className="text-muted-foreground shrink-0"
              />
              <div className="lg:text-right flex gap-2">
                <RandomizedTextEffect as="p" content={`DESIGN`} />
                <RandomizedTextEffect as="p" content={`|`} />
                <RandomizedTextEffect as="p" content={`DEVELOPMENT`} />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`LIVE SITE`}
                className="text-muted-foreground shrink-0"
              />
              <Link
                href="https://shopnextify.vercel.app"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                <RandomizedTextEffect
                  as="p"
                  content={`SHOPNEXTIFY.VERCEL.APP`}
                />
                <ArrowUpRight className="size-3" />
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`GITHUB`}
                className="text-muted-foreground shrink-0"
              />
              <Link
                href="https://github.com/webdevkaleem/shopnextify"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                <RandomizedTextEffect
                  as="p"
                  content={`GITHUB.COM/../SHOPNEXTIFY`}
                />
                <ArrowUpRight className="size-3" />
              </Link>
            </div>

            <div className="flex flex-col justify-between gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`More Information`}
                className="text-muted-foreground shrink-0"
              />

              <RandomizedTextEffect
                as="p"
                content={`
                A production-ready ecommerce template built with Payload CMS and
                Next.js. This template includes a fully-working backend,
                enterprise-grade admin panel, and a beautifully designed,
                production-ready ecommerce website.`}
              />
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Project Gallery */}
        <div className="flex-1 md:pr-2">
          {/* Mobile: carousel */}
          <Carousel className="md:hidden w-full">
            <CarouselContent className="ml-0">
              {galleryImages.map(({ id, src }, idx) => (
                <CarouselItem key={id} className="pl-0">
                  <div className="relative aspect-video">
                    <Image
                      src={src}
                      alt={`ShopNextify Project ${idx + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority={idx < 2}
                    />
                    <div className="absolute bg-foreground/15 dark:bg-foreground/10 h-full w-full flex items-center justify-center -z-10">
                      <Loader2 className="size-4 animate-spin" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>

          {/* Desktop: stacked full-width images */}
          <div className="hidden md:grid grid-cols-1 gap-3 md:gap-4">
            {galleryImages.map(({ id, src }, idx) => (
              <div key={id} className="relative aspect-video">
                <Image
                  src={src}
                  alt={`ShopNextify Project ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain"
                  priority={idx < 2}
                />
                <div className="absolute bg-foreground/15 dark:bg-foreground/10 h-full w-full flex items-center justify-center -z-10">
                  <Loader2 className="size-4 animate-spin" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
