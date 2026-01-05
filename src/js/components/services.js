// ============================================
// SERVICES COMPONENT - Dinámico y Visual
// ============================================

// Tipos de vehículos
const VEHICLES = [
  { id: 'moto', name: 'Moto', icon: '🏍️' },
  { id: 'auto', name: 'Auto', icon: '🚗' },
  { id: 'camioneta', name: 'Camioneta', icon: '🚙' }
];

// Servicios (precios base para auto)
const SERVICES = [
  {
    id: 'basico',
    name: 'Lavado Básico',
    tagline: 'Rápido y efectivo',
    basePrice: 15000,
    duration: '20 min',
    color: '#3b82f6',
    features: ['Lavado exterior completo', 'Enjuague a presión', 'Secado con microfibra', 'Limpieza de vidrios']
  },
  {
    id: 'completo',
    name: 'Lavado Completo',
    tagline: 'El más pedido',
    basePrice: 18000,
    duration: '45 min',
    color: '#e31c25',
    popular: true,
    features: ['Todo del básico', 'Aspirado interior', 'Limpieza de tablero', 'Limpieza de tapices', 'Ambientador']
  },
  {
    id: 'premium',
    name: 'Lavado Premium',
    tagline: 'Tratamiento VIP',
    basePrice: 30000,
    duration: '90 min',
    color: '#f59e0b',
    features: ['Todo del completo', 'Encerado protector', 'Acondicionador de cueros', 'Protección de llantas', 'Tratamiento anti-lluvia']
  },
  {
    id: 'detallado',
    name: 'Pulido Profesional',
    tagline: 'Restauración total',
    basePrice: 40000,
    duration: '3+ hrs',
    color: '#8b5cf6',
    features: ['Pulido de carrocería', 'Corrección de pintura', 'Restauración de faros', 'Limpieza de motor', 'Sellador cerámico']
  }
];

let selectedVehicle = VEHICLES[1]; // Auto por defecto

// Función para obtener imagen dinámica según vehículo y servicio
function getServiceImage(serviceId) {
  return `/${selectedVehicle.id}-${serviceId}.png`;
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getPrice(basePrice) {
  return basePrice;
}

function createVehicleSelector() {
  return VEHICLES.map(v => `
    <button
      class="services__vehicle-btn ${selectedVehicle.id === v.id ? 'services__vehicle-btn--active' : ''}"
      data-vehicle="${v.id}"
    >
      <span class="services__vehicle-icon">${v.icon}</span>
      <span class="services__vehicle-name">${v.name}</span>
      ${selectedVehicle.id === v.id ? '<span class="services__vehicle-indicator"></span>' : ''}
    </button>
  `).join('');
}

function createServiceCard(service) {
  const price = getPrice(service.basePrice);
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
    <div class="services__card ${service.popular ? 'services__card--popular' : ''}" style="--card-color: ${service.color}">
      ${service.popular ? '<div class="services__card-ribbon">⭐ Recomendado</div>' : ''}

      <div class="services__card-image">
        <img src="${serviceImage}" alt="${service.name} - ${selectedVehicle.name}" loading="lazy" />
        <div class="services__card-overlay"></div>
        <div class="services__card-duration">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
          <span>${service.duration}</span>
        </div>
      </div>

      <div class="services__card-body">
        <div class="services__card-header">
          <h3 class="services__card-title">${service.name}</h3>
          <p class="services__card-tagline">${service.tagline}</p>
        </div>

        <div class="services__card-price">
          <div class="services__card-price-value">
            <span class="services__card-currency">$</span>
            <span class="services__card-amount">${formatPrice(price)}</span>
          </div>
          <span class="services__card-vehicle">${selectedVehicle.icon} ${selectedVehicle.name}</span>
        </div>

        <ul class="services__card-features">
          ${featuresHTML}
        </ul>

        <a href="${whatsappURL}" class="services__card-btn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Reservar</span>
        </a>
      </div>
    </div>
  `;
}

function renderServices() {
  const grid = document.querySelector('.services__grid');
  const vehicleSelector = document.querySelector('.services__vehicle-selector');

  if (grid) {
    grid.innerHTML = SERVICES.map(createServiceCard).join('');
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

      // Animate cards
      const cards = document.querySelectorAll('.services__card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 100);
      });

      renderServices();
    });
  });
}

export function createServices() {
  return `
    <section id="servicios" class="services">
      <!-- Decoraciones de agua -->
      <div class="services__bubbles">
        <div class="services__bubble"></div>
        <div class="services__bubble"></div>
        <div class="services__bubble"></div>
        <div class="services__bubble"></div>
        <div class="services__bubble"></div>
      </div>

      <div class="services__container">
        <!-- Header -->
        <header class="services__header">
          <span class="services__label">Nuestros Servicios</span>
          <h2 class="services__title">
            ¿Qué necesita tu <span class="text-accent">vehículo</span>?
          </h2>
          <p class="services__subtitle">
            Selecciona tu tipo de vehículo y conoce nuestros precios
          </p>
        </header>

        <!-- Selector de Vehículo -->
        <div class="services__vehicle-wrapper">
          <p class="services__vehicle-label">Tengo un:</p>
          <div class="services__vehicle-selector">
            ${createVehicleSelector()}
          </div>
        </div>

        <!-- Grid de Servicios -->
        <div class="services__grid">
          ${SERVICES.map(createServiceCard).join('')}
        </div>

        <!-- Info adicional -->
        <div class="services__footer">
          <div class="services__footer-item">
            <span class="services__footer-icon">💧</span>
            <span>Productos premium</span>
          </div>
          <div class="services__footer-item">
            <span class="services__footer-icon">⚡</span>
            <span>Servicio rápido</span>
          </div>
          <div class="services__footer-item">
            <span class="services__footer-icon">✨</span>
            <span>Garantía de brillo</span>
          </div>
          <div class="services__footer-item">
            <span class="services__footer-icon">🅿️</span>
            <span>Estacionamiento</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initServices() {
  attachVehicleListeners();
}
