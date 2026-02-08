import { ThemeSwitcher } from "./theme-switcher";

export default function Footer() {
  return (
    <footer className="h-16 flex justify-between items-center z-50 px-8 max-w-6xl mx-auto text-xs">
      <p>&copy; 2026</p>
      <p>DESIGNED & DEVELOPED BY KALEEM BHATTI</p>

      <ThemeSwitcher />
    </footer>
  );
}
