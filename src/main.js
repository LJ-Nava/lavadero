// ============================================
// MAIN ENTRY POINT
// LAVADO DE AUTOS EL CRACKER RYD
// ============================================

// Styles
import './styles/main.scss';

// Components
import { createHeader, initHeader } from './js/components/header.js';
import { createHero, initHero } from './js/components/hero.js';
import { createServices, initServices } from './js/components/services.js';
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
      ${createServices()}
      ${createLocation()}
      ${createPromos()}
    </main>
    ${createFooter()}
  `;

  // Initialize component functionality
  initHeader();
  initHero();
  initServices();
  initLocation();
  initPromos();
  initFooter();
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
