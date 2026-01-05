// ============================================
// HERO COMPONENT - Elegant Design
// ============================================

// Imagen de fondo
const HERO_IMAGE = '/hero-bg.png';

export function createHero() {
  return `
    <section id="inicio" class="hero">

      <!-- Background -->
      <div class="hero__background">
        <img
          src="${HERO_IMAGE}"
          alt="Lavado de autos profesional"
          class="hero__background-image"
        />
        <div class="hero__background-overlay"></div>
      </div>

      <!-- Decorative Elements -->
      <div class="hero__decoration">
        <div class="hero__decoration-circle hero__decoration-circle--1"></div>
        <div class="hero__decoration-circle hero__decoration-circle--2"></div>
      </div>

      <!-- Content -->
      <div class="hero__content">

        <!-- Badge -->
        <div class="hero__badge">
          <div class="hero__badge-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span>Premium Car Wash</span>
          <div class="hero__badge-dot"></div>
          <span>Chile</span>
        </div>

        <!-- Title -->
        <h1 class="hero__title">
          <span class="hero__title-top">Lavado de Autos</span>
          <span class="hero__title-main">
            EL CRACKER
            <span class="text-accent">RYD</span>
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="hero__subtitle">
          Donde tu vehículo recibe el cuidado que merece.
          <strong>Full espacio, full calidad.</strong>
        </p>

        <!-- Features -->
        <div class="hero__features">
          <div class="hero__feature">
            <div class="hero__feature-icon">
              <!-- Gota de agua -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
              </svg>
            </div>
            <span>Lavado Premium</span>
          </div>
          <div class="hero__feature">
            <div class="hero__feature-icon">
              <!-- Brillo/Estrella -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <span>Brillo Perfecto</span>
          </div>
          <div class="hero__feature">
            <div class="hero__feature-icon">
              <!-- Escudo/Protección -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <span>Protección Total</span>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="hero__cta">
          <a href="#servicios" class="hero__btn hero__btn--primary">
            <span>Ver Servicios</span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </a>
          <a href="https://wa.me/56912345678" class="hero__btn hero__btn--whatsapp" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Reservar Ahora</span>
          </a>
        </div>

      </div>

      <!-- Scroll Indicator -->
      <a href="#servicios" class="hero__scroll">
        <span>Descubre más</span>
        <div class="hero__scroll-line">
          <div class="hero__scroll-dot"></div>
        </div>
      </a>

    </section>
  `;
}

export function initHero() {
  // Smooth scroll for all hero links
  const scrollLinks = document.querySelectorAll('.hero__btn--primary, .hero__scroll');

  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
