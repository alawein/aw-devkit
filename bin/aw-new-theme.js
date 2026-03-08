#!/usr/bin/env node

/**
 * aw-devkit | New Theme Generator
 * Interactive CLI to scaffold a new theme CSS file.
 *
 * Usage: node bin/aw-new-theme.js
 */

import { createInterface } from 'node:readline';
import { writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const THEMES_DIR = join(__dirname, '..', 'tokens', 'themes');

const IDENTITY_TOKENS = [
  '--aw-ninja-void',
  '--aw-ninja-charcoal',
  '--aw-ninja-smoke',
  '--aw-ninja-moonlight',
  '--aw-ninja-ghost',
  '--aw-ninja-blood',
  '--aw-ninja-ember',
  '--aw-ninja-veil',
];

const PARENT_THEMES = {
  broadsheet: { shadow: 'ink', texture: 'halftone', clip: 'cut-tr-sm', border: 'thin' },
  vhs:        { shadow: 'glow', texture: 'scanlines', clip: 'cut-tr-md', border: 'thin' },
  industrial: { shadow: 'brutal', texture: 'crosshatch', clip: 'cut-dual-md', border: 'brutal' },
  arcade:     { shadow: 'pixel', texture: 'dither', clip: 'notch-md', border: 'pixel' },
};

function ask(rl, question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  const rl = createInterface({ input: process.stdin, output: process.stdout });

  console.log('\n  aw-devkit // New Theme Generator\n');

  const name = await ask(rl, '  Theme name (kebab-case): ');
  const slug = name.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');

  if (!slug) {
    console.error('  Error: Theme name required.');
    rl.close();
    process.exit(1);
  }

  const filePath = join(THEMES_DIR, `${slug}.css`);
  if (existsSync(filePath)) {
    console.error(`  Error: ${filePath} already exists.`);
    rl.close();
    process.exit(1);
  }

  console.log('\n  Parent aesthetic (determines default shadow/texture/clip):');
  console.log('    1. broadsheet  — editorial, ink shadows, halftone');
  console.log('    2. vhs         — analog, glow shadows, scanlines');
  console.log('    3. industrial  — brutal, hard shadows, crosshatch');
  console.log('    4. arcade      — pixel, stepped shadows, dither');

  const parentChoice = await ask(rl, '\n  Parent [1-4]: ');
  const parentNames = ['broadsheet', 'vhs', 'industrial', 'arcade'];
  const parent = parentNames[parseInt(parentChoice, 10) - 1] || 'broadsheet';
  const p = PARENT_THEMES[parent];

  const description = await ask(rl, '  Short description: ');

  rl.close();

  const css = `/* aw-devkit | Theme: ${name}
 * ${description || 'Custom theme'}
 * Parent aesthetic: ${parent}
 * Activated via [data-theme="${slug}"]
 */

@layer alawein-theme {
  [data-theme="${slug}"] {
    /* ── Color Overrides ─────────────────────────────────────────── */
    /* TODO: Set your semantic color palette */
    --aw-color-bg:            #0d0d0d;
    --aw-color-bg-elevated:   #1a1a2e;
    --aw-color-bg-surface:    #2d2d44;
    --aw-color-text:          #c0c5ce;    /* contrast: check ratio on bg */
    --aw-color-text-muted:    #8a8fa8;    /* contrast: check ratio on bg */
    --aw-color-heading:       #f5f1eb;
    --aw-color-link:          #5b8dde;    /* contrast: check ratio on bg */
    --aw-color-link-hover:    #7aa3e8;
    --aw-color-accent:        #8b0000;
    --aw-color-accent-hover:  #a31515;
    --aw-color-border:        #3a3a54;
    --aw-color-border-strong: #5a5a74;

    /* ── Typography ──────────────────────────────────────────────── */
    --aw-font-body:       var(--aw-font-sans);
    --aw-font-heading:    var(--aw-font-display);

    /* ── Shadow System (inherited from ${parent}) ────────────────── */
    --aw-shadow-theme:    var(--aw-shadow-${p.shadow}-md);
    --aw-shadow-theme-lg: var(--aw-shadow-${p.shadow}-lg);

    /* ── Texture (inherited from ${parent}) ──────────────────────── */
    --aw-texture-theme:   var(--aw-texture-${p.texture});
    --aw-texture-theme-opacity: var(--aw-texture-opacity-subtle);

    /* ── Clip-Path (inherited from ${parent}) ────────────────────── */
    --aw-clip-theme:      var(--aw-clip-${p.clip});

    /* ── Border (inherited from ${parent}) ───────────────────────── */
    --aw-border-theme:    var(--aw-border-${p.border}) solid var(--aw-color-border-strong);
  }
}
`;

  writeFileSync(filePath, css, 'utf-8');
  console.log(`\n  Created: ${filePath}`);
  console.log(`  Selector: [data-theme="${slug}"]`);
  console.log(`\n  Next steps:`);
  console.log(`    1. Edit the color palette in the generated file`);
  console.log(`    2. Add contrast ratio comments to every color token`);
  console.log(`    3. Add @import to tokens/index.css`);
  console.log(`    4. Test with: <html data-theme="${slug}">`);
  console.log(`\n  IMPORTANT: Never override --aw-ninja-* identity tokens.\n`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
