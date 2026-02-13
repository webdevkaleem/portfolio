"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    image:
      "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4cDwxDC5uHvsqYGMgWbSA6kaReXUyl5p8VQB9",
    href: "/projects/uploadthingui",
  },
  {
    image:
      "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC42hUG06AaIkQh1tS3WsYjKoi8C4TzNuqm92Pr",
    href: "/projects/shopnextify",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: "auto",
      }}
      className="w-full select-none"
    >
      <CarouselContent className="-ml-4">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;
          const shouldDim = isAnyHovered && !isHovered;

          return (
            <CarouselItem
              key={`project-${index}-${project.image}`}
              className="pl-4 basis-2/3 md:basis-1/3"
            >
              <div
                className={`group relative flex flex-col gap-1 text-sm transition-all duration-500 ease-out ${
                  shouldDim ? "blur-sm opacity-50" : "blur-0 opacity-100"
                } ${isHovered ? "z-10" : ""}`}
              >
                <Link
                  href={project.href}
                  className="relative block overflow-hidden rounded-sm aspect-video"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 66vw, 33vw"
                    className={`object-cover transition-all duration-500 origin-bottom ${
                      isHovered ? "shadow-md shadow-white/20" : "shadow-none"
                    } ${shouldDim ? "scale-y-[0.85]" : "scale-y-100"}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center -z-10">
                    <Loader2 className="size-4 animate-spin" />
                  </div>
                </Link>
                <div className="flex items-center justify-between">
                  <h1
                    className={`transition-opacity duration-500 ${shouldDim ? "opacity-40" : "opacity-100"}`}
                  >
                    [{index < 9 ? `0${index + 1}` : index + 1}]
                  </h1>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={project.href}
                      className={buttonVariants({
                        variant: "link",
                        className: "text-sm",
                      })}
                    >
                      VIEW PROJECT <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex items-center gap-2 mt-4">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
