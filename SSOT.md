---
type: normative
authority: canonical
audience: [ai-agents, contributors]
last-verified:  2026-03-08
---

# SSOT — aw-devkit

**Version:** 1.0
**Last Updated:** 2026-03-07
**Status:** Archived for migration

---

## Purpose

Zero-dependency vanilla CSS+JS design devkit retained for migration reference.
It no longer serves as the canonical home for shared Alawein design resources.

## Current State

- Canonical shared-resource home: `../devkit/`
- Status: read-only except for migration and archival clarification
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

- Keep migration references aligned with `../devkit/docs/aw-devkit-retirement.md`
- Retire direct consumer references to this repo as canonical shared-resource paths

---

_Governed by: [AGENTS.md](AGENTS.md)_
_See [CLAUDE.md](CLAUDE.md) | [AGENTS.md](AGENTS.md)_
