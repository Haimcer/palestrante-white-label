import { escapeHtml } from '../../core/dom.js';
import { SectionTitle } from '../../components/section-title.js';
import { Image } from '../../components/media.js';

export function SocialProof(config) {
  const socialProof = config.socialProof;

  return `
    <section class="social-proof section section--compact" id="clientes">
      <div class="container">
        ${SectionTitle({ eyebrow: socialProof.eyebrow, title: socialProof.title })}
        <p class="lead" data-reveal>${escapeHtml(socialProof.peopleIntro)}</p>
        <div class="social-proof__people" data-reveal>
          ${socialProof.people.map((name) => `<span class="person-chip">${escapeHtml(name)}</span>`).join('')}
        </div>

        <p class="lead" data-reveal>${escapeHtml(socialProof.clientsIntro)}</p>
        <div class="client-grid" data-reveal>
          ${socialProof.clients.map((client) => `
            <figure class="client-logo">
              ${Image({ src: client.logoUrl, alt: `Logo ${client.name}` })}
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
