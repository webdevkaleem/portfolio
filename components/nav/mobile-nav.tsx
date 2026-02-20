"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItem from "./nav-item";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((cur) => !cur);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className={"md:hidden"}>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetContent className="flex items-center justify-center w-full">
            <div className="flex items-center justify-center gap-4 w-2/3 flex-col">
              <NavItem
                content="WORK"
                href="/"
                className="md:col-start-8 col-start-3 justify-between flex"
                onClick={toggleOpen}
              />
              <NavItem
                content="TOOLBOX"
                href="/toolbox"
                className="md:col-start-8 col-start-3 justify-between flex"
                onClick={toggleOpen}
              />

              <NavItem
                content="INFO"
                href="/info"
                className="md:col-start-9 col-start-4 justify-between flex"
                onClick={toggleOpen}
              />
              <NavItem
                content="CONTACT"
                href="/contact"
                className="md:col-start-10 col-start-5 justify-between flex"
                onClick={toggleOpen}
              />
            </div>
          </SheetContent>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
