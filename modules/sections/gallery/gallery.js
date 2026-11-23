import { SectionTitle } from '../../components/section-title.js';
import { Image } from '../../components/media.js';

export function Gallery(config) {
  const gallery = config.gallery;

  return `
    <section class="gallery section section--compact" id="fotos">
      <div class="container">
        ${SectionTitle(gallery)}
        <div class="gallery-grid">
          ${gallery.items.map((item) => `
            <figure class="gallery-card card" data-reveal>
              ${Image({ src: item.src, alt: item.alt })}
            </figure>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
