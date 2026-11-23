import { escapeHtml } from '../../core/dom.js';
import { Button } from '../../components/button.js';
import { Image, VideoEmbed } from '../../components/media.js';

export function Hero(config) {
  const { hero, stats } = config;

  return `
    <main id="conteudo">
      <section class="hero section" id="inicio">
        <div class="container hero__grid">
          <div class="hero__content" data-reveal>
            <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
            <h1>${escapeHtml(hero.title)} <span class="text-highlight">${escapeHtml(hero.highlight)}</span></h1>
            <p class="lead">${escapeHtml(hero.description)}</p>
            <div class="hero__actions">
              ${Button({ ...hero.primaryCta, variant: 'primary' })}
              ${Button({ ...hero.secondaryCta, variant: 'outline' })}
            </div>
            <div class="stats">
              ${stats.map((stat) => `
                <div class="stat card">
                  <strong>${escapeHtml(stat.value)}</strong>
                  <span>${escapeHtml(stat.label)}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="hero__media" data-reveal>
            <figure class="hero__image card">
              ${Image({ src: hero.imageUrl, alt: hero.imageAlt, loading: 'eager' })}
            </figure>
            <div class="hero__video card">
              ${VideoEmbed({ url: hero.videoUrl, title: hero.videoTitle })}
            </div>
          </div>
        </div>
      </section>
    </main>
  `;
}
