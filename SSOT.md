---
type: normative
authority: canonical
audience: [ai-agents, contributors]
last-verified: 2026-03-07
---

# SSOT — aw-devkit

**Version:** 1.0
**Last Updated:** 2026-03-07
**Status:** Active

---

## Purpose

Zero-dependency vanilla CSS+JS design devkit for the Alawein design system. Provides tokens, components, themes, and JS utilities consumed by downstream projects.

## Current State

- Package: `@alawein/aw-devkit`
- 4 parent themes: Broadsheet, VHS, Industrial, Arcade
- Ninja Overlay system: S0–S4
- ~120 CSS custom properties (`--aw-*` namespace)
- Component library: primitives, composites, data, layout
- JS tools: theme engine, contrast checker, token exporter (<5 KB total)

## Structure

```
aw-devkit/
├── tokens/       # CSS custom properties in @layer cascade
├── components/   # .aw-* prefixed component styles
├── tools/        # ES module JS utilities
├── demos/        # Standalone HTML files
├── fonts/        # Typeface assets
├── CLAUDE.md     # Agent config
├── AGENTS.md     # Governance rules
├── SSOT.md       # This file
└── LESSONS.md    # Observed patterns
```

## What's Next

- Consumer integration with devkit Turborepo packages
- Publish to npm as `@alawein/aw-devkit`

---

_Governed by: [AGENTS.md](AGENTS.md)_
_See [CLAUDE.md](CLAUDE.md) | [AGENTS.md](AGENTS.md)_
