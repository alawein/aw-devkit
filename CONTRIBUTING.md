# Contributing to aw-devkit

Thank you for your interest in contributing!

## Getting Started

1. Clone the repository
2. Open any file in `demos/` in a browser to preview
3. No build step required — edit CSS/JS directly

## Development Workflow

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

1. Verify changes against all 4 themes + overlay combinations
2. Test `prefers-reduced-motion` fallbacks for any animations
3. Update `demos/` if adding new components or tokens
4. Keep PR scope focused — one feature or fix per PR

## Code Style

- CSS: one property per line, alphabetical within blocks
- JS: ES modules, no dependencies, JSDoc for public APIs
- HTML demos: semantic markup, `<link>` imports only
