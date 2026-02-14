import { ThemeSwitcher } from "./theme-switcher";
import { RandomizedTextEffect } from "./ui/randomized-text-effect";

export default function Footer() {
  return (
    <footer className="md:h-16 h-32 flex-col justify-center md:flex-row flex gap-2 py-8 md:py-0 md:justify-between md:items-center z-50 px-8 max-w-6xl mx-auto my-4">
      <div className="flex items-center gap-2">
        &copy;
        <RandomizedTextEffect as="p" content={`2026`} />
      </div>
      <RandomizedTextEffect
        as="p"
        content={"DESIGNED & DEVELOPED BY KALEEM BHATTI"}
      />

      <ThemeSwitcher />
    </footer>
  );
}
