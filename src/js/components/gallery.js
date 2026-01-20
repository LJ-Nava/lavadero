// ============================================
// GALLERY COMPONENT - Before/After Slider
// ============================================

// Galería de transformaciones - usando imágenes de Unsplash
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'BMW Serie 3',
    service: 'Lavado Premium',
    beforeImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Ford Mustang',
    service: 'Pulido Profesional',
    beforeImage: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Porsche 911',
    service: 'Lavado Completo',
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Mercedes-Benz',
    service: 'Lavado Premium',
    beforeImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop&q=80',
  }
];

function createGalleryItem(item, index) {
  return `
    <div class="gallery__item" data-index="${index}">
      <div class="gallery__comparison">
        <!-- Before Image -->
        <div class="gallery__before">
          <img src="${item.beforeImage}" alt="${item.title} - Antes" loading="lazy" />
          <span class="gallery__label gallery__label--before">Antes</span>
        </div>

        <!-- After Image -->
        <div class="gallery__after">
          <img src="${item.afterImage}" alt="${item.title} - Después" loading="lazy" />
          <span class="gallery__label gallery__label--after">Después</span>
        </div>

        <!-- Slider Handle -->
        <div class="gallery__slider">
          <div class="gallery__slider-line"></div>
          <div class="gallery__slider-handle">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
            </svg>
          </div>
        </div>

        <!-- Drag hint -->
        <div class="gallery__hint">
          <span>Arrastra para comparar</span>
        </div>
      </div>

      <!-- Item Info -->
      <div class="gallery__info">
        <h3 class="gallery__title">${item.title}</h3>
        <span class="gallery__service">${item.service}</span>
      </div>
    </div>
  `;
}

export function createGallery() {
  return `
    <section id="galeria" class="gallery">
      <!-- Background Effects -->
      <div class="gallery__bg-effects">
        <div class="gallery__glow gallery__glow--1"></div>
        <div class="gallery__glow gallery__glow--2"></div>
      </div>

      <div class="gallery__container">
        <!-- Header -->
        <header class="gallery__header">
          <span class="gallery__badge">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            Resultados Reales
          </span>
          <h2 class="gallery__main-title">
            Transformaciones <span class="text-gradient">Increíbles</span>
          </h2>
          <p class="gallery__subtitle">
            Mira la diferencia que hace un lavado profesional en tu vehículo
          </p>
        </header>

        <!-- Gallery Grid -->
        <div class="gallery__grid">
          ${GALLERY_ITEMS.map((item, index) => createGalleryItem(item, index)).join('')}
        </div>

        <!-- CTA -->
        <div class="gallery__cta">
          <p class="gallery__cta-text">
            <span class="gallery__cta-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/>
              </svg>
            </span>
            ¿Quieres ver tu vehículo así de brillante?
          </p>
          <a href="https://wa.me/56912345678?text=Hola!%20Vi%20la%20galería%20y%20quiero%20agendar%20un%20lavado" class="gallery__btn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Agendar Mi Lavado</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery__item');

  galleryItems.forEach(item => {
    const comparison = item.querySelector('.gallery__comparison');
    const afterDiv = item.querySelector('.gallery__after');
    const slider = item.querySelector('.gallery__slider');
    const hint = item.querySelector('.gallery__hint');

    let isDown = false;

    function updateSlider(x) {
      const rect = comparison.getBoundingClientRect();
      let percentage = ((x - rect.left) / rect.width) * 100;
      percentage = Math.max(0, Math.min(100, percentage));

      afterDiv.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
      slider.style.left = `${percentage}%`;

      // Hide hint after first interaction
      if (hint) {
        hint.style.opacity = '0';
      }
    }

    // Mouse events
    comparison.addEventListener('mousedown', (e) => {
      isDown = true;
      comparison.classList.add('is-dragging');
      updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      updateSlider(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      isDown = false;
      comparison.classList.remove('is-dragging');
    });

    // Touch events
    comparison.addEventListener('touchstart', (e) => {
      isDown = true;
      comparison.classList.add('is-dragging');
      updateSlider(e.touches[0].clientX);
    });

    comparison.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      updateSlider(e.touches[0].clientX);
    });

    comparison.addEventListener('touchend', () => {
      isDown = false;
      comparison.classList.remove('is-dragging');
    });

    // Initialize at 50%
    afterDiv.style.clipPath = 'inset(0 50% 0 0)';
    slider.style.left = '50%';
  });

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.2 });

  galleryItems.forEach(item => observer.observe(item));
}
