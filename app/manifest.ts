import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  // Keep PWA colors aligned with the dark theme palette in app/globals.css.
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#27272a",
    icons: [
      {
        src: "/favicon.ico?v=2",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
