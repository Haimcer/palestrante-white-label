export function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function attrs(attributes = {}) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ');
}

export function setRootVariables(theme = {}) {
  const root = document.documentElement;
  const map = {
    colorBackground: '--color-background',
    colorSurface: '--color-surface',
    colorSurfaceSoft: '--color-surface-soft',
    colorText: '--color-text',
    colorMuted: '--color-muted',
    colorPrimary: '--color-primary',
    colorPrimaryDark: '--color-primary-dark',
    colorBorder: '--color-border',
  };

  Object.entries(map).forEach(([key, cssVar]) => {
    if (theme[key]) root.style.setProperty(cssVar, theme[key]);
  });
}

export function createWhatsAppUrl(number, message) {
  const cleanNumber = String(number || '').replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message || '')}`;
}
