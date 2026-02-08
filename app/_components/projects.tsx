"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    <div className="grid grid-cols-6 md:grid-cols-10 text-xs gap-4 select-none">
      {projects.map((project, index) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;
        const shouldDim = isAnyHovered && !isHovered;

        return (
          <div
            key={`project-${index}-${project.image}`}
            className={`group col-span-3 flex flex-col gap-1 transition-all duration-500 ease-out ${
              shouldDim ? "blur-xs opacity-50" : "blur-0 opacity-100"
            } ${isHovered ? "z-10" : ""}`}
          >
            <Link
              href={project.href}
              className="h-full flex items-end"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={project.image}
                alt={`Project ${index + 1}`}
                width={480}
                height={270}
                className={`w-full object-cover rounded-sm transition-all duration-500 ${
                  isHovered ? "shadow-md shadow-white/20" : "shadow-none"
                } ${shouldDim ? "h-4/5" : "h-full"}`}
              />
            </Link>
            <h1
              className={`transition-opacity duration-500 ${shouldDim ? "opacity-40" : "opacity-100"}`}
            >
              [{index < 9 ? `0${index + 1}` : index + 1}]
            </h1>
          </div>
        );
      })}
    </div>
  );
}
