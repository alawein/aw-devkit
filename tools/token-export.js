/**
 * aw-devkit | Token Export
 * Extract computed CSS custom property values as JSON.
 *
 * Usage:
 *   import { exportTokens, exportTokensJSON } from './tools/token-export.js';
 *   const tokens = exportTokens();
 *   console.log(tokens['--aw-ninja-blood']); // '#8b0000'
 */

export function exportTokens(prefix = '--aw-', el = document.documentElement) {
  const style = getComputedStyle(el);
  const tokens = {};
  for (const prop of style) {
    if (prop.startsWith(prefix)) {
      tokens[prop] = style.getPropertyValue(prop).trim();
    }
  }
  return tokens;
}

export function exportTokensJSON(prefix = '--aw-', el = document.documentElement) {
  return JSON.stringify(exportTokens(prefix, el), null, 2);
}

export function exportTokensCSS(prefix = '--aw-', el = document.documentElement) {
  const tokens = exportTokens(prefix, el);
  return ':root {\n' + Object.entries(tokens)
    .map(([k, v]) => `  ${k}: ${v};`)
    .join('\n') + '\n}';
}
