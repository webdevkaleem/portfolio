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
import { FALLBACK_SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "UploadThing UI Project",
  description:
    "UploadThing UI is an open-source set of accessible UploadThing components for Next.js by Kaleem Bhatti.",
  alternates: {
    canonical: "/projects/uploadthingui",
  },
  openGraph: {
    url: "/projects/uploadthingui",
    title: `UploadThing UI | ${siteConfig.name}`,
    description:
      "Case study and gallery for UploadThing UI, an open-source Next.js component project by Kaleem Bhatti.",
  },
};

export default function UploadThingUIPage() {
  const galleryImages = [
    {
      id: "uploadthing-ui-1",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4cDwxDC5uHvsqYGMgWbSA6kaReXUyl5p8VQB9",
    },
    {
      id: "uploadthing-ui-2",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4IIrI4WxV8sanXqyBWMmOtg7DLTNjzc4vfbA2",
    },
    {
      id: "uploadthing-ui-3",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC46aiwdUajkBsD9YimpL4IvJhS21TZRCWlcwVg",
    },
    {
      id: "uploadthing-ui-4",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4hKarENvekdtTHA2g3MloWbj9zNfEKucZCrqm",
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-176px)] flex flex-col md:flex-row gap-8 md:gap-16 py-16">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-between md:w-4/12 md:sticky md:top-20 md:self-start md:py-8">
          <RandomizedTextEffect
            as="h1"
            content={`UPLOADTHING UI`}
            className="text-5xl leading-tight break-all"
          />

          <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-wrap flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`YEAR`}
                className="text-muted-foreground shrink-0"
              />
              <RandomizedTextEffect as="p" content={`2025`} />
            </div>

            <div className="flex flex-wrap flex-col lg:flex-row justify-between lg:gap-8 gap-1">
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

            <div className="flex flex-col flex-wrap lg:flex-row justify-between lg:gap-8 gap-1">
              <RandomizedTextEffect
                as="h4"
                content={`LIVE SITE`}
                className="text-muted-foreground shrink-0"
              />
              <Link
                href={`https://uploadthingui.${FALLBACK_SITE_URL}`}
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                <RandomizedTextEffect
                  as="p"
                  content={`UPLOADTHINGUI.${FALLBACK_SITE_URL.toLocaleUpperCase()}`}
                />
                <ArrowUpRight className="size-3" />
              </Link>
            </div>

            <div className="flex flex-col flex-wrap lg:flex-row justify-between lg:gap-8 gap-1">
              <h4 className="text-muted-foreground shrink-0">GITHUB</h4>
              <Link
                href="https://github.com/webdevkaleem/uploadthingui"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                <RandomizedTextEffect
                  as="p"
                  content={`GITHUB.COM/../UPLOADTHINGUI`}
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
                A set of beautifully-designed, accessible components for
                building Uploadthing components. Built for Next.js with Shadcn
                Registry. Open Source. Open Code.`}
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
                      alt={`UploadThing UI Project ${idx + 1}`}
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
                  alt={`UploadThing UI Project ${idx + 1}`}
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
