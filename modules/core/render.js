import { Header, setupHeaderInteractions } from '../sections/header/header.js';
import { Hero } from '../sections/hero/hero.js';
import { About } from '../sections/about/about.js';
import { Gallery } from '../sections/gallery/gallery.js';
import { Testimonials } from '../sections/testimonials/testimonials.js';
import { Topics } from '../sections/topics/topics.js';
import { Method } from '../sections/method/method.js';
import { SocialProof } from '../sections/social-proof/social-proof.js';
import { Contact, setupContactForm } from '../sections/contact/contact.js';
import { Footer } from '../sections/footer/footer.js';

export function renderApp(config) {
  const app = document.getElementById('app');
  if (!app) throw new Error('Elemento #app não encontrado.');

  app.innerHTML = [
    Header(config),
    Hero(config),
    About(config),
    Gallery(config),
    Testimonials(config),
    Topics(config),
    Method(config),
    SocialProof(config),
    Contact(config),
    Footer(config),
  ].join('');

  setupHeaderInteractions();
  setupContactForm(config);
  setupRevealAnimations();
  setupActiveNavigation();
}

function setupRevealAnimations() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  elements.forEach((element) => observer.observe(element));
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll('.nav a[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === id));
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach((section) => observer.observe(section));
}
