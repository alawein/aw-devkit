# Theme Guide

## How Themes Work

Themes override semantic color slots (`--aw-color-*`) and other design tokens via `[data-theme]` attribute selectors. They sit in the `alawein-theme` cascade layer, between base tokens and overlay.

```
@layer alawein-base     → immutable identity + defaults
@layer alawein-theme    → theme overrides (YOU ARE HERE)
@layer alawein-overlay  → ninja overlay intensity
@layer alawein-components → component styles
```

## Activating a Theme

```html
<html data-theme="industrial">
```

Or via JavaScript:
```js
import { setTheme } from './tools/theme-engine.js';
setTheme('industrial');
```

## Available Themes

### Post-Internet Broadsheet (`broadsheet`)
- Editorial newspaper aesthetic
- Serif-forward typography (Playfair Display for body)
- 12-column newspaper grid
- Ink shadow system
- Halftone dot textures
- Warm newsprint palette

### VHS Pulp Future (`vhs`)
- Analog video decay aesthetic
- Monospace body text (JetBrains Mono)
- Warm amber + cool cyan palette
- Glow shadow system
- Scanline textures
- Chroma misregistration effects

### Industrial Neon (`industrial`)
- OSHA signage + brutalist aesthetic
- Sans-serif body (Inter)
- Cyan `#00f0ff` + red `#ff0055` neon palette
- 6px brutal borders
- Hazard stripe patterns
- Crosshatch textures

### Arcade Concrete (`arcade`)
- 8-bit pixel aesthetic on concrete
- Monospace body text
- Limited color palette
- 8px pixel borders
- Stepped pixel shadows
- Dithered textures

## Creating a Custom Theme

1. Copy an existing theme file from `tokens/themes/`
2. Change the `[data-theme="..."]` selector
3. Override semantic tokens as needed
4. NEVER override `--aw-ninja-*` identity tokens
5. Import your theme in `tokens/index.css`

Or use the CLI:
```bash
node bin/aw-new-theme.js
```

## Theme Token Contract

Themes SHOULD override:
- `--aw-color-*` semantic colors
- `--aw-font-body`, `--aw-font-heading` assignments
- `--aw-shadow-theme`, `--aw-shadow-theme-lg`
- `--aw-texture-theme`, `--aw-texture-theme-opacity`
- `--aw-clip-theme`
- `--aw-border-theme`

Themes MUST NOT override:
- `--aw-ninja-*` identity palette
- `--aw-border-thin/thick/brutal/pixel` widths
- `--aw-clip-cut-*/shuriken-*` base definitions
- `--aw-shadow-brutal/ninja/pixel/glow/ink/glass-*` base definitions
