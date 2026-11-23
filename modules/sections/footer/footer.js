import { escapeHtml } from '../../core/dom.js';

export function Footer(config) {
  return `
    <footer class="site-footer">
      <div class="container site-footer__inner">
        <p>${escapeHtml(config.brand.name)} © ${escapeHtml(config.site.year)}. Todos os direitos reservados.</p>
        <p>White label pronto para personalização.</p>
      </div>
    </footer>
  `;
}
