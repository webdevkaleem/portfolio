import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-8 grid grid-cols-5 md:grid-cols-10 items-center h-16 z-50 px-8 max-w-6xl mx-auto text-xs">
      <Link href="/">
        <p className="md:col-span-4 sm:col-span-2 col-span-4">KALEEM BHATTI</p>
      </Link>

      <div className="flex items-center justify-end sm:hidden col-span-4">
        <MobileNav />
      </div>

      <NavItem content="WORK" href="/" className="md:col-start-8 col-start-3" />
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
