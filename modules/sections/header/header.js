import { escapeHtml } from '../../core/dom.js';
import { Button } from '../../components/button.js';
import { Image } from '../../components/media.js';

export function Header(config) {
  const nav = config.navigation
    .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
    .join('');

  return `
    <header class="site-header" data-site-header>
      <div class="container site-header__inner">
        <a class="logo" href="#inicio" aria-label="Página inicial">
          ${Image({ src: config.brand.logoUrl, alt: config.brand.logoAlt, loading: 'eager' })}
          <span>${escapeHtml(config.brand.shortName)}</span>
        </a>

        <nav class="nav" aria-label="Menu principal" data-nav>
          ${nav}
          ${Button({ label: 'Orçamento', href: '#contato', variant: 'primary', extraClass: 'nav__cta' })}
        </nav>

        <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-menu-toggle>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function setupHeaderInteractions() {
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('is-menu-open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      document.body.classList.remove('is-menu-open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Abrir menu');
    }
  });
}
