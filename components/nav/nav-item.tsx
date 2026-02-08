"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function NavItem({
  content,
  href,
  className,
}: {
  content: string;
  href: string;
  className?: string;
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <div className={cn("items-center group hidden sm:flex", className)}>
      <span
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary",
          isActive && "opacity-100",
        )}
      >
        [
      </span>
      <Link
        href={href}
        className={buttonVariants({
          variant: "link",
          className: "text-xs",
        })}
      >
        {content}
      </Link>
      <span
        className={cn(
          "opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary",
          isActive && "opacity-100",
        )}
      >
        ]
      </span>
    </div>
  );
}
