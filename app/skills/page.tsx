import { ArrowUpRight, SquareArrowOutUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/page-wrapper";
import { RandomizedTextEffect } from "@/components/ui/randomized-text-effect";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tools & Stack",
  description:
    "A quick overview of Kaleem Bhatti's design and development tool stack with years of hands-on experience.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    url: "/skills",
    title: `Tools & Stack | ${siteConfig.name}`,
    description:
      "Tools and technologies I use regularly across design, frontend, and full stack development.",
  },
};

const skills = [
  {
    id: "vercel",
    name: "Vercel",
    category: "Deployment Platform",
    tag: "Cloud",
    placeholder: "VC",
  },
  {
    id: "eslint",
    name: "ESLint",
    category: "Code Quality Tool",
    tag: "Tooling",
    placeholder: "ES",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "React Framework",
    tag: "Frontend",
    placeholder: "NX",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Utility-First CSS Framework",
    tag: "Frontend",
    placeholder: "TW",
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control System",
    tag: "Tooling",
    placeholder: "GT",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Code Hosting Platform",
    tag: "Tooling",
    placeholder: "GH",
  },
  {
    id: "react",
    name: "React",
    category: "JavaScript Library",
    tag: "Frontend",
    placeholder: "RE",
  },
  {
    id: "react-hook-form",
    name: "React Hook Form",
    category: "Form Management Library",
    tag: "Frontend",
    placeholder: "RF",
  },
  {
    id: "cpp",
    name: "C++",
    category: "Programming Language",
    tag: "Language",
    placeholder: "C+",
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud Platform",
    tag: "Cloud",
    placeholder: "AW",
  },
  {
    id: "render",
    name: "Render",
    category: "Cloud Hosting Platform",
    tag: "Cloud",
    placeholder: "RD",
  },
  {
    id: "esbuild",
    name: "Esbuild",
    category: "JavaScript Bundler",
    tag: "Build",
    placeholder: "EB",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend Web Framework",
    tag: "Backend",
    placeholder: "EX",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "JavaScript Runtime",
    tag: "Backend",
    placeholder: "ND",
  },
  {
    id: "pug",
    name: "Pug",
    category: "Template Engine",
    tag: "Backend",
    placeholder: "PG",
  },
  {
    id: "pnpm",
    name: "pnpm",
    category: "Package Manager",
    tag: "Tooling",
    placeholder: "PM",
  },
  {
    id: "webpack",
    name: "Webpack",
    category: "Module Bundler",
    tag: "Build",
    placeholder: "WP",
  },
  {
    id: "vite",
    name: "Vite",
    category: "Build Tool",
    tag: "Build",
    placeholder: "VT",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Database",
    tag: "Database",
    placeholder: "MG",
  },
  {
    id: "postgres",
    name: "Postgres",
    category: "Relational Database",
    tag: "Database",
    placeholder: "PS",
  },
  {
    id: "redis",
    name: "Redis",
    category: "In-Memory Data Store",
    tag: "Database",
    placeholder: "RD",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design Tool",
    tag: "Design",
    placeholder: "FG",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    category: "Design Platform",
    tag: "Design",
    placeholder: "DB",
  },
  {
    id: "postman",
    name: "Postman",
    category: "API Development Tool",
    tag: "Tooling",
    placeholder: "PT",
  },
  {
    id: "turbopack",
    name: "Turbopack",
    category: "JavaScript Bundler",
    tag: "Build",
    placeholder: "TP",
  },
];

const skillPriorityById: Record<string, number> = {
  nextjs: 10,
  tailwind: 9,
  webpack: 7,
  turbopack: 7,
  vercel: 9,
  postgres: 8,
  redis: 8,
  react: 8,
  github: 7,
  pnpm: 7,
};

export default function SkillsPage() {
  const sortedSkills = skills
    .map((skill) => ({
      ...skill,
      priority: skillPriorityById[skill.id] ?? 1,
    }))
    .sort(
      (a, b) =>
        b.priority - a.priority ||
        a.tag.localeCompare(b.tag) ||
        a.name.localeCompare(b.name),
    );

  return (
    <PageWrapper>
      <section className="py-16">
        <div className="min-h-[calc(100vh-176px)] flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          <aside className="md:w-4/12 md:sticky md:top-20 md:self-start md:py-8">
            <div className="flex flex-col gap-8">
              <RandomizedTextEffect
                as="h1"
                content={`TOOLS & STACK`}
                className="text-5xl"
              />

              <RandomizedTextEffect
                as="p"
                content={`I rely on a focused set of design and development tools to ship clean, performant, and production-ready products.`}
                className="max-w-sm text-muted-foreground"
              />

              <div className="border-t border-border/70 pt-8">
                <div className="flex items-center gap-10">
                  <Link
                    href="https://github.com/webdevkaleem"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-4"
                  >
                    <span>Open Github</span>
                    <SquareArrowOutUpRight className="size-4 text-primary" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-4"
                  >
                    <span>Get in touch</span>
                    <SquareArrowOutUpRight className="size-4 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:w-8/12 md:pt-2">
            <div className="flex flex-col gap-3 md:gap-4">
              {sortedSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between gap-4 border border-border/60 bg-foreground/10 px-4 py-3 md:px-5 md:py-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="size-14 shrink-0 border border-border/70 bg-background/80 grid place-items-center">
                      <span className="text-xs font-medium tracking-wider text-muted-foreground">
                        {skill.placeholder}
                      </span>
                    </div>

                    <div className="min-w-0 flex flex-col gap-1">
                      <h2 className="text-lg leading-tight truncate">
                        {skill.name}
                      </h2>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {skill.category}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 border border-border/70 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {skill.tag}
                  </div>
                </div>
              ))}

              <div className="mt-2 border-t border-border/70 pt-6">
                <Link
                  href="https://github.com/webdevkaleem"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-4"
                >
                  <span>Like more? Explore on Github</span>
                  <SquareArrowOutUpRight className="size-4 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
