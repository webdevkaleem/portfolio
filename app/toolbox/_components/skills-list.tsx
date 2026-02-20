"use client";

import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Skill = {
  id: string;
  name: string;
  category: string;
  tag: string;
  placeholder: string;
  iconPath: string;
  iconColor: string;
  priority: number;
};

export default function SkillsList({ skills }: { skills: Skill[] }) {
  const [selectedTag, setSelectedTag] = useState("all");

  const tagOptions = useMemo(
    () =>
      Array.from(new Set(skills.map((skill) => skill.tag))).sort((a, b) =>
        a.localeCompare(b),
      ),
    [skills],
  );

  const visibleSkills = useMemo(
    () =>
      skills
        .filter((skill) => selectedTag === "all" || skill.tag === selectedTag)
        .sort(
          (a, b) =>
            b.priority - a.priority ||
            a.tag.localeCompare(b.tag) ||
            a.name.localeCompare(b.name),
        ),
    [selectedTag, skills],
  );

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div className="mb-1 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Filter by tag
        </span>
        <Select value={selectedTag} onValueChange={setSelectedTag}>
          <SelectTrigger className="w-full max-w-[220px] overflow-hidden sm:w-[180px]">
            <SelectValue placeholder="All tags" className="px-2" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="px-2">
              All
            </SelectItem>
            {tagOptions.map((tag) => (
              <SelectItem key={tag} value={tag} className="px-2">
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {visibleSkills.map((skill) => (
        <div
          key={skill.id}
          className="flex items-center justify-between gap-4 border border-border/60 bg-foreground/10 px-4 py-3 md:px-5 md:py-4"
        >
          <div className="flex min-w-0 items-center gap-4">
            <div className="size-14 shrink-0 border border-border/70 bg-background dark:bg-foreground grid place-items-center">
              <div
                aria-hidden
                className="size-7"
                style={{
                  backgroundColor: skill.iconColor,
                  WebkitMaskImage: `url(${skill.iconPath})`,
                  maskImage: `url(${skill.iconPath})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </div>

            <div className="min-w-0 flex flex-col gap-1">
              <h2 className="truncate text-lg leading-tight">{skill.name}</h2>
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
  );
}
