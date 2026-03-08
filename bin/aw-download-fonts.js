#!/usr/bin/env node
/**
 * aw-devkit | Font Downloader
 * Downloads WOFF2 files from Google Fonts for offline use.
 * Requires Node.js 18+ (uses built-in fetch).
 *
 * Usage:  node bin/aw-download-fonts.js
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'fonts', 'woff2');

const FONTS = [
  { family: 'Playfair Display', weights: [400, 700, 900] },
  { family: 'JetBrains Mono',   weights: [400, 500, 700] },
  { family: 'Inter',            weights: [300, 400, 500, 600, 700] },
  { family: 'Bebas Neue',       weights: [400] },
];

function slug(family) {
  return family.toLowerCase().replace(/\s+/g, '-');
}

async function downloadFont(family, weight) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&display=swap`;

  // Google Fonts serves WOFF2 when User-Agent indicates a modern browser
  const cssRes = await fetch(cssUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0' },
  });
  const css = await cssRes.text();

  // Extract the first WOFF2 URL from the CSS response
  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/);
  if (!match) {
    console.error(`  [!] No WOFF2 URL found for ${family} ${weight}`);
    return false;
  }

  const fontRes = await fetch(match[1]);
  const buffer = Buffer.from(await fontRes.arrayBuffer());
  const filename = `${slug(family)}-${weight}.woff2`;
  await writeFile(join(outDir, filename), buffer);
  console.log(`  ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
  return true;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  console.log('Downloading fonts to fonts/woff2/\n');

  let total = 0;
  for (const { family, weights } of FONTS) {
    console.log(`${family}:`);
    for (const w of weights) {
      if (await downloadFont(family, w)) total++;
    }
  }

  console.log(`\nDone — ${total} font files downloaded.`);
  console.log('Swap the Google Fonts <link> in your HTML for:');
  console.log('  <link rel="stylesheet" href="fonts/fonts.css">');
}

main().catch(err => { console.error(err); process.exit(1); });
