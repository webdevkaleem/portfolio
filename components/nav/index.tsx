import Link from "next/link";
import MobileNav from "./mobile-nav";
import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="fixed top-0 bg-background/90 left-0 right-0 py-8 grid grid-cols-5 md:grid-cols-10 items-center h-16 z-50 px-8 max-w-6xl mx-auto text-xs">
      <Link
        href="/"
        className="md:col-span-4 sm:col-span-2 col-span-4 text-nowrap"
      >
        KALEEM BHATTI
      </Link>

      <div className="flex items-center justify-end sm:hidden col-span-1">
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
