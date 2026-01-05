(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();function _(){return`
    <header class="header" id="header">
      <div class="header__container">

        <!-- Logo -->
        <a href="#inicio" class="header__logo">
          <div class="header__logo-icon">
            <!-- Icono de gota de agua con brillo -->
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" stroke="none"/>
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              <ellipse cx="9" cy="13" rx="1.5" ry="2" fill="rgba(255,255,255,0.4)"/>
            </svg>
          </div>
          <div class="header__logo-text">
            <span class="logo-name">EL CRACKER <span class="text-accent">RYD</span></span>
            <span class="logo-tagline">Lavado Premium de Autos</span>
          </div>
        </a>

        <!-- Navigation -->
        <nav class="header__nav">
          <a href="#inicio">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Inicio
          </a>
          <a href="#servicios">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            Servicios
          </a>
          <a href="#ubicacion">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Ubicación
          </a>
          <a href="#nosotros">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            Nosotros
          </a>
        </nav>

        <!-- CTA WhatsApp -->
        <a href="https://wa.me/56912345678" class="header__cta" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Reservar</span>
        </a>

        <!-- Mobile Menu Button -->
        <button class="header__mobile-btn" id="mobileMenuBtn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  `}function h(){const e=document.getElementById("header");e&&(window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".header__nav a, .header__logo").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault();const o=a.getAttribute("href"),s=document.querySelector(o);s&&s.scrollIntoView({behavior:"smooth"})})}))}const u="/hero-bg.png";function m(){return`
    <section id="inicio" class="hero">

      <!-- Background -->
      <div class="hero__background">
        <img
          src="${u}"
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
  `}function g(){document.querySelectorAll(".hero__btn--primary, .hero__scroll").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault();const o=a.getAttribute("href"),s=document.querySelector(o);s&&s.scrollIntoView({behavior:"smooth"})})})}const n=[{id:"moto",name:"Moto",icon:"🏍️"},{id:"auto",name:"Auto",icon:"🚗"},{id:"camioneta",name:"Camioneta",icon:"🚙"}],l=[{id:"basico",name:"Lavado Básico",tagline:"Rápido y efectivo",basePrice:15e3,duration:"20 min",color:"#3b82f6",features:["Lavado exterior completo","Enjuague a presión","Secado con microfibra","Limpieza de vidrios"]},{id:"completo",name:"Lavado Completo",tagline:"El más pedido",basePrice:18e3,duration:"45 min",color:"#e31c25",popular:!0,features:["Todo del básico","Aspirado interior","Limpieza de tablero","Limpieza de tapices","Ambientador"]},{id:"premium",name:"Lavado Premium",tagline:"Tratamiento VIP",basePrice:3e4,duration:"90 min",color:"#f59e0b",features:["Todo del completo","Encerado protector","Acondicionador de cueros","Protección de llantas","Tratamiento anti-lluvia"]},{id:"detallado",name:"Pulido Profesional",tagline:"Restauración total",basePrice:4e4,duration:"3+ hrs",color:"#8b5cf6",features:["Pulido de carrocería","Corrección de pintura","Restauración de faros","Limpieza de motor","Sellador cerámico"]}];let c=n[1];function f(e){return`/${c.id}-${e}.png`}function b(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function d(){return n.map(e=>`
    <button
      class="services__vehicle-btn ${c.id===e.id?"services__vehicle-btn--active":""}"
      data-vehicle="${e.id}"
    >
      <span class="services__vehicle-icon">${e.icon}</span>
      <span class="services__vehicle-name">${e.name}</span>
      ${c.id===e.id?'<span class="services__vehicle-indicator"></span>':""}
    </button>
  `).join("")}function v(e){const a=e.basePrice,i=f(e.id),o=`Hola! Quiero reservar un *${e.name}* para mi *${c.name}*`,s=`https://wa.me/56912345678?text=${encodeURIComponent(o)}`,r=e.features.map(t=>`
    <li>
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${t}</span>
    </li>
  `).join("");return`
    <div class="services__card ${e.popular?"services__card--popular":""}" style="--card-color: ${e.color}">
      ${e.popular?'<div class="services__card-ribbon">⭐ Recomendado</div>':""}

      <div class="services__card-image">
        <img src="${i}" alt="${e.name} - ${c.name}" loading="lazy" />
        <div class="services__card-overlay"></div>
        <div class="services__card-duration">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
          <span>${e.duration}</span>
        </div>
      </div>

      <div class="services__card-body">
        <div class="services__card-header">
          <h3 class="services__card-title">${e.name}</h3>
          <p class="services__card-tagline">${e.tagline}</p>
        </div>

        <div class="services__card-price">
          <div class="services__card-price-value">
            <span class="services__card-currency">$</span>
            <span class="services__card-amount">${b(a)}</span>
          </div>
          <span class="services__card-vehicle">${c.icon} ${c.name}</span>
        </div>

        <ul class="services__card-features">
          ${r}
        </ul>

        <a href="${s}" class="services__card-btn" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>Reservar</span>
        </a>
      </div>
    </div>
  `}function C(){const e=document.querySelector(".services__grid"),a=document.querySelector(".services__vehicle-selector");e&&(e.innerHTML=l.map(v).join("")),a&&(a.innerHTML=d(),p())}function p(){document.querySelectorAll(".services__vehicle-btn").forEach(e=>{e.addEventListener("click",()=>{const a=e.dataset.vehicle;c=n.find(o=>o.id===a),document.querySelectorAll(".services__card").forEach((o,s)=>{o.style.opacity="0",o.style.transform="translateY(20px)",setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0)"},s*100)}),C()})})}function z(){return`
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
            ${d()}
          </div>
        </div>

        <!-- Grid de Servicios -->
        <div class="services__grid">
          ${l.map(v).join("")}
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
  `}function L(){p()}function w(){return`
    <section id="ubicacion" class="location">
      <div class="location__container">
        <!-- Header -->
        <header class="location__header">
          <span class="location__label">Encuéntranos</span>
          <h2 class="location__title">
            Visítanos en <span class="text-accent">El Cracker</span>
          </h2>
          <p class="location__subtitle">
            Estamos ubicados en el corazón de la ciudad, fácil acceso y estacionamiento gratuito
          </p>
        </header>

        <div class="location__content">
          <!-- Mapa -->
          <div class="location__map-wrapper">
            <div class="location__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9977889358847!2d-70.6506138!3d-33.4372737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a4d0e5e5d7%3A0x9a5e5e5e5e5e5e5e!2sAv.%20Providencia%201234%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1704000000000!5m2!1ses!2scl"
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
                <p>Av. Providencia 1234</p>
                <p>Providencia, Santiago</p>
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
  `}function M(){const e=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".location__info-card, .parking__feature").forEach(a=>{e.observe(a)})}function k(){return`
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
  `}function x(){const e=new IntersectionObserver(a=>{a.forEach((i,o)=>{i.isIntersecting&&setTimeout(()=>{i.target.classList.add("visible")},o*100)})},{threshold:.1});document.querySelectorAll(".promos__card").forEach(a=>{e.observe(a)})}function B(){return`
    <footer class="footer">
      <!-- Wave decoration -->
      <div class="footer__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="currentColor"/>
        </svg>
      </div>

      <div class="footer__container">
        <!-- Main Footer Content -->
        <div class="footer__content">

          <!-- Brand Column -->
          <div class="footer__brand">
            <a href="#inicio" class="footer__logo">
              <div class="footer__logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="currentColor" stroke="none"/>
                  <ellipse cx="9" cy="13" rx="1.5" ry="2" fill="rgba(255,255,255,0.4)"/>
                </svg>
              </div>
              <div class="footer__logo-text">
                <span class="logo-name">EL CRACKER <span class="text-accent">RYD</span></span>
                <span class="logo-tagline">Lavado Premium de Autos</span>
              </div>
            </a>
            <p class="footer__brand-desc">
              Tu vehículo merece el mejor cuidado. Ofrecemos servicios de lavado profesional
              con productos de primera calidad y atención personalizada.
            </p>
            <div class="footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://wa.me/56912345678" target="_blank" rel="noopener" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links Column -->
          <div class="footer__links">
            <h4>Enlaces Rápidos</h4>
            <nav>
              <a href="#inicio">Inicio</a>
              <a href="#servicios">Servicios</a>
              <a href="#ubicacion">Ubicación</a>
              <a href="#promociones">Promociones</a>
            </nav>
          </div>

          <!-- Services Column -->
          <div class="footer__links">
            <h4>Servicios</h4>
            <nav>
              <a href="#servicios">Lavado Básico</a>
              <a href="#servicios">Lavado Completo</a>
              <a href="#servicios">Lavado Premium</a>
              <a href="#servicios">Pulido Profesional</a>
            </nav>
          </div>

          <!-- Contact Column -->
          <div class="footer__contact">
            <h4>Contacto</h4>
            <div class="footer__contact-items">
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Av. Providencia 1234, Santiago</span>
              </div>
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+56 9 1234 5678</span>
              </div>
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>contacto@elcracker.cl</span>
              </div>
              <div class="footer__contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span>Lun-Vie: 8:00-20:00 | Sáb: 9:00-18:00</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="footer__bottom">
          <p class="footer__copyright">
            © ${new Date().getFullYear()} <strong>El Cracker RYD</strong>. Todos los derechos reservados.
          </p>
          <div class="footer__bottom-links">
            <a href="#">Términos y Condiciones</a>
            <span>|</span>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  `}function S(){document.querySelectorAll('.footer a[href^="#"]').forEach(e=>{e.addEventListener("click",a=>{a.preventDefault();const i=e.getAttribute("href"),o=document.querySelector(i);o&&o.scrollIntoView({behavior:"smooth"})})})}function y(){const e=document.querySelector("#app");e&&(e.innerHTML=`
    ${_()}
    <main>
      ${m()}
      ${z()}
      ${w()}
      ${k()}
    </main>
    ${B()}
  `,h(),g(),L(),M(),x(),S())}document.addEventListener("DOMContentLoaded",y);
