# Style Contract

Rules that all code in this devkit must follow. Violations break identity.

## Forbidden Patterns

1. **No `border-radius`** — Use `clip-path` with complete `polygon()` values
2. **No generic `box-shadow`** — Use named shadow systems (brutal/ninja/pixel/glow/ink/glass)
3. **No gradient blobs** — Gradients must be structured (hazard stripes, linear fills)
4. **No ungrounded neon** — Glow effects must have a structural anchor
5. **No blur without justification** — Every blur serves a documented purpose
6. **No animation without `prefers-reduced-motion` fallback** — Global in motion.css
7. **No inline `<style>` in demo HTML** — Use `<link>` imports only
8. **No overriding `--aw-ninja-*` tokens** in themes — Identity palette is immutable

## Token Consumption Rules

Components MUST:
- Use `--aw-color-*` semantic tokens, not raw hex values
- Use `--aw-shadow-*` named systems, not raw `box-shadow`
- Use `--aw-clip-*` tokens for shaped edges
- Use `--aw-space-*` tokens for spacing
- Use `--aw-font-*` tokens for font families
- Use `--aw-text-*` tokens for font sizes

## Cascade Layer Rules

- Base tokens → `@layer alawein-base`
- Theme overrides → `@layer alawein-theme`
- Overlay overrides → `@layer alawein-overlay`
- Component styles → `@layer alawein-components`
- Never use `!important`

## Naming Convention

- Token namespace: `--aw-*`
- Component class prefix: `.aw-*`
- BEM-like children: `__child`
- Variants: `--variant`
- States: `--active`, `--open`, `--dismissing`

## Contrast Requirements

- All text/background pairs must pass WCAG AA (4.5:1 for normal text, 3:1 for large)
- Every color token should have a contrast ratio comment in its definition
- Use `tools/contrast-checker.js` to verify

## JS Budget

Total JS tools must stay under 5KB combined.
