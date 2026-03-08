---
type: normative
authority: canonical
audience: [ai-agents, contributors]
last-verified: 2026-03-07
---

# AGENTS — aw-devkit

**Purpose:** Zero-dependency vanilla CSS+JS design devkit for the Alawein design system.

---

## Scope

4 parent themes, Ninja Overlay system (S1–S4), ~120 CSS custom properties (`--aw-*`), component library, and JS tools (<5 KB total).

## Governance Boundaries

### Always do

- Use `--aw-*` token namespace for all custom properties
- Use `.aw-*` class prefix for all component styles
- Test all changes against the 4 parent themes + overlay combinations
- Maintain `prefers-reduced-motion` fallbacks for all animations
- Keep JS tools total under 5 KB

### Ask first

- Before adding new themes, overlays, or token families
- Before changing the `@layer` cascade order

### Never do

- Override the identity palette (`--aw-ninja-*`) in themes
- Use `border-radius` — use `clip-path` with complete `polygon()` values
- Use generic `box-shadow` — use named shadow systems only
- Add build dependencies — this is a zero-dependency kit
- Use inline `<style>` in demo HTMLs — `<link>` only

## Quick Reference

| Task | Command |
|------|---------|
| Preview | Open any `demos/*.html` in a browser |

---

_See [CLAUDE.md](CLAUDE.md) | [SSOT.md](SSOT.md)_
