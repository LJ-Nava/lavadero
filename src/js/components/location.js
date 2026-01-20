// ============================================
// LOCATION & PARKING COMPONENT
// ============================================

export function createLocation() {
  return `
    <section id="ubicacion" class="location">
      <div class="location__container">
        <!-- Header -->
        <header class="location__header">
          <span class="location__label">Encuéntranos</span>
          <h2 class="location__title">
            Visítanos en <span class="text-accent">El Cracker</span>
          </h2>
          <p class="location__subtitle">
            Estamos ubicados en San Miguel, fácil acceso y estacionamiento gratuito
          </p>
        </header>

        <div class="location__content">
          <!-- Mapa -->
          <div class="location__map-wrapper">
            <div class="location__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.8!2d-70.6489!3d-33.4978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c4f5b8d7f5b7%3A0x1234567890abcdef!2sPir%C3%A1mide%20824%2C%20San%20Miguel%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1704000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div class="location__map-overlay"></div>
          </div>

          <!-- Info de contacto -->
          <div class="location__info">
            <div class="location__info-card">
              <div class="location__info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="location__info-content">
                <h3>Dirección</h3>
                <p>Pirámide 824</p>
                <p>San Miguel, Santiago</p>
              </div>
            </div>

            <div class="location__info-card">
              <div class="location__info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div class="location__info-content">
                <h3>Horario</h3>
                <p>Lunes a Viernes: 8:00 - 20:00</p>
                <p>Sábados: 9:00 - 18:00</p>
                <p>Domingos: 10:00 - 14:00</p>
              </div>
            </div>

            <div class="location__info-card">
              <div class="location__info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div class="location__info-content">
                <h3>Contacto</h3>
                <p>+56 9 1234 5678</p>
                <p>contacto@elcracker.cl</p>
              </div>
            </div>

            <a href="https://wa.me/56912345678?text=Hola!%20Quiero%20saber%20cómo%20llegar" class="location__cta" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>¿Cómo llego?</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección Estacionamiento -->
    <section class="parking">
      <div class="parking__container">
        <div class="parking__content">
          <!-- Lado izquierdo - Visual -->
          <div class="parking__visual">
            <div class="parking__icon-main">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
              </svg>
            </div>
            <div class="parking__cars">
              <div class="parking__car parking__car--1">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div class="parking__car parking__car--2">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div class="parking__car parking__car--3">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
            </div>
            <div class="parking__lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <!-- Lado derecho - Info -->
          <div class="parking__info">
            <div class="parking__badge">NOCTURNO</div>
            <h2 class="parking__title">
              Estacionamiento <span class="text-accent">Seguro</span>
            </h2>
            <p class="parking__description">
              Deja tu vehículo seguro durante la noche. Contamos con amplio estacionamiento
              techado y vigilado.
            </p>
            <div class="parking__hours">
              <div class="parking__hours-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div class="parking__hours-info">
                <span class="parking__hours-time">7:00 PM - 9:00 AM</span>
                <span class="parking__hours-label">Horario de estacionamiento</span>
              </div>
            </div>
            <a href="https://wa.me/56912345678?text=Hola!%20Quiero%20información%20sobre%20el%20estacionamiento" class="parking__contact-btn" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Consultar Disponibilidad</span>
            </a>

            <div class="parking__features">
              <div class="parking__feature">
                <div class="parking__feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                  </svg>
                </div>
                <div class="parking__feature-text">
                  <h4>Vigilancia 24/7</h4>
                  <p>Cámaras y personal de seguridad</p>
                </div>
              </div>

              <div class="parking__feature">
                <div class="parking__feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.58L18 11l-6 6z"/>
                  </svg>
                </div>
                <div class="parking__feature-text">
                  <h4>+20 Espacios</h4>
                  <p>Amplio espacio para todos</p>
                </div>
              </div>

              <div class="parking__feature">
                <div class="parking__feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/>
                  </svg>
                </div>
                <div class="parking__feature-text">
                  <h4>Techado</h4>
                  <p>Protegido del sol y lluvia</p>
                </div>
              </div>

              <div class="parking__feature">
                <div class="parking__feature-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div class="parking__feature-text">
                  <h4>Fácil Acceso</h4>
                  <p>Entrada y salida rápida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initLocation() {
  // Animación de entrada para las cards de info
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.location__info-card, .parking__feature').forEach(card => {
    observer.observe(card);
  });
}
