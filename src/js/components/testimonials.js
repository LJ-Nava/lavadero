// ============================================
// TESTIMONIALS COMPONENT - Social Proof
// ============================================

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    vehicle: 'BMW Serie 5',
    rating: 5,
    text: 'Increíble servicio, mi auto quedó como nuevo. El pulido profesional eliminó todos los rayones que tenía. 100% recomendado.',
    date: 'Hace 2 semanas',
    verified: true
  },
  {
    id: 2,
    name: 'María González',
    vehicle: 'Toyota RAV4',
    rating: 5,
    text: 'Primera vez que vengo y quedé encantada. El equipo es muy profesional y los productos que usan son de primera calidad.',
    date: 'Hace 1 mes',
    verified: true
  },
  {
    id: 3,
    name: 'Roberto Silva',
    vehicle: 'Harley Davidson',
    rating: 5,
    text: 'Llevé mi moto y el cuidado que tuvieron fue excepcional. Sabían exactamente cómo tratar cada parte. Volveré siempre.',
    date: 'Hace 3 semanas',
    verified: true
  },
  {
    id: 4,
    name: 'Andrea Paredes',
    vehicle: 'Mercedes GLC',
    rating: 5,
    text: 'El mejor lavadero de Santiago sin duda. La atención al cliente es excelente y el resultado habla por sí solo.',
    date: 'Hace 1 semana',
    verified: true
  },
  {
    id: 5,
    name: 'Felipe Contreras',
    vehicle: 'Ford Mustang',
    rating: 5,
    text: 'Llevo 2 años trayendo mi Mustang aquí. Nadie más lo toca. El tratamiento cerámico que me hicieron es espectacular.',
    date: 'Hace 2 meses',
    verified: true
  },
  {
    id: 6,
    name: 'Valentina Reyes',
    vehicle: 'Audi Q5',
    rating: 5,
    text: 'Excelente relación precio-calidad. El lavado premium deja el auto impecable y el aroma dura días. Super recomendado!',
    date: 'Hace 5 días',
    verified: true
  }
];

function generateStars(rating) {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars += `<svg class="testimonials__star testimonials__star--filled" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>`;
    } else {
      stars += `<svg class="testimonials__star" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
      </svg>`;
    }
  }
  return stars;
}

function generateInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function createTestimonialCard(testimonial, index) {
  return `
    <div class="testimonials__card" style="--delay: ${index * 0.1}s">
      <div class="testimonials__card-header">
        <div class="testimonials__avatar">
          <span>${generateInitials(testimonial.name)}</span>
        </div>
        <div class="testimonials__user-info">
          <h4 class="testimonials__name">
            ${testimonial.name}
            ${testimonial.verified ? `
              <span class="testimonials__verified" title="Cliente verificado">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
            ` : ''}
          </h4>
          <span class="testimonials__vehicle">${testimonial.vehicle}</span>
        </div>
        <div class="testimonials__rating">
          ${generateStars(testimonial.rating)}
        </div>
      </div>

      <p class="testimonials__text">"${testimonial.text}"</p>

      <div class="testimonials__card-footer">
        <span class="testimonials__date">${testimonial.date}</span>
        <span class="testimonials__source">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          Google
        </span>
      </div>
    </div>
  `;
}

export function createTestimonials() {
  return `
    <section id="testimonios" class="testimonials">
      <!-- Floating Elements -->
      <div class="testimonials__floating">
        <div class="testimonials__float testimonials__float--1">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        <div class="testimonials__float testimonials__float--2">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        <div class="testimonials__float testimonials__float--3">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
      </div>

      <div class="testimonials__container">
        <!-- Header -->
        <header class="testimonials__header">
          <span class="testimonials__badge">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            Testimonios
          </span>
          <h2 class="testimonials__title">
            Lo que dicen <span class="text-gradient">nuestros clientes</span>
          </h2>
          <p class="testimonials__subtitle">
            Más de 500 clientes satisfechos nos respaldan
          </p>
        </header>

        <!-- Stats Summary -->
        <div class="testimonials__summary">
          <div class="testimonials__summary-item">
            <span class="testimonials__summary-value">4.9</span>
            <div class="testimonials__summary-stars">
              ${generateStars(5)}
            </div>
            <span class="testimonials__summary-label">Calificación promedio</span>
          </div>
          <div class="testimonials__summary-divider"></div>
          <div class="testimonials__summary-item">
            <span class="testimonials__summary-value">500+</span>
            <span class="testimonials__summary-label">Reseñas verificadas</span>
          </div>
          <div class="testimonials__summary-divider"></div>
          <div class="testimonials__summary-item">
            <span class="testimonials__summary-value">98%</span>
            <span class="testimonials__summary-label">Recomendarían</span>
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="testimonials__grid">
          ${TESTIMONIALS.map((t, i) => createTestimonialCard(t, i)).join('')}
        </div>

        <!-- CTA -->
        <div class="testimonials__cta">
          <p class="testimonials__cta-text">¿Ya eres cliente? Déjanos tu reseña en Google</p>
          <a href="#" class="testimonials__cta-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            Escribir Reseña
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initTestimonials() {
  // Intersection Observer for card animations
  const cards = document.querySelectorAll('.testimonials__card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}
