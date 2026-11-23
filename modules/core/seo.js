export function applySeo(config) {
  const { site, brand, seo } = config;
  const title = seo.title || brand.name;
  const description = seo.description || brand.slogan;

  document.documentElement.lang = site.language || 'pt-BR';
  document.title = title;

  setMeta('description', description);
  setMeta('keywords', (seo.keywords || []).join(', '));
  setMeta('theme-color', config.theme?.colorBackground || '#111111');

  setLink('canonical', site.url);
  setLink('icon', brand.faviconUrl);
  setLink('apple-touch-icon', brand.faviconUrl);

  setProperty('og:title', title);
  setProperty('og:description', description);
  setProperty('og:image', seo.image);
  setProperty('og:url', site.url);
  setProperty('og:site_name', brand.name);
  setProperty('og:type', 'website');

  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', title);
  setMeta('twitter:description', description);
  setMeta('twitter:image', seo.image);

  injectStructuredData(config);
}

function setMeta(name, content) {
  if (!content) return;
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setProperty(property, content) {
  if (!content) return;
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLink(rel, href) {
  if (!href) return;
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function injectStructuredData(config) {
  const existing = document.getElementById('structured-data');
  if (existing) existing.remove();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: config.brand.businessName || config.brand.name,
    url: config.site.url,
    image: config.seo.image,
    description: config.seo.description,
    email: config.contact.email,
    telephone: config.contact.phoneDisplay,
    areaServed: 'Brasil',
    sameAs: [],
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'structured-data';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
