/**
 * aw-devkit | Theme Engine
 * Switch themes and overlay intensity via data attributes.
 *
 * Usage:
 *   import { setTheme, setOverlay, getTheme, getOverlay } from './tools/theme-engine.js';
 *   setTheme('industrial');
 *   setOverlay('s2');
 */

const THEMES = ['broadsheet', 'vhs', 'industrial', 'arcade'];
const OVERLAYS = ['s0', 's1', 's2', 's3', 's4'];
const ROOT = () => document.documentElement;

export function setTheme(theme) {
  if (!THEMES.includes(theme)) {
    console.warn(`[aw-devkit] Unknown theme: "${theme}". Valid: ${THEMES.join(', ')}`);
    return false;
  }
  ROOT().setAttribute('data-theme', theme);
  ROOT().dispatchEvent(new CustomEvent('aw:theme-change', { detail: { theme } }));
  return true;
}

export function setOverlay(level) {
  if (!OVERLAYS.includes(level)) {
    console.warn(`[aw-devkit] Unknown overlay: "${level}". Valid: ${OVERLAYS.join(', ')}`);
    return false;
  }
  if (level === 's0') {
    ROOT().removeAttribute('data-overlay');
  } else {
    ROOT().setAttribute('data-overlay', level);
  }
  ROOT().dispatchEvent(new CustomEvent('aw:overlay-change', { detail: { overlay: level } }));
  return true;
}

export function getTheme() {
  return ROOT().getAttribute('data-theme') || null;
}

export function getOverlay() {
  return ROOT().getAttribute('data-overlay') || 's0';
}

export function cycleTheme() {
  const current = getTheme();
  const idx = THEMES.indexOf(current);
  const next = THEMES[(idx + 1) % THEMES.length];
  return setTheme(next) ? next : null;
}

export function cycleOverlay() {
  const current = getOverlay();
  const idx = OVERLAYS.indexOf(current);
  const next = OVERLAYS[(idx + 1) % OVERLAYS.length];
  return setOverlay(next) ? next : null;
}

export { THEMES, OVERLAYS };
