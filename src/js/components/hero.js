// ============================================
// HERO COMPONENT - Ultra Premium Design
// ============================================

const BASE_URL = import.meta.env.BASE_URL || '/';
const HERO_IMAGE = `${BASE_URL}hero-bg.png`;
// Video de lavado de auto de Pexels (libre de derechos)
const HERO_VIDEO = 'https://videos.pexels.com/video-files/4488209/4488209-hd_1920_1080_25fps.mp4';

// Generar partículas de agua sutiles
function generateWaterParticles(count = 30) {
  let particles = '';
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = Math.random() * 4 + 6;
    particles += `<div class="hero__particle" style="
      --size: ${size}px;
      --left: ${left}%;
      --delay: ${delay}s;
      --duration: ${duration}s;
    "></div>`;
  }
  return particles;
}

export function createHero() {
  return `
    <section id="inicio" class="hero">
      <!-- Background Layer with Video -->
      <div class="hero__background">
        <video
          class="hero__background-video"
          autoplay
          muted
          loop
          playsinline
          poster="${HERO_IMAGE}"
        >
          <source src="${HERO_VIDEO}" type="video/mp4" />
        </video>
        <img src="${HERO_IMAGE}" alt="Lavado de autos profesional" class="hero__background-image hero__background-image--fallback" />
        <div class="hero__background-overlay"></div>
      </div>

      <!-- Subtle Particles -->
      <div class="hero__particles">
        ${generateWaterParticles(25)}
      </div>

      <!-- Ambient Glow Effects -->
      <div class="hero__ambient">
        <div class="hero__ambient-orb hero__ambient-orb--1"></div>
        <div class="hero__ambient-orb hero__ambient-orb--2"></div>
      </div>

      <!-- Main Content -->
      <div class="hero__container">
        <div class="hero__content">

          <!-- Small Badge -->
          <div class="hero__badge">
            <span class="hero__badge-dot"></span>
            <span>Premium Car Wash</span>
          </div>

          <!-- Main Title - The Star -->
          <h1 class="hero__title">
            <span class="hero__title-sub">Lavado de Autos</span>
            <span class="hero__title-main">
              <span class="hero__title-el">EL CRACKER</span>
              <span class="hero__title-ryd">RYD</span>
            </span>
          </h1>

          <!-- Tagline -->
          <p class="hero__tagline">
            Donde tu vehículo recibe el cuidado que merece
          </p>

          <!-- CTA Buttons -->
          <div class="hero__actions">
            <a href="#servicios" class="hero__btn hero__btn--primary">
              <span>Explorar Servicios</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </a>
            <a href="https://wa.me/56912345678?text=Hola!%20Quiero%20reservar%20un%20lavado" class="hero__btn hero__btn--secondary" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Contactar</span>
            </a>
          </div>

        </div>

        <!-- Side Info (Desktop) -->
        <div class="hero__side-info">
          <div class="hero__info-card">
            <div class="hero__info-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
              </svg>
            </div>
            <div class="hero__info-text">
              <span class="hero__info-label">Lavado</span>
              <span class="hero__info-value">Premium</span>
            </div>
          </div>
          <div class="hero__info-card">
            <div class="hero__info-icon hero__info-icon--gold">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
            </div>
            <div class="hero__info-text">
              <span class="hero__info-label">Rating</span>
              <span class="hero__info-value">4.9/5</span>
            </div>
          </div>
          <div class="hero__info-card">
            <div class="hero__info-icon hero__info-icon--green">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <div class="hero__info-text">
              <span class="hero__info-label">Garantía</span>
              <span class="hero__info-value">100%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Gradient Fade -->
      <div class="hero__fade"></div>

      <!-- Scroll Indicator -->
      <div class="hero__scroll">
        <div class="hero__scroll-line"></div>
      </div>
    </section>
  `;
}

export function initHero() {
  // Video handling
  const video = document.querySelector('.hero__background-video');
  const fallbackImage = document.querySelector('.hero__background-image--fallback');

  if (video) {
    // Handle video loading error
    video.addEventListener('error', () => {
      video.style.display = 'none';
      if (fallbackImage) {
        fallbackImage.style.opacity = '0.7';
      }
    });

    // Pause video when not visible (performance)
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    videoObserver.observe(video);

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      video.style.display = 'none';
      if (fallbackImage) {
        fallbackImage.style.opacity = '0.7';
      }
    }
  }

  // Smooth scroll for buttons
  const scrollLinks = document.querySelectorAll('.hero__btn--primary');
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

  // Parallax effect (skip if reduced motion)
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const hero = document.querySelector('.hero');
          if (hero && scrolled < window.innerHeight) {
            const content = hero.querySelector('.hero__content');
            const sideInfo = hero.querySelector('.hero__side-info');

            if (content) {
              content.style.transform = `translateY(${scrolled * 0.3}px)`;
              content.style.opacity = 1 - (scrolled / 600);
            }
            if (sideInfo) {
              sideInfo.style.transform = `translateY(${scrolled * 0.15}px)`;
              sideInfo.style.opacity = 1 - (scrolled / 500);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Animate elements on load
  setTimeout(() => {
    document.querySelector('.hero')?.classList.add('is-loaded');
  }, 100);
}
