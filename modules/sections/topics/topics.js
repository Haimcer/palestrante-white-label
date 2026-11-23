import { escapeHtml } from '../../core/dom.js';
import { SectionTitle } from '../../components/section-title.js';

export function Topics(config) {
  const topics = config.topics;

  return `
    <section class="topics section" id="palestras">
      <div class="container">
        ${SectionTitle(topics)}
        <div class="topics-grid">
          ${topics.items.map((topic) => `
            <article class="topic-card card" data-reveal>
              <h3>${escapeHtml(topic.title)}</h3>
              <p>${escapeHtml(topic.text)}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
