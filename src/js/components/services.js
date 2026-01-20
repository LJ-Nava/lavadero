// ============================================
// SERVICES COMPONENT - Premium Design with 3D Effects
// ============================================

const BASE_URL = import.meta.env.BASE_URL || '/';

const VEHICLES = [
  { id: 'moto', name: 'Moto', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>` },
  { id: 'auto', name: 'Auto', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>` },
  { id: 'camioneta', name: 'Camioneta', icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>` }
];

const SERVICES = [
  {
    id: 'basico',
    name: 'Lavado Básico',
    tagline: 'Rápido y efectivo',
    basePrice: 15000,
    duration: '20 min',
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)',
    features: ['Lavado exterior completo', 'Enjuague a presión', 'Secado con microfibra', 'Limpieza de vidrios']
  },
  {
    id: 'completo',
    name: 'Lavado Completo',
    tagline: 'El más pedido',
    basePrice: 18000,
    duration: '45 min',
    color: '#e31c25',
    gradient: 'linear-gradient(135deg, #e31c25 0%, #b71c1c 100%)',
    popular: true,
    features: ['Todo del básico', 'Aspirado interior', 'Limpieza de tablero', 'Limpieza de tapices', 'Ambientador premium']
  },
  {
    id: 'premium',
    name: 'Lavado Premium',
    tagline: 'Tratamiento VIP',
    basePrice: 30000,
    duration: '90 min',
    color: '#ffd700',
    gradient: 'linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)',
    features: ['Todo del completo', 'Encerado protector', 'Acondicionador de cueros', 'Protección de llantas', 'Tratamiento anti-lluvia']
  },
  {
    id: 'detallado',
    name: 'Pulido Profesional',
    tagline: 'Restauración total',
    basePrice: 40000,
    duration: '3+ hrs',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
    features: ['Pulido de carrocería', 'Corrección de pintura', 'Restauración de faros', 'Limpieza de motor', 'Sellador cerámico']
  }
];

let selectedVehicle = VEHICLES[1];

function getServiceImage(serviceId) {
  // Auto y Camioneta usan imágenes .jpeg, moto usa .png
  const extension = (selectedVehicle.id === 'camioneta' || selectedVehicle.id === 'auto') ? 'jpeg' : 'png';
  return `${BASE_URL}${selectedVehicle.id}-${serviceId}.${extension}`;
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function createVehicleSelector() {
  return VEHICLES.map(v => `
    <button
      class="services__vehicle-btn ${selectedVehicle.id === v.id ? 'services__vehicle-btn--active' : ''}"
      data-vehicle="${v.id}"
      aria-label="Seleccionar ${v.name}"
    >
      <span class="services__vehicle-icon">${v.icon}</span>
      <span class="services__vehicle-name">${v.name}</span>
      ${selectedVehicle.id === v.id ? '<span class="services__vehicle-glow"></span>' : ''}
    </button>
  `).join('');
}

function createServiceCard(service, index) {
  const price = service.basePrice;
  const serviceImage = getServiceImage(service.id);
  const whatsappMsg = `Hola! Quiero reservar un *${service.name}* para mi *${selectedVehicle.name}*`;
  const whatsappURL = `https://wa.me/56912345678?text=${encodeURIComponent(whatsappMsg)}`;

  const featuresHTML = service.features.map(f => `
    <li>
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${f}</span>
    </li>
  `).join('');

  return `
    <div class="services__card ${service.popular ? 'services__card--popular' : ''}"
         data-index="${index}"
         style="--card-color: ${service.color}; --card-gradient: ${service.gradient}">

      ${service.popular ? `
        <div class="services__card-ribbon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span>Recomendado</span>
        </div>
      ` : ''}

      <div class="services__card-inner">
        <!-- Image Section -->
        <div class="services__card-image">
          <img src="${serviceImage}" alt="${service.name} - ${selectedVehicle.name}" loading="lazy" />
          <div class="services__card-overlay"></div>
          <div class="services__card-duration">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
            <span>${service.duration}</span>
          </div>
          <div class="services__card-shine"></div>
        </div>

        <!-- Content Section -->
        <div class="services__card-body">
          <div class="services__card-header">
            <h3 class="services__card-title">${service.name}</h3>
            <p class="services__card-tagline">${service.tagline}</p>
          </div>

          <ul class="services__card-features">
            ${featuresHTML}
          </ul>

          <a href="${whatsappURL}" class="services__card-btn" target="_blank" rel="noopener">
            <span class="services__card-btn-bg"></span>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Reservar</span>
          </a>
        </div>
      </div>

      <!-- 3D Glow Effect -->
      <div class="services__card-glow"></div>
    </div>
  `;
}

function renderServices() {
  const grid = document.querySelector('.services__grid');
  const vehicleSelector = document.querySelector('.services__vehicle-selector');

  if (grid) {
    grid.innerHTML = SERVICES.map((s, i) => createServiceCard(s, i)).join('');
    initCardEffects();
  }

  if (vehicleSelector) {
    vehicleSelector.innerHTML = createVehicleSelector();
    attachVehicleListeners();
  }
}

function attachVehicleListeners() {
  document.querySelectorAll('.services__vehicle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const vehicleId = btn.dataset.vehicle;
      selectedVehicle = VEHICLES.find(v => v.id === vehicleId);

      // Animate cards out
      const cards = document.querySelectorAll('.services__card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px) scale(0.95)';
      });

      // Update and animate in
      setTimeout(() => {
        renderServices();
        const newCards = document.querySelectorAll('.services__card');
        newCards.forEach((card, i) => {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, i * 100);
        });
      }, 300);
    });
  });
}

function initCardEffects() {
  const cards = document.querySelectorAll('.services__card');

  cards.forEach(card => {
    // 3D Tilt Effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

      // Move glow
      const glow = card.querySelector('.services__card-glow');
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--card-color) 0%, transparent 60%)`;
        glow.style.opacity = '0.3';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
      const glow = card.querySelector('.services__card-glow');
      if (glow) {
        glow.style.opacity = '0';
      }
    });
  });
}

export function createServices() {
  return `
    <section id="servicios" class="services">
      <!-- Water Bubbles Background -->
      <div class="services__bubbles">
        ${Array(8).fill(0).map(() => '<div class="services__bubble"></div>').join('')}
      </div>

      <div class="services__container">
        <!-- Header -->
        <header class="services__header">
          <span class="services__label">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/></svg>
            Nuestros Servicios
          </span>
          <h2 class="services__title">
            ¿Qué necesita tu <span class="text-gradient">vehículo</span>?
          </h2>
          <p class="services__subtitle">
            Ofrecemos servicio para motos, autos y camionetas
          </p>
        </header>

        <!-- Vehicle Selector -->
        <div class="services__vehicle-wrapper">
          <p class="services__vehicle-label">Tengo un:</p>
          <div class="services__vehicle-selector">
            ${createVehicleSelector()}
          </div>
        </div>

        <!-- Services Grid -->
        <div class="services__grid">
          ${SERVICES.map((s, i) => createServiceCard(s, i)).join('')}
        </div>

        <!-- Benefits Footer -->
        <div class="services__footer">
          <div class="services__footer-item">
            <div class="services__footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z"/></svg>
            </div>
            <span>Productos premium</span>
          </div>
          <div class="services__footer-item">
            <div class="services__footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </div>
            <span>Servicio rápido</span>
          </div>
          <div class="services__footer-item">
            <div class="services__footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <span>Garantía de brillo</span>
          </div>
          <div class="services__footer-item">
            <div class="services__footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg>
            </div>
            <span>Estacionamiento</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initServices() {
  attachVehicleListeners();
  initCardEffects();

  // Intersection Observer for card animations
  const cards = document.querySelectorAll('.services__card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}
