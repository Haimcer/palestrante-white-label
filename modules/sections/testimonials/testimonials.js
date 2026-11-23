import { escapeHtml } from '../../core/dom.js';
import { SectionTitle } from '../../components/section-title.js';

export function Testimonials(config) {
  const testimonials = config.testimonials;

  return `
    <section class="testimonials section section--compact" id="depoimentos">
      <div class="container">
        ${SectionTitle(testimonials)}
        <div class="testimonials-grid">
          ${testimonials.items.map((item) => `
            <article class="testimonial-card card" data-reveal>
              <blockquote>“${escapeHtml(item.quote)}”</blockquote>
              <footer>
                <strong>${escapeHtml(item.author)}</strong><br />
                <span>${escapeHtml(item.role)}</span>
              </footer>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
