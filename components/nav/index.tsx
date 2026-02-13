import Link from "next/link";
import MobileNav from "./mobile-nav";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="fixed top-0 bg-background/90 gap-8 left-0 right-0 py-8 flex justify-center items-center h-20 z-50 px-8 max-w-6xl mx-auto">
      <Link href="/" className="text-nowrap mr-auto">
        KALEEM BHATTI
      </Link>

      <div className="flex items-center justify-end sm:hidden">
        <MobileNav />
      </div>

      <NavItem
        content="WORK"
        href="/"
        className="justify-end lg:justify-start"
      />
      <NavItem
        content="INFO"
        href="/info"
        className="justify-end lg:justify-start"
      />
      <NavItem
        content="CONTACT"
        href="/contact"
        className="justify-end lg:justify-start"
      />
    </nav>
  );
}
