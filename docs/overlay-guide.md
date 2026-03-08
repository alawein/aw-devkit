# Ninja Overlay Guide

## What is the Ninja Overlay?

A persistent identity layer that asserts Alawein presence at adjustable intensity. It composites with any theme, progressively replacing theme tokens with identity tokens.

## Activation

```html
<html data-theme="industrial" data-overlay="s2">
```

Or via JavaScript:
```js
import { setOverlay } from './tools/theme-engine.js';
setOverlay('s2');
```

## Intensity Levels

### S0 — No Overlay (default)
Pure theme, no ninja presence. Remove `data-overlay` or set to `s0`.

### S1 — 20% Identity
- Accent colors switch to blood/ember
- Subtle corner cuts (clip-path)
- Ninja easing on transitions

### S2 — 50% Identity
- Everything from S1
- Ninja shadow system (multi-layer with blood accent)
- Fabric weave texture overlay
- Evidence marks become visible

### S3 — 80% Identity
- Geometry dominates (dual-cut clip-paths)
- Strong ninja shadows
- Dense weave texture
- Borders adopt blood color
- Surface tinting toward smoke

### S4 — 100% Identity
- Full palette takeover (void/charcoal/smoke/moonlight/ghost)
- Shuriken geometry on clip-paths
- Maximum ninja shadows
- Heavy weave texture
- All evidence fully visible
- Theme is completely subsumed

## How It Works Architecturally

The overlay sits in `@layer alawein-overlay`, which has higher cascade priority than `@layer alawein-theme`. This means overlay token overrides always win over theme overrides, without needing `!important`.

Each overlay level is independent — they don't inherit from each other in CSS. Instead, higher levels repeat the lower-level overrides plus add new ones.

## Design Guidelines

- S1-S2: Use when theme identity should dominate but Alawein presence is desired
- S3: Use when Alawein identity should be prominent but theme color hints remain
- S4: Use for fully branded Alawein contexts regardless of base theme
