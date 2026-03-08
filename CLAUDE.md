---
type: guide
authority: canonical
audience: [ai-agents, contributors]
last-verified:  2026-03-08
---

# CLAUDE.md — aw-devkit

Archived zero-dependency CSS and JS devkit for the Alawein design system.
Active shared-resource work now belongs in `../devkit/`.

## Architecture

- `tokens/` — CSS custom properties organized in `@layer` cascade
- `components/` — `.aw-*` prefixed component styles consuming tokens
- `tools/` — ES module JS utilities (<5KB total)
- `demos/` — standalone HTML files using `<link>` imports (no inline styles)

## Archive Status

- This repo is kept for migration reference and historical context.
- `../devkit/` is the canonical home for shared packages, design tokens, theme
  assets, and demos.
- See `../devkit/docs/aw-devkit-retirement.md` for the old-to-new resource map.

## Layer Order

`@layer alawein-base, alawein-theme, alawein-overlay, alawein-components`

## Conventions

- Token namespace: `--aw-*`
- Component class prefix: `.aw-*`
- Theme activation: `<html data-theme="..." data-overlay="s0-s4">`
- Identity palette (`--aw-ninja-*`) is immutable — NEVER override in themes
- No `border-radius` — use `clip-path` with complete `polygon()` values
- No generic `box-shadow` — use named shadow systems (brutal/ninja/pixel/glow/ink/glass)
- No animation without `prefers-reduced-motion` fallback
- Every color token should have a contrast ratio comment
- Demo HTMLs use `<link>` only, no inline `<style>`
- JS tools total must stay under 5KB
