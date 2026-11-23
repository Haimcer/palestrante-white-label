import { escapeHtml } from '../../core/dom.js';
import { Button } from '../../components/button.js';
import { SectionTitle } from '../../components/section-title.js';

export function Method(config) {
  const method = config.method;

  return `
    <section class="method section" id="metodologia">
      <div class="container method__grid">
        <div data-reveal>
          ${SectionTitle(method)}
          <div class="method__actions">
            ${Button({ ...method.cta, variant: 'primary' })}
          </div>
        </div>
        <div class="method__panel card" data-reveal>
          <div class="method__steps">
            ${method.steps.map((step, index) => `
              <article class="method-step card">
                <p class="eyebrow">Passo ${index + 1}</p>
                <h3>${escapeHtml(step.title)}</h3>
                <p>${escapeHtml(step.text)}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
