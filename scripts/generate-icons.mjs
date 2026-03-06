import sharp from "sharp";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const svgBuffer = readFileSync(resolve(root, "public/icon.svg"));

const sizes = [192, 512];

for (const size of sizes) {
  await sharp(svgBuffer, { density: Math.round((72 * size) / 32) })
    .resize(size, size)
    .png()
    .toFile(resolve(root, `public/icon-${size}.png`));

  console.log(`Created public/icon-${size}.png`);
}
