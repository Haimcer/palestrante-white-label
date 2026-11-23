import { attrs, createWhatsAppUrl, escapeHtml } from '../../core/dom.js';
import { Button } from '../../components/button.js';
import { SectionTitle } from '../../components/section-title.js';

export function Contact(config) {
  const contact = config.contact;
  const whatsappUrl = createWhatsAppUrl(contact.whatsappNumber, contact.whatsappDefaultMessage);

  return `
    <section class="contact section" id="contato">
      <div class="container contact__grid">
        <div class="contact__info" data-reveal>
          ${SectionTitle(contact)}
          <div class="contact-list">
            <a href="mailto:${escapeHtml(contact.email)}">E-mail: ${escapeHtml(contact.email)}</a>
            <a href="${escapeHtml(whatsappUrl)}" target="_blank" rel="noopener">WhatsApp: ${escapeHtml(contact.phoneDisplay)}</a>
            <span>Atendimento comercial para eventos, convenções, campanhas internas e treinamentos.</span>
          </div>
          <div class="hero__actions">
            ${Button({ label: 'Chamar no WhatsApp', href: whatsappUrl, variant: 'primary' })}
          </div>
        </div>

        <form class="contact-form card" data-contact-form data-reveal>
          <div class="form-grid">
            ${contact.fields.map(renderField).join('')}
          </div>
          <button class="button button--primary" type="submit">Enviar solicitação</button>
          <p class="form-status" data-form-status aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

function renderField(field) {
  const id = `field-${field.name}`;
  const full = field.type === 'textarea' ? ' form-field--full' : '';
  const commonAttrs = attrs({
    id,
    name: field.name,
    required: field.required ? 'required' : undefined,
    placeholder: field.placeholder,
  });

  return `
    <div class="form-field${full}">
      <label for="${escapeHtml(id)}">${escapeHtml(field.label)}</label>
      ${field.type === 'textarea'
        ? `<textarea ${commonAttrs}></textarea>`
        : `<input ${commonAttrs} type="${escapeHtml(field.type)}" />`}
    </div>
  `;
}

export function setupContactForm(config) {
  const form = document.querySelector('[data-contact-form]');
  const status = document.querySelector('[data-form-status]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const message = buildMessage(config, payload);
    const url = createWhatsAppUrl(config.contact.whatsappNumber, message);

    if (status) status.textContent = 'Abrindo WhatsApp com a mensagem preenchida.';
    window.open(url, '_blank', 'noopener');
  });
}

function buildMessage(config, payload) {
  return [
    config.contact.whatsappDefaultMessage,
    '',
    `Nome: ${payload.name || '-'}`,
    `Empresa: ${payload.company || '-'}`,
    `E-mail: ${payload.email || '-'}`,
    `Telefone: ${payload.phone || '-'}`,
    `Data do evento: ${payload.eventDate || '-'}`,
    `Mensagem: ${payload.message || '-'}`,
  ].join('\n');
}
