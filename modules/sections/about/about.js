import { escapeHtml } from '../../core/dom.js';
import { SectionTitle } from '../../components/section-title.js';
import { Image } from '../../components/media.js';

export function About(config) {
  const about = config.about;

  return `
    <section class="about section" id="sobre">
      <div class="container about__grid">
        <figure class="about__image card" data-reveal>
          ${Image({ src: about.imageUrl, alt: about.imageAlt })}
        </figure>
        <div data-reveal>
          ${SectionTitle({ eyebrow: about.eyebrow, title: about.title })}
          ${about.description.map((paragraph) => `<p class="lead">${escapeHtml(paragraph)}</p>`).join('')}
          <div class="about__cards">
            ${about.cards.map((card) => `
              <article class="about-card card">
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.text)}</p>
              </article>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
