import { ThemeSwitcher } from "./theme-switcher";

export default function Footer() {
  return (
    <footer className="md:h-16 h-32 flex-col md:flex-row flex gap-2 py-8 md:py-0 md:justify-between md:items-center z-50 px-8 max-w-6xl mx-auto">
      <p>&copy; 2026</p>
      <p>DESIGNED & DEVELOPED BY KALEEM BHATTI</p>

      <ThemeSwitcher />
    </footer>
  );
}
