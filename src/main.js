// ============================================
// MAIN ENTRY POINT
// LAVADO DE AUTOS EL CRACKER RYD
// Premium Design
// ============================================

// Styles
import './styles/main.scss';

// Components
import { createHeader, initHeader } from './js/components/header.js';
import { createHero, initHero } from './js/components/hero.js';
import { createStats, initStats } from './js/components/stats.js';
import { createServices, initServices } from './js/components/services.js';
import { createGallery, initGallery } from './js/components/gallery.js';
import { createTestimonials, initTestimonials } from './js/components/testimonials.js';
import { createLocation, initLocation } from './js/components/location.js';
import { createPromos, initPromos } from './js/components/promos.js';
import { createFooter, initFooter } from './js/components/footer.js';

// Initialize App
function initApp() {
  const app = document.querySelector('#app');

  if (!app) return;

  // Render components
  app.innerHTML = `
    ${createHeader()}
    <main>
      ${createHero()}
      ${createStats()}
      ${createServices()}
      ${createGallery()}
      ${createTestimonials()}
      ${createLocation()}
      ${createPromos()}
    </main>
    ${createFooter()}
  `;

  // Initialize component functionality
  initHeader();
  initHero();
  initStats();
  initServices();
  initGallery();
  initTestimonials();
  initLocation();
  initPromos();
  initFooter();

  // Add loaded class for initial animations
  requestAnimationFrame(() => {
    document.body.classList.add('is-loaded');
  });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
