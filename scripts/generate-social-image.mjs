// Run: node scripts/generate-social-image.mjs
// Sharp is already supplied by Astro. No API, generation service, or new dependency.
import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
const motif = await readFile(new URL('../public/graphics/writing/strategy-01.svg', import.meta.url));
const canvas = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#fbfaf8"/>
  <rect x="80" y="88" width="72" height="6" fill="#ff6a00"/>
  <text x="80" y="194" font-family="Arial, sans-serif" font-size="72" font-weight="700" fill="#111820">Kevin Mazur</text>
  <text x="83" y="251" font-family="Arial, sans-serif" font-size="30" fill="#24303a">Technology Leadership / AI / Automation</text>
  <text x="83" y="535" font-family="Arial, sans-serif" font-size="26" fill="#5e6871">kevinmazur.dev</text>
</svg>`);
const path = await sharp(motif).resize(640, 295).png().toBuffer();
await mkdir(new URL('../public/social/', import.meta.url), { recursive: true });
await sharp(canvas).composite([{ input: path, left: 490, top: 290 }]).png().toFile(new URL('../public/social/kevin-mazur.png', import.meta.url).pathname);
