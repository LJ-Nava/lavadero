// ============================================
// PROMOS COMPONENT - Ofertas y Promociones
// ============================================

export function createPromos() {
  return `
    <section id="promociones" class="promos">
      <div class="promos__container">
        <!-- Header -->
        <header class="promos__header">
          <span class="promos__label">Ofertas Especiales</span>
          <h2 class="promos__title">
            Aprovecha nuestras <span class="text-accent">Promociones</span>
          </h2>
          <p class="promos__subtitle">
            Porque cuidar tu vehículo no tiene que ser caro
          </p>
        </header>

        <!-- Cards de promociones -->
        <div class="promos__grid">
          <!-- Promo 1: Primera vez -->
          <div class="promos__card promos__card--featured">
            <div class="promos__card-badge">NUEVO CLIENTE</div>
            <div class="promos__card-discount">
              <span class="promos__card-percent">20%</span>
              <span class="promos__card-off">OFF</span>
            </div>
            <h3 class="promos__card-title">Primera Visita</h3>
            <p class="promos__card-desc">
              En tu primer lavado completo o superior. ¡Bienvenido a El Cracker!
            </p>
            <div class="promos__card-code">
              <span>Código:</span>
              <strong>BIENVENIDO20</strong>
            </div>
            <a href="https://wa.me/56912345678?text=Hola!%20Quiero%20usar%20el%20código%20BIENVENIDO20" class="promos__card-btn" target="_blank" rel="noopener">
              Usar Promoción
            </a>
          </div>

          <!-- Promo 2: Fidelidad -->
          <div class="promos__card">
            <div class="promos__card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <div class="promos__card-highlight">10° LAVADO</div>
            <h3 class="promos__card-title">Programa Fidelidad</h3>
            <p class="promos__card-desc">
              Acumula 9 lavados y el décimo es <strong>GRATIS</strong>. Pregunta por tu tarjeta de puntos.
            </p>
            <div class="promos__card-stamps">
              <span class="stamp filled"></span>
              <span class="stamp filled"></span>
              <span class="stamp filled"></span>
              <span class="stamp"></span>
              <span class="stamp"></span>
              <span class="stamp"></span>
              <span class="stamp"></span>
              <span class="stamp"></span>
              <span class="stamp"></span>
              <span class="stamp gift">🎁</span>
            </div>
          </div>

          <!-- Promo 3: Día especial -->
          <div class="promos__card">
            <div class="promos__card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
            </div>
            <div class="promos__card-day">MARTES</div>
            <h3 class="promos__card-title">Martes de Motos</h3>
            <p class="promos__card-desc">
              Todos los martes, <strong>30% OFF</strong> en lavado de motos. ¡El día de los bikers!
            </p>
            <div class="promos__card-tag">
              <span>🏍️ Solo motos</span>
            </div>
          </div>

          <!-- Promo 4: Combo -->
          <div class="promos__card">
            <div class="promos__card-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <div class="promos__card-combo">2x1</div>
            <h3 class="promos__card-title">Trae un Amigo</h3>
            <p class="promos__card-desc">
              Ven con un amigo y ambos obtienen <strong>15% OFF</strong> en cualquier servicio.
            </p>
            <div class="promos__card-tag">
              <span>👥 Válido en pareja</span>
            </div>
          </div>
        </div>

        <!-- CTA Final -->
        <div class="promos__cta-wrapper">
          <div class="promos__cta-content">
            <div class="promos__cta-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div class="promos__cta-text">
              <h3>¿Tienes dudas sobre las promociones?</h3>
              <p>Escríbenos por WhatsApp y te ayudamos a elegir la mejor opción para ti</p>
            </div>
          </div>
          <a href="https://wa.me/56912345678?text=Hola!%20Quiero%20saber%20más%20sobre%20las%20promociones" class="promos__cta-btn" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar Ahora
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initPromos() {
  // Animación de entrada para las cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.promos__card').forEach(card => {
    observer.observe(card);
  });
}
