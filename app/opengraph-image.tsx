import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";
export const alt = `${siteConfig.name} portfolio preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  // Mirrors the dark palette in app/globals.css with static RGB values for next/og.
  const colors = {
    background: "rgb(39, 39, 42)",
    card: "rgb(24, 24, 27)",
    border: "rgb(82, 82, 91)",
    foreground: "rgb(235, 235, 245)",
    mutedForeground: "rgb(175, 175, 186)",
    primary: "rgb(99, 102, 241)",
    accent: "rgb(79, 70, 229)",
  };

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "56px",
        background:
          `radial-gradient(circle at 14% 12%, ${colors.primary}33 0%, transparent 38%), ` +
          `radial-gradient(circle at 88% 88%, ${colors.accent}2b 0%, transparent 42%), ` +
          `linear-gradient(135deg, ${colors.card} 0%, ${colors.background} 100%)`,
        color: colors.foreground,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas",
        border: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: "0.08em",
          color: colors.mutedForeground,
        }}
      >
        webdevkaleem.dev
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: colors.foreground,
          }}
        >
          Kaleem Bhatti
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: colors.mutedForeground,
          }}
        >
          Full Stack Developer | Next.js | TypeScript
        </div>
      </div>
    </div>,
    size,
  );
}
