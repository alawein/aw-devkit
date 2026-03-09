---
type: normative
authority: canonical
audience: [ai-agents, contributors]
last-verified: 2026-03-09
---

# AGENTS — aw-devkit

**Purpose:** Archived legacy zero-dependency CSS and JS design kit retained for migration reference while shared resources move to `devkit/`.

---

## Scope

4 parent themes, Ninja Overlay system (S1–S4), ~120 CSS custom properties (`--aw-*`), component library, and JS tools (<5 KB total).

## Governance Boundaries

### Always do

- Treat this repo as read-only unless the change is part of migration or archival clarification
- Use `--aw-*` token namespace for all custom properties
- Use `.aw-*` class prefix for all component styles
- Test all changes against the 4 parent themes + overlay combinations
- Maintain `prefers-reduced-motion` fallbacks for all animations
- Keep JS tools total under 5 KB

### Ask first

- Before adding new themes, overlays, or token families
- Before changing the `@layer` cascade order

### Never do

- Treat this repo as the canonical home for new shared-resource work
- Override the identity palette (`--aw-ninja-*`) in themes
- Use `border-radius` — use `clip-path` with complete `polygon()` values
- Use generic `box-shadow` — use named shadow systems only
- Add build dependencies — this is a zero-dependency kit
- Use inline `<style>` in demo HTMLs — `<link>` only

## Quick Reference

| Task | Command |
|------|---------|
| Preview | Open any `demos/*.html` in a browser |
| Migration map | See `../devkit/docs/aw-devkit-retirement.md` |

---

_See [CLAUDE.md](CLAUDE.md) | [SSOT.md](SSOT.md)_
