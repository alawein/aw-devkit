# aw-devkit

Archived zero-dependency vanilla CSS and JS design kit for the Alawein design
system.

This repo is retained for migration reference. The canonical home for shared
design tokens, shared components, shared icons, themes, and demo surfaces is
now [`../devkit/`](../devkit/).

Migration map: [`../devkit/docs/aw-devkit-retirement.md`](../devkit/docs/aw-devkit-retirement.md)

## Quick Start

```html
<link rel="stylesheet" href="tokens/index.css">
<link rel="stylesheet" href="components/index.css">
<html data-theme="industrial" data-overlay="s2">
```

## Features

- 4 parent themes: Post-Internet Broadsheet, VHS Pulp Future, Industrial Neon, Arcade Concrete
- Ninja Overlay system (S1-S4) — persistent identity layer at adjustable intensity
- ~120 CSS custom properties (`--aw-*` namespace)
- Component library with primitives, composites, data, and layout
- JS tools: theme engine, contrast checker, token exporter
- No build step, no framework, no dependencies

## Archive Status

- No new shared-resource work should start here
- Keep this repo only for migration reference and historical design context

## Themes

Activate via `data-theme` attribute:
- `broadsheet` — 12-col newspaper grid, editorial typography
- `vhs` — Chroma noise, tracking distortion, warm amber + cyan
- `industrial` — OSHA signage, hazard stripes, neon cyan + red
- `arcade` — 8px pixel borders, stepped shadows, limited palette

## Ninja Overlay

Control identity intensity via `data-overlay`:
- `s0` — No overlay (pure theme)
- `s1` — 20%: palette + cuts + motion
- `s2` — 50%: + shadows + weave + evidence
- `s3` — 80%: geometry dominates
- `s4` — 100%: full Alawein identity

## License

MIT
