/**
 * aw-devkit | Contrast Checker
 * Check WCAG AA/AAA contrast ratios between computed CSS custom properties.
 *
 * Usage:
 *   import { checkContrast, auditPage } from './tools/contrast-checker.js';
 *   const result = checkContrast('#0d0d0d', '#c0c5ce');
 *   // { ratio: 9.5, aa: true, aaa: true, aaLarge: true, aaaLarge: true }
 */

function luminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g)
    .map(c => {
      const v = parseInt(c, 16) / 255;
      return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

export function checkContrast(fg, bg) {
  const l1 = luminance(fg);
  const l2 = luminance(bg);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const r = Math.round(ratio * 100) / 100;
  return {
    ratio: r,
    aa: r >= 4.5,
    aaa: r >= 7,
    aaLarge: r >= 3,
    aaaLarge: r >= 4.5,
  };
}

function toHex(cssColor) {
  const c = document.createElement('canvas');
  c.width = c.height = 1;
  const x = c.getContext('2d');
  x.fillStyle = cssColor;
  x.fillRect(0, 0, 1, 1);
  const [r, g, b] = x.getImageData(0, 0, 1, 1).data;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function auditPage() {
  const fails = [];
  for (const el of document.querySelectorAll('body *')) {
    const s = getComputedStyle(el);
    if (s.backgroundColor === 'rgba(0, 0, 0, 0)') continue;
    const fg = toHex(s.color), bg = toHex(s.backgroundColor);
    const r = checkContrast(fg, bg);
    if (!r.aa) fails.push({ el: el.tagName + (el.className ? '.' + el.className.split(' ')[0] : ''), fg, bg, ...r });
  }
  return fails;
}
