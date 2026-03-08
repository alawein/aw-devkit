---
type: lessons
authority: observed
audience: [ai-agents, contributors, future-self]
last-updated: 2026-03-07
---

# LESSONS — aw-devkit

> Observed patterns only. Minimal initial entry — update as lessons accumulate.

## Patterns That Work

- **Layer cascade for theme isolation**: Using `@layer` prevents specificity wars between base tokens, theme overrides, overlay states, and component styles.
- **Data attributes for theme activation**: `data-theme` and `data-overlay` on `<html>` allow theme switching without JS class manipulation and cascade naturally.
- **Zero-dependency constraint**: No build step means any project can adopt the devkit with a `<link>` tag — no bundler, no framework lock-in.

## Anti-Patterns

- **Inline styles in demos**: Defeats the purpose of the token system; always use `<link>` imports to exercise the real cascade path.
- **Generic box-shadow or border-radius**: The design language uses named shadow systems and `clip-path` polygon values — generic CSS properties break visual coherence.

## Pitfalls

- **Identity palette override**: The `--aw-ninja-*` tokens are immutable brand constants. Overriding them in themes destroys the persistent identity layer that the overlay system depends on.
- **Forgetting `prefers-reduced-motion`**: Every animation must have a fallback; accessibility violations are not acceptable even in a design-forward kit.
