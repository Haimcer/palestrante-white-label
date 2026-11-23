import { escapeHtml } from '../core/dom.js';

export function SectionTitle({ eyebrow, title, description }) {
  return `
    <div class="section-title" data-reveal>
      ${eyebrow ? `<p class="eyebrow">${escapeHtml(eyebrow)}</p>` : ''}
      ${title ? `<h2>${escapeHtml(title)}</h2>` : ''}
      ${description ? `<p>${escapeHtml(description)}</p>` : ''}
    </div>
  `;
}
