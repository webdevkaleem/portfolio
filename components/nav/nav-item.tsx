"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function NavItem({
  content,
  href,
  onClick,
  className,
}: {
  content: string;
  href: string;
  onClick?: () => void;
  className?: string;
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <div className={cn("items-center group hidden sm:flex", className)}>
      <span
        className={cn(
          "opacity-0 transition-opacity duration-300 text-primary",
          !isActive && "opacity-100",
        )}
      >
        [
      </span>
      <Link
        href={href}
        className={buttonVariants({
          variant: "link",
          className: "text-sm",
        })}
        onClick={onClick}
      >
        {content}
      </Link>
      <span
        className={cn(
          "opacity-0 transition-opacity duration-300 text-primary",
          !isActive && "opacity-100",
        )}
      >
        ]
      </span>
    </div>
  );
}
