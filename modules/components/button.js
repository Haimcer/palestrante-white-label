import { attrs, escapeHtml } from '../core/dom.js';

export function Button({ label, href = '#', variant = 'primary', extraClass = '' }) {
  return `
    <a class="button button--${escapeHtml(variant)} ${escapeHtml(extraClass)}" ${attrs({ href })}>
      <span>${escapeHtml(label)}</span>
    </a>
  `;
}
