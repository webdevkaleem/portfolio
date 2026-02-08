import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-8 grid grid-cols-5 md:grid-cols-10 items-center h-16 z-50 px-8 max-w-6xl mx-auto text-xs">
      <p className="md:col-span-4 sm:col-span-2 col-span-4">KALEEM BHATTI</p>

      <div className="flex items-center justify-end sm:hidden">
        <MobileNav />
      </div>

      <NavItem
        content="WORK"
        href="/work"
        className="md:col-start-8 col-start-3"
      />
      <NavItem
        content="INFO"
        href="/info"
        className="md:col-start-9 col-start-4"
      />
      <NavItem
        content="CONTACT"
        href="/contact"
        className="md:col-start-10 col-start-5"
      />
    </nav>
  );
}

function NavItem({
  content,
  href,
  className,
}: {
  content: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={cn("items-center group hidden sm:flex", className)}>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
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
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
        ]
      </span>
    </div>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className={"sm:hidden"}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
