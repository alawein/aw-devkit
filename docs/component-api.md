# Component API

All components use the `.aw-*` class prefix. They consume design tokens via CSS custom properties.

## Primitives

### Button `.aw-btn`
Variants: `--primary`, `--ghost`, `--danger`
Sizes: `--sm`, `--lg`

```html
<button class="aw-btn aw-btn--primary aw-btn--lg">Deploy</button>
```

### Input `.aw-input`
Variant: `--error`

```html
<input class="aw-input" type="text" placeholder="Enter value">
```

### Select `.aw-select`
```html
<select class="aw-select">
  <option>Option 1</option>
</select>
```

### Checkbox `.aw-checkbox` / Radio `.aw-radio`
```html
<label class="aw-checkbox"><input type="checkbox"> Label</label>
```

### Badge `.aw-badge`
Variants: `--success`, `--warning`, `--error`, `--info`, `--accent`

```html
<span class="aw-badge aw-badge--success">Active</span>
```

### Tag `.aw-tag`
Variant: `--removable`

```html
<span class="aw-tag aw-tag--removable">
  Tag text <button class="aw-tag__remove">&times;</button>
</span>
```

### Divider `.aw-divider`
Variants: `--thick`, `--hazard`, `--editorial`, `--vertical`

```html
<hr class="aw-divider--editorial">
```

## Composites

### Card `.aw-card`
Children: `__header`, `__body`, `__footer`, `__title`, `__media`

```html
<div class="aw-card">
  <div class="aw-card__header"><h3 class="aw-card__title">Title</h3></div>
  <div class="aw-card__body">Content</div>
  <div class="aw-card__footer">Footer</div>
</div>
```

### Nav `.aw-nav`
Children: `__brand`, `__links`, `__link`, `__link--active`, `__evidence`

### Modal `.aw-modal-overlay` + `.aw-modal`
State: `--open` on overlay. Children: `__header`, `__title`, `__close`, `__body`, `__footer`

### Toast `.aw-toast`
Container: `.aw-toast-container`. Variants: `--success`, `--warning`, `--error`, `--info`. State: `--dismissing`.

### Tabs `.aw-tabs`
Children: `__list`, `__tab`, `__tab--active`, `__panel`, `__panel--active`

## Data

### Table `.aw-table`
Wrapper: `.aw-table-wrap`. Variants: `--striped`, `--compact`. Cell: `__mono`.

### Stats Panel `.aw-stats` + `.aw-stat`
Children: `__label`, `__value`, `__delta`, `__delta--up`, `__delta--down`

### Terminal `.aw-terminal`
Children: `__header`, `__dot` (--red/--yellow/--green), `__body`, `__prompt`, `__output`, `__comment`

## Layout

### Grid `.aw-grid`
Columns: `.aw-col-{1-12}`, `.aw-col-md-{1-12}`, `.aw-col-lg-{1-12}`

### Hero `.aw-hero`
Children: `__content`, `__title`, `__subtitle`, `__actions`

### Footer `.aw-footer`
Children: `__inner`, `__evidence`, `__mark`, `__links`, `__link`
