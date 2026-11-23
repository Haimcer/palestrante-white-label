import { attrs, escapeHtml } from '../core/dom.js';

export function Image({ src, alt = '', className = '', loading = 'lazy' }) {
  return `<img ${attrs({ src, alt, loading, class: className })} />`;
}

export function VideoEmbed({ url, title = 'Vídeo' }) {
  if (!url) return '';

  const isEmbed = url.includes('youtube.com/embed') || url.includes('player.vimeo.com');
  const isVideoFile = /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

  if (isVideoFile) {
    return `
      <video controls preload="metadata">
        <source src="${escapeHtml(url)}" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    `;
  }

  return `
    <iframe
      src="${escapeHtml(isEmbed ? url : convertToYouTubeEmbed(url))}"
      title="${escapeHtml(title)}"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}

function convertToYouTubeEmbed(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtube.com')) {
      const id = parsed.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed/${parsed.pathname.replace('/', '')}`;
    }
    return url;
  } catch {
    return url;
  }
}
