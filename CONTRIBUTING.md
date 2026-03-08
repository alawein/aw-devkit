# Contributing to aw-devkit

Thank you for your interest in contributing!
This repository is now archival and read-only for normal feature work.

## Getting Started

1. Clone the repository
2. Open any file in `demos/` in a browser to preview
3. No build step required — edit CSS/JS directly

## Development Workflow

Only make changes here when:

- clarifying archival or migration status
- preserving historical references
- updating links to the canonical `devkit/` home

### Branching

- `main` — production-ready code
- Feature branches: `feat/description`, `fix/description`

### Conventions

- Token namespace: `--aw-*`
- Component class prefix: `.aw-*`
- Theme activation: `<html data-theme="..." data-overlay="s0-s4">`
- Demo HTMLs use `<link>` only, no inline `<style>`
- JS tools total must stay under 5 KB

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(tokens): add new shadow system
fix(components): correct card hover state
docs: update theme activation guide
```

## Pull Request Process

1. Verify the change is archival or migration-related
2. Update links to `../devkit/` when the canonical home changes
3. Keep PR scope focused — one migration or archival clarification per PR

## Code Style

- CSS: one property per line, alphabetical within blocks
- JS: ES modules, no dependencies, JSDoc for public APIs
- HTML demos: semantic markup, `<link>` imports only
