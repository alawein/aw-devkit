# Token Reference

All CSS custom properties use the `--aw-*` namespace.

## Identity Palette (immutable)

These tokens are NEVER overridden by themes or overlays.

| Token | Value | Usage |
|-------|-------|-------|
| `--aw-ninja-void` | `#0d0d0d` | Deepest black, base background |
| `--aw-ninja-charcoal` | `#1a1a2e` | Primary dark surface |
| `--aw-ninja-smoke` | `#2d2d44` | Elevated dark surface |
| `--aw-ninja-moonlight` | `#c0c5ce` | Primary text on dark (9.5:1 on void) |
| `--aw-ninja-ghost` | `#f5f1eb` | Inverse text / light surface (14.8:1 on void) |
| `--aw-ninja-blood` | `#8b0000` | Primary accent, danger (4.9:1 on ghost) |
| `--aw-ninja-ember` | `#a31515` | Blood hover state (4.5:1 on ghost) |
| `--aw-ninja-veil` | `rgba(13,13,13,0.85)` | Overlay scrim |

## Semantic Colors (theme-overridable)

| Token | Default (dark) | Purpose |
|-------|---------------|---------|
| `--aw-color-bg` | `--aw-ninja-void` | Page background |
| `--aw-color-bg-elevated` | `--aw-ninja-charcoal` | Raised surfaces |
| `--aw-color-bg-surface` | `--aw-ninja-smoke` | Subtle surface |
| `--aw-color-text` | `--aw-ninja-moonlight` | Body text |
| `--aw-color-text-muted` | `#8a8fa8` | Secondary text |
| `--aw-color-heading` | `--aw-ninja-ghost` | Headings |
| `--aw-color-accent` | `--aw-ninja-blood` | Primary accent |
| `--aw-color-accent-hover` | `--aw-ninja-ember` | Accent hover |
| `--aw-color-border` | `#3a3a54` | Decorative borders |
| `--aw-color-border-strong` | `#5a5a74` | Structural borders |
| `--aw-color-focus` | `#5b8dde` | Focus indicator |
| `--aw-color-success` | `#2d8a4e` | Success state |
| `--aw-color-warning` | `#b8860b` | Warning state |
| `--aw-color-error` | `--aw-ninja-blood` | Error state |
| `--aw-color-info` | `#2874a6` | Info state |

## Typography

| Token | Value | Purpose |
|-------|-------|---------|
| `--aw-font-serif` | Playfair Display | Editorial text |
| `--aw-font-mono` | JetBrains Mono | Code, data, labels |
| `--aw-font-sans` | Inter | Body text (default) |
| `--aw-font-display` | Bebas Neue | Headlines |
| `--aw-text-xs` through `--aw-text-5xl` | Major-third scale (1.250) | Size scale |
| `--aw-font-body` | `var(--aw-font-sans)` | Semantic: body font |
| `--aw-font-heading` | `var(--aw-font-display)` | Semantic: heading font |

## Spacing

4px base unit. `--aw-space-1` (4px) through `--aw-space-24` (96px).

## Borders & Clip-Paths

| Token | Value | Usage |
|-------|-------|-------|
| `--aw-border-thin` | 1px | Default border |
| `--aw-border-thick` | 2px | Emphasis border |
| `--aw-border-brutal` | 6px | Industrial/brutal style |
| `--aw-border-pixel` | 8px | Arcade/pixel style |
| `--aw-clip-cut-tr-*` | sm/md/lg/xl | Top-right corner cut |
| `--aw-clip-cut-dual-*` | sm/md/lg/xl | Dual corner cut |
| `--aw-clip-shuriken-*` | sm/md/lg/xl | 4-point star cut |

## Shadows

Six named systems. No generic `box-shadow` allowed.

- `--aw-shadow-brutal-*` — Hard offset, no blur
- `--aw-shadow-ninja-*` — Multi-layer with blood accent
- `--aw-shadow-pixel-*` — Stepped, retro
- `--aw-shadow-glow-*` — Neon emission
- `--aw-shadow-ink-*` — Editorial, subtle
- `--aw-shadow-glass-*` — Translucent, frosted

## Motion

| Token | Value | Purpose |
|-------|-------|---------|
| `--aw-duration-fast` | 120ms | Micro-interactions |
| `--aw-duration-normal` | 200ms | Standard transitions |
| `--aw-duration-slow` | 500ms | Deliberate animations |
| `--aw-ease-ninja` | `cubic-bezier(0.33, 0, 0.2, 1)` | Signature easing |

All motion collapses to 0ms under `prefers-reduced-motion: reduce`.

## Textures

| Token | Pattern |
|-------|---------|
| `--aw-texture-scanlines` | Horizontal scan lines |
| `--aw-texture-halftone` | Dot matrix pattern |
| `--aw-texture-noise` | feTurbulence noise |
| `--aw-texture-grain` | Film grain |
| `--aw-texture-vhs-tracking` | VHS distortion |
| `--aw-texture-weave` | Ninja fabric weave |
| `--aw-texture-dither` | Pixel checkerboard |
| `--aw-texture-crosshatch` | Diagonal crosshatch |
