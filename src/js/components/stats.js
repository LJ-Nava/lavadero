// ============================================
// STATS COMPONENT - Animated Counters
// ============================================

const STATS = [
  {
    id: 1,
    value: 5000,
    suffix: '+',
    label: 'Vehículos Lavados',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>`,
    color: 'water'
  },
  {
    id: 2,
    value: 5,
    suffix: ' años',
    label: 'De Experiencia',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>`,
    color: 'shine'
  },
  {
    id: 3,
    value: 98,
    suffix: '%',
    label: 'Clientes Satisfechos',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>`,
    color: 'primary'
  },
  {
    id: 4,
    value: 4.9,
    suffix: '/5',
    prefix: '',
    label: 'Rating en Google',
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>`,
    color: 'shine',
    decimal: true
  }
];

function createStatCard(stat) {
  return `
    <div class="stats__card stats__card--${stat.color}">
      <div class="stats__icon">
        ${stat.icon}
      </div>
      <div class="stats__value-wrapper">
        <span class="stats__value" data-target="${stat.value}" data-decimal="${stat.decimal || false}">0</span>
        <span class="stats__suffix">${stat.suffix}</span>
      </div>
      <span class="stats__label">${stat.label}</span>
      <div class="stats__glow"></div>
    </div>
  `;
}

export function createStats() {
  return `
    <section class="stats">
      <div class="stats__container">
        <div class="stats__grid">
          ${STATS.map(stat => createStatCard(stat)).join('')}
        </div>
      </div>

      <!-- Background decorations -->
      <div class="stats__bg">
        <div class="stats__line stats__line--1"></div>
        <div class="stats__line stats__line--2"></div>
        <div class="stats__line stats__line--3"></div>
      </div>
    </section>
  `;
}

export function initStats() {
  const cards = document.querySelectorAll('.stats__card');
  const values = document.querySelectorAll('.stats__value');

  // Animate counter when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const value = card.querySelector('.stats__value');

        if (value && !value.classList.contains('counted')) {
          value.classList.add('counted');
          animateCounter(value);
          card.classList.add('is-visible');
        }
      }
    });
  }, { threshold: 0.5 });

  cards.forEach(card => observer.observe(card));
}

function animateCounter(element) {
  const target = parseFloat(element.dataset.target);
  const isDecimal = element.dataset.decimal === 'true';
  const duration = 2000; // 2 seconds
  const frameDuration = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameDuration);

  let frame = 0;

  const counter = setInterval(() => {
    frame++;

    // Easing function (ease-out)
    const progress = easeOutQuart(frame / totalFrames);
    const currentValue = target * progress;

    if (isDecimal) {
      element.textContent = currentValue.toFixed(1);
    } else {
      element.textContent = formatNumber(Math.floor(currentValue));
    }

    if (frame === totalFrames) {
      clearInterval(counter);
      if (isDecimal) {
        element.textContent = target.toFixed(1);
      } else {
        element.textContent = formatNumber(target);
      }
    }
  }, frameDuration);
}

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
