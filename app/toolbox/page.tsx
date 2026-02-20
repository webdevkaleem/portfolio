import { SquareArrowOutUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import SkillsList from "@/app/toolbox/_components/skills-list";
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
    iconPath: "/tools-n-skills/vercel.svg",
    iconColor: "#000000",
  },
  {
    id: "eslint",
    name: "ESLint",
    category: "Code Quality Tool",
    tag: "Tooling",
    placeholder: "ES",
    iconPath: "/tools-n-skills/eslint.svg",
    iconColor: "#4B32C3",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "React Framework",
    tag: "Frontend",
    placeholder: "NX",
    iconPath: "/tools-n-skills/nextdotjs.svg",
    iconColor: "#000000",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Utility-First CSS Framework",
    tag: "Frontend",
    placeholder: "TW",
    iconPath: "/tools-n-skills/tailwindcss.svg",
    iconColor: "#06B6D4",
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control System",
    tag: "Tooling",
    placeholder: "GT",
    iconPath: "/tools-n-skills/git.svg",
    iconColor: "#F05032",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Code Hosting Platform",
    tag: "Tooling",
    placeholder: "GH",
    iconPath: "/tools-n-skills/github.svg",
    iconColor: "#181717",
  },
  {
    id: "react",
    name: "React",
    category: "JavaScript Library",
    tag: "Frontend",
    placeholder: "RE",
    iconPath: "/tools-n-skills/react.svg",
    iconColor: "#61DAFB",
  },
  {
    id: "react-hook-form",
    name: "React Hook Form",
    category: "Form Management Library",
    tag: "Frontend",
    placeholder: "RF",
    iconPath: "/tools-n-skills/reacthookform.svg",
    iconColor: "#EC5990",
  },
  {
    id: "cpp",
    name: "C++",
    category: "Programming Language",
    tag: "Language",
    placeholder: "C+",
    iconPath: "/tools-n-skills/cplusplus.svg",
    iconColor: "#00599C",
  },
  {
    id: "render",
    name: "Render",
    category: "Cloud Hosting Platform",
    tag: "Cloud",
    placeholder: "RD",
    iconPath: "/tools-n-skills/render.svg",
    iconColor: "#46E3B7",
  },
  {
    id: "esbuild",
    name: "Esbuild",
    category: "JavaScript Bundler",
    tag: "Build",
    placeholder: "EB",
    iconPath: "/tools-n-skills/esbuild.svg",
    iconColor: "#FFCF00",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend Web Framework",
    tag: "Backend",
    placeholder: "EX",
    iconPath: "/tools-n-skills/express.svg",
    iconColor: "#000000",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "JavaScript Runtime",
    tag: "Backend",
    placeholder: "ND",
    iconPath: "/tools-n-skills/nodedotjs.svg",
    iconColor: "#5FA04E",
  },
  {
    id: "pug",
    name: "Pug",
    category: "Template Engine",
    tag: "Backend",
    placeholder: "PG",
    iconPath: "/tools-n-skills/pug.svg",
    iconColor: "#A86454",
  },
  {
    id: "pnpm",
    name: "pnpm",
    category: "Package Manager",
    tag: "Tooling",
    placeholder: "PM",
    iconPath: "/tools-n-skills/pnpm.svg",
    iconColor: "#F69220",
  },
  {
    id: "webpack",
    name: "Webpack",
    category: "Module Bundler",
    tag: "Build",
    placeholder: "WP",
    iconPath: "/tools-n-skills/webpack.svg",
    iconColor: "#8DD6F9",
  },
  {
    id: "vite",
    name: "Vite",
    category: "Build Tool",
    tag: "Build",
    placeholder: "VT",
    iconPath: "/tools-n-skills/vite.svg",
    iconColor: "#646CFF",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Database",
    tag: "Database",
    placeholder: "MG",
    iconPath: "/tools-n-skills/mongodb.svg",
    iconColor: "#47A248",
  },
  {
    id: "postgres",
    name: "Postgres",
    category: "Relational Database",
    tag: "Database",
    placeholder: "PS",
    iconPath: "/tools-n-skills/postgresql.svg",
    iconColor: "#336791",
  },
  {
    id: "redis",
    name: "Redis",
    category: "In-Memory Data Store",
    tag: "Database",
    placeholder: "RD",
    iconPath: "/tools-n-skills/redis.svg",
    iconColor: "#DC382D",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design Tool",
    tag: "Design",
    placeholder: "FG",
    iconPath: "/tools-n-skills/figma.svg",
    iconColor: "#F24E1E",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    category: "Design Platform",
    tag: "Design",
    placeholder: "DB",
    iconPath: "/tools-n-skills/dribbble.svg",
    iconColor: "#EA4C89",
  },
  {
    id: "postman",
    name: "Postman",
    category: "API Development Tool",
    tag: "Tooling",
    placeholder: "PT",
    iconPath: "/tools-n-skills/postman.svg",
    iconColor: "#FF6C37",
  },
  {
    id: "turbopack",
    name: "Turbopack",
    category: "JavaScript Bundler",
    tag: "Build",
    placeholder: "TP",
    iconPath: "/tools-n-skills/turborepo.svg",
    iconColor: "#000000",
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
  const skillsWithPriority = skills.map((skill) => ({
    ...skill,
    priority: skillPriorityById[skill.id] ?? 1,
  }));

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
                    <RandomizedTextEffect as="p" content="Open Github" />
                    <SquareArrowOutUpRight className="size-4 text-primary" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-4"
                  >
                    <RandomizedTextEffect as="p" content="Get in touch" />
                    <SquareArrowOutUpRight className="size-4 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:w-8/12 md:pt-2">
            <SkillsList skills={skillsWithPriority} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
