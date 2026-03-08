# Quickstart

Get the Alawein devkit running in under 60 seconds.

## 1. Clone

```bash
git clone https://github.com/alawein/aw-devkit.git
cd aw-devkit
```

## 2. Fonts

Demos load fonts from Google Fonts CDN by default. For offline use:

```bash
node bin/aw-download-fonts.js
```

Then swap the CDN `<link>` in your HTML for:

```html
<link rel="stylesheet" href="path/to/aw-devkit/fonts/fonts.css">
```

## 3. Add to your HTML

```html
<link rel="stylesheet" href="path/to/aw-devkit/tokens/index.css">
<link rel="stylesheet" href="path/to/aw-devkit/components/index.css">
```

## 4. Set a theme

```html
<html data-theme="industrial" data-overlay="s2">
```

Available themes: `broadsheet`, `vhs`, `industrial`, `arcade`

## 5. Use components

```html
<button class="aw-btn aw-btn--primary">Deploy</button>
<div class="aw-card">
  <div class="aw-card__body">Content here</div>
</div>
```

## 6. Control via JS (optional)

```html
<script type="module">
  import { setTheme, setOverlay } from './tools/theme-engine.js';
  setTheme('arcade');
  setOverlay('s3');
</script>
```

## Try the demos

Open any file in `demos/` directly in your browser. No build step needed.

## Next steps

- [Token Reference](./token-reference.md) — all ~120 custom properties
- [Theme Guide](./theme-guide.md) — how themes work
- [Overlay Guide](./overlay-guide.md) — the Ninja Overlay system
- [Component API](./component-api.md) — every component class
