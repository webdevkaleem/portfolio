"use client";

import { ArrowRight } from "lucide-react";
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
    image: "/projects/uploadthingui.png",
    href: "/projects/uploadthingui",
  },
  {
    image: "/projects/shopnextify.png",
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
              className="pl-4 basis-1/2 md:basis-1/3"
            >
              <div
                className={`group flex flex-col gap-1 text-xs transition-all duration-500 ease-out ${
                  shouldDim ? "blur-sm opacity-50" : "blur-0 opacity-100"
                } ${isHovered ? "z-10" : ""}`}
              >
                <Link
                  href={project.href}
                  className="block overflow-hidden rounded-sm"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    width={480}
                    height={270}
                    className={`w-full h-full object-cover transition-all duration-500 origin-bottom ${
                      isHovered ? "shadow-md shadow-white/20" : "shadow-none"
                    } ${shouldDim ? "scale-y-[0.85]" : "scale-y-100"}`}
                  />
                </Link>
                <div className="flex items-center justify-between">
                  <h1
                    className={`transition-opacity duration-500 ${shouldDim ? "opacity-40" : "opacity-100"}`}
                  >
                    [{index < 9 ? `0${index + 1}` : index + 1}]
                  </h1>

                  <Link
                    href={project.href}
                    className={buttonVariants({
                      variant: "link",
                      className: "text-xs",
                    })}
                  >
                    VIEW PROJECT <ArrowRight className="size-3" />
                  </Link>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex items-center justify-end gap-2 mt-4">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
