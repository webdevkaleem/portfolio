const FALLBACK_SITE_URL = "https://webdevkaleem.com";

function normalizeSiteUrl(rawUrl: string) {
  const withProtocol = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  return withProtocol.replace(/\/+$/, "");
}

function resolveSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
    FALLBACK_SITE_URL;

  try {
    return new URL(normalizeSiteUrl(candidate)).toString().replace(/\/$/, "");
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteConfig = {
  name: "Kaleem Bhatti",
  shortName: "webdevkaleem",
  title: "Kaleem Bhatti | Full Stack Developer",
  description:
    "Portfolio of Kaleem Bhatti (webdevkaleem), a full stack developer focused on modern Next.js applications, UI design, and product-minded web development.",
  creator: "Kaleem Bhatti",
  xHandle: "@webdevkaleem",
  url: resolveSiteUrl(),
  locale: "en_US",
  keywords: [
    "Kaleem Bhatti",
    "webdevkaleem",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
};

export const siteRoutes = [
  "/",
  "/info",
  "/contact",
  "/projects/shopnextify",
  "/projects/uploadthingui",
] as const;
