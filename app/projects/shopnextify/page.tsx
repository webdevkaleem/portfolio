import { ArrowUpRight } from "lucide-react";
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

export default function ShopNextifyPage() {
  const galleryImages = [
    {
      id: "shopnextify-ui-1",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4OwOLcTrctNJLh3IHxzPGM8wOXriSpU56Koqy",
      width: 1920,
      height: 1080,
    },
    {
      id: "shopnextify-ui-2",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4JSoD4XLWjoqOglNTmVK71v3YicetAJ05SPUG",
      width: 1920,
      height: 1080,
    },
    {
      id: "shopnextify-ui-3",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4ExorUAqP02b3G7ABZnxhIXpmjOSsFciRWHqw",
      width: 1920,
      height: 1080,
    },
    {
      id: "shopnextify-ui-4",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4rXi9kasSynQCzAIKtwhOle47WVGfYFqdZBHR",
      width: 1920,
      height: 1080,
    },
    {
      id: "shopnextify-ui-5",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC49itepF12Hp8FjSV5Wr6sknGRPuyQofDX7elY",
      width: 1920,
      height: 1080,
    },
    {
      id: "shopnextify-ui-6",
      src: "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4sddTiGhA8d5SDZfUXxLIPY3W92sHQgCvhEGk",
      width: 1920,
      height: 1080,
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-144px)] flex flex-col md:flex-row gap-8 md:gap-16 py-16">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-between md:w-4/12 md:sticky md:top-20 md:self-start md:py-8">
          <h1 className="text-5xl leading-tight break-all">SHOPNEXTIFY</h1>

          <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <h4 className="text-muted-foreground shrink-0">YEAR</h4>
              <p>2026</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <h4 className="text-muted-foreground shrink-0">SERVICES</h4>
              <div className="lg:text-right">
                <p>DESIGN</p>
                <p>DEVELOPMENT</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <h4 className="text-muted-foreground shrink-0">LIVE SITE</h4>
              <Link
                href="https://shopnextify.vercel.app"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                SHOPNEXTIFY.VERCEL.APP <ArrowUpRight className="size-3" />
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:gap-8 gap-1">
              <h4 className="text-muted-foreground shrink-0">GITHUB</h4>
              <Link
                href="https://github.com/webdevkaleem/shopnextify"
                target="_blank"
                className="flex items-center gap-1 hover:underline"
              >
                GITHUB.COM/../SHOPNEXTIFY <ArrowUpRight className="size-3" />
              </Link>
            </div>

            <div className="flex flex-col justify-between gap-1">
              <h4 className="text-muted-foreground shrink-0">
                More Information
              </h4>
              <p>
                A production-ready ecommerce template built with Payload CMS and
                Next.js. This template includes a fully-working backend,
                enterprise-grade admin panel, and a beautifully designed,
                production-ready ecommerce website.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Project Gallery */}
        <div className="flex-1 md:pr-2">
          {/* Mobile: carousel */}
          <Carousel className="md:hidden w-full">
            <CarouselContent className="ml-0">
              {galleryImages.map(({ id, src, width, height }, idx) => (
                <CarouselItem key={id} className="pl-0">
                  <Image
                    src={src}
                    alt={`ShopNextify Project ${idx + 1}`}
                    width={width}
                    height={height}
                    sizes="100vw"
                    className="w-full h-auto"
                    priority={idx < 2}
                  />
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
            {galleryImages.map(({ id, src, width, height }, idx) => (
              <div key={id}>
                <Image
                  src={src}
                  alt={`ShopNextify Project ${idx + 1}`}
                  width={width}
                  height={height}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="w-full h-auto"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
