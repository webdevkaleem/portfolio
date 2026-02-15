import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return siteRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route.startsWith("/projects/")
          ? 0.8
          : 0.7,
  }));
}
