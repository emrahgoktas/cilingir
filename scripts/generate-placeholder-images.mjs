import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

fs.mkdirSync(imagesDir, { recursive: true });

await sharp({
  create: {
    width: 1920,
    height: 1080,
    channels: 3,
    background: { r: 22, g: 33, b: 62 },
  },
})
  .webp({ quality: 85 })
  .toFile(path.join(imagesDir, "hero-bg.webp"));

await sharp({
  create: {
    width: 160,
    height: 160,
    channels: 3,
    background: { r: 230, g: 232, b: 238 },
  },
})
  .webp({ quality: 82 })
  .toFile(path.join(imagesDir, "badge-oda-kayit.webp"));

console.log("Wrote hero-bg.webp, badge-oda-kayit.webp");
