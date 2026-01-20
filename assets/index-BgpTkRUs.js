(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();function C(){return`
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
          <a href="#promociones">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
            </svg>
            Promociones
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
  `}function z(){const e=document.getElementById("header");e&&(window.addEventListener("scroll",()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled")}),document.querySelectorAll(".header__nav a, .header__logo").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const a=s.getAttribute("href"),o=document.querySelector(a);o&&o.scrollIntoView({behavior:"smooth"})})}))}const w="/lavadero/",m=`${w}hero-bg.png`,x="https://videos.pexels.com/video-files/4488209/4488209-hd_1920_1080_25fps.mp4";function M(e=30){let s="";for(let i=0;i<e;i++){const a=Math.random()*6+3,o=Math.random()*100,r=Math.random()*8,t=Math.random()*4+6;s+=`<div class="hero__particle" style="
      --size: ${a}px;
      --left: ${o}%;
      --delay: ${r}s;
      --duration: ${t}s;
    "></div>`}return s}function S(){return`
    <section id="inicio" class="hero">
      <!-- Background Layer with Video -->
      <div class="hero__background">
        <video
          class="hero__background-video"
          autoplay
          muted
          loop
          playsinline
          poster="${m}"
        >
          <source src="${x}" type="video/mp4" />
        </video>
        <img src="${m}" alt="Lavado de autos profesional" class="hero__background-image hero__background-image--fallback" />
        <div class="hero__background-overlay"></div>
      </div>

      <!-- Subtle Particles -->
      <div class="hero__particles">
        ${M(25)}
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
  `}function B(){const e=document.querySelector(".hero__background-video"),s=document.querySelector(".hero__background-image--fallback");if(e&&(e.addEventListener("error",()=>{e.style.display="none",s&&(s.style.opacity="0.7")}),new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting?e.play().catch(()=>{}):e.pause()})},{threshold:.1}).observe(e),window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(e.pause(),e.style.display="none",s&&(s.style.opacity="0.7"))),document.querySelectorAll(".hero__btn--primary").forEach(a=>{a.addEventListener("click",o=>{o.preventDefault();const r=a.getAttribute("href"),t=document.querySelector(r);t&&t.scrollIntoView({behavior:"smooth"})})}),!window.matchMedia("(prefers-reduced-motion: reduce)").matches){let a=!1;window.addEventListener("scroll",()=>{a||(window.requestAnimationFrame(()=>{const o=window.pageYOffset,r=document.querySelector(".hero");if(r&&o<window.innerHeight){const t=r.querySelector(".hero__content"),l=r.querySelector(".hero__side-info");t&&(t.style.transform=`translateY(${o*.3}px)`,t.style.opacity=1-o/600),l&&(l.style.transform=`translateY(${o*.15}px)`,l.style.opacity=1-o/500)}a=!1}),a=!0)})}setTimeout(()=>{document.querySelector(".hero")?.classList.add("is-loaded")},100)}const E=[{id:1,value:5e3,suffix:"+",label:"Vehículos Lavados",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>`,color:"water"},{id:2,value:5,suffix:" años",label:"De Experiencia",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>`,color:"shine"},{id:3,value:98,suffix:"%",label:"Clientes Satisfechos",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
    </svg>`,color:"primary"},{id:4,value:4.9,suffix:"/5",prefix:"",label:"Rating en Google",icon:`<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>`,color:"shine",decimal:!0}];function k(e){return`
    <div class="stats__card stats__card--${e.color}">
      <div class="stats__icon">
        ${e.icon}
      </div>
      <div class="stats__value-wrapper">
        <span class="stats__value" data-target="${e.value}" data-decimal="${e.decimal||!1}">0</span>
        <span class="stats__suffix">${e.suffix}</span>
      </div>
      <span class="stats__label">${e.label}</span>
      <div class="stats__glow"></div>
    </div>
  `}function $(){return`
    <section class="stats">
      <div class="stats__container">
        <div class="stats__grid">
          ${E.map(e=>k(e)).join("")}
        </div>
      </div>

      <!-- Background decorations -->
      <div class="stats__bg">
        <div class="stats__line stats__line--1"></div>
        <div class="stats__line stats__line--2"></div>
        <div class="stats__line stats__line--3"></div>
      </div>
    </section>
  `}function H(){const e=document.querySelectorAll(".stats__card");document.querySelectorAll(".stats__value");const s=new IntersectionObserver(i=>{i.forEach(a=>{if(a.isIntersecting){const o=a.target,r=o.querySelector(".stats__value");r&&!r.classList.contains("counted")&&(r.classList.add("counted"),A(r),o.classList.add("is-visible"))}})},{threshold:.5});e.forEach(i=>s.observe(i))}function A(e){const s=parseFloat(e.dataset.target),i=e.dataset.decimal==="true",a=2e3,o=1e3/60,r=Math.round(a/o);let t=0;const l=setInterval(()=>{t++;const n=I(t/r),c=s*n;i?e.textContent=c.toFixed(1):e.textContent=h(Math.floor(c)),t===r&&(clearInterval(l),i?e.textContent=s.toFixed(1):e.textContent=h(s))},o)}function I(e){return 1-Math.pow(1-e,4)}function h(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}const q="/lavadero/",_=[{id:"moto",name:"Moto",icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>'},{id:"auto",name:"Auto",icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>'},{id:"camioneta",name:"Camioneta",icon:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>'}],u=[{id:"basico",name:"Lavado Básico",tagline:"Rápido y efectivo",basePrice:15e3,duration:"20 min",color:"#00d4ff",gradient:"linear-gradient(135deg, #00d4ff 0%, #00a8cc 100%)",features:["Lavado exterior completo","Enjuague a presión","Secado con microfibra","Limpieza de vidrios"]},{id:"completo",name:"Lavado Completo",tagline:"El más pedido",basePrice:18e3,duration:"45 min",color:"#e31c25",gradient:"linear-gradient(135deg, #e31c25 0%, #b71c1c 100%)",popular:!0,features:["Todo del básico","Aspirado interior","Limpieza de tablero","Limpieza de tapices","Ambientador premium"]},{id:"premium",name:"Lavado Premium",tagline:"Tratamiento VIP",basePrice:3e4,duration:"90 min",color:"#ffd700",gradient:"linear-gradient(135deg, #ffd700 0%, #ffaa00 100%)",features:["Todo del completo","Encerado protector","Acondicionador de cueros","Protección de llantas","Tratamiento anti-lluvia"]},{id:"detallado",name:"Pulido Profesional",tagline:"Restauración total",basePrice:4e4,duration:"3+ hrs",color:"#8b5cf6",gradient:"linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",features:["Pulido de carrocería","Corrección de pintura","Restauración de faros","Limpieza de motor","Sellador cerámico"]}];let d=_[1];function V(e){const s=d.id==="camioneta"||d.id==="auto"?"jpeg":"png";return`${q}${d.id}-${e}.${s}`}function g(){return _.map(e=>`
    <button
      class="services__vehicle-btn ${d.id===e.id?"services__vehicle-btn--active":""}"
      data-vehicle="${e.id}"
      aria-label="Seleccionar ${e.name}"
    >
      <span class="services__vehicle-icon">${e.icon}</span>
      <span class="services__vehicle-name">${e.name}</span>
      ${d.id===e.id?'<span class="services__vehicle-glow"></span>':""}
    </button>
  `).join("")}function f(e,s){e.basePrice;const i=V(e.id),a=`Hola! Quiero reservar un *${e.name}* para mi *${d.name}*`,o=`https://wa.me/56912345678?text=${encodeURIComponent(a)}`,r=e.features.map(t=>`
    <li>
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${t}</span>
    </li>
  `).join("");return`
    <div class="services__card ${e.popular?"services__card--popular":""}"
         data-index="${s}"
         style="--card-color: ${e.color}; --card-gradient: ${e.gradient}">

      ${e.popular?`
        <div class="services__card-ribbon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          <span>Recomendado</span>
        </div>
      `:""}

      <div class="services__card-inner">
        <!-- Image Section -->
        <div class="services__card-image">
          <img src="${i}" alt="${e.name} - ${d.name}" loading="lazy" />
          <div class="services__card-overlay"></div>
          <div class="services__card-duration">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
            <span>${e.duration}</span>
          </div>
          <div class="services__card-shine"></div>
        </div>

        <!-- Content Section -->
        <div class="services__card-body">
          <div class="services__card-header">
            <h3 class="services__card-title">${e.name}</h3>
            <p class="services__card-tagline">${e.tagline}</p>
          </div>

          <ul class="services__card-features">
            ${r}
          </ul>

          <a href="${o}" class="services__card-btn" target="_blank" rel="noopener">
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
  `}function P(){const e=document.querySelector(".services__grid"),s=document.querySelector(".services__vehicle-selector");e&&(e.innerHTML=u.map((i,a)=>f(i,a)).join(""),y()),s&&(s.innerHTML=g(),b())}function b(){document.querySelectorAll(".services__vehicle-btn").forEach(e=>{e.addEventListener("click",()=>{const s=e.dataset.vehicle;d=_.find(a=>a.id===s),document.querySelectorAll(".services__card").forEach((a,o)=>{a.style.opacity="0",a.style.transform="translateY(20px) scale(0.95)"}),setTimeout(()=>{P(),document.querySelectorAll(".services__card").forEach((o,r)=>{setTimeout(()=>{o.style.opacity="1",o.style.transform="translateY(0) scale(1)"},r*100)})},300)})})}function y(){document.querySelectorAll(".services__card").forEach(s=>{s.addEventListener("mousemove",i=>{const a=s.getBoundingClientRect(),o=i.clientX-a.left,r=i.clientY-a.top,t=a.width/2,l=a.height/2,n=(r-l)/20,c=(t-o)/20;s.style.transform=`perspective(1000px) rotateX(${n}deg) rotateY(${c}deg) scale(1.02)`;const v=s.querySelector(".services__card-glow");v&&(v.style.background=`radial-gradient(circle at ${o}px ${r}px, var(--card-color) 0%, transparent 60%)`,v.style.opacity="0.3")}),s.addEventListener("mouseleave",()=>{s.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";const i=s.querySelector(".services__card-glow");i&&(i.style.opacity="0")})})}function T(){return`
    <section id="servicios" class="services">
      <!-- Water Bubbles Background -->
      <div class="services__bubbles">
        ${Array(8).fill(0).map(()=>'<div class="services__bubble"></div>').join("")}
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
            ${g()}
          </div>
        </div>

        <!-- Services Grid -->
        <div class="services__grid">
          ${u.map((e,s)=>f(e,s)).join("")}
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
  `}function R(){b(),y();const e=document.querySelectorAll(".services__card"),s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},{threshold:.1});e.forEach(i=>s.observe(i))}const O=[{id:1,title:"BMW Serie 3",service:"Lavado Premium",beforeImage:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&q=80",afterImage:"https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&q=80"},{id:2,title:"Ford Mustang",service:"Pulido Profesional",beforeImage:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop&q=80",afterImage:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&q=80"},{id:3,title:"Porsche 911",service:"Lavado Completo",beforeImage:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&q=80",afterImage:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop&q=80"},{id:4,title:"Mercedes-Benz",service:"Lavado Premium",beforeImage:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop&q=80",afterImage:"https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600&h=400&fit=crop&q=80"}];function D(e,s){return`
    <div class="gallery__item" data-index="${s}">
      <div class="gallery__comparison">
        <!-- Before Image -->
        <div class="gallery__before">
          <img src="${e.beforeImage}" alt="${e.title} - Antes" loading="lazy" />
          <span class="gallery__label gallery__label--before">Antes</span>
        </div>

        <!-- After Image -->
        <div class="gallery__after">
          <img src="${e.afterImage}" alt="${e.title} - Después" loading="lazy" />
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
        <h3 class="gallery__title">${e.title}</h3>
        <span class="gallery__service">${e.service}</span>
      </div>
    </div>
  `}function F(){return`
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
          ${O.map((e,s)=>D(e,s)).join("")}
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
  `}function G(){const e=document.querySelectorAll(".gallery__item");e.forEach(i=>{const a=i.querySelector(".gallery__comparison"),o=i.querySelector(".gallery__after"),r=i.querySelector(".gallery__slider"),t=i.querySelector(".gallery__hint");let l=!1;function n(c){const v=a.getBoundingClientRect();let p=(c-v.left)/v.width*100;p=Math.max(0,Math.min(100,p)),o.style.clipPath=`inset(0 ${100-p}% 0 0)`,r.style.left=`${p}%`,t&&(t.style.opacity="0")}a.addEventListener("mousedown",c=>{l=!0,a.classList.add("is-dragging"),n(c.clientX)}),document.addEventListener("mousemove",c=>{l&&n(c.clientX)}),document.addEventListener("mouseup",()=>{l=!1,a.classList.remove("is-dragging")}),a.addEventListener("touchstart",c=>{l=!0,a.classList.add("is-dragging"),n(c.touches[0].clientX)}),a.addEventListener("touchmove",c=>{l&&(c.preventDefault(),n(c.touches[0].clientX))}),a.addEventListener("touchend",()=>{l=!1,a.classList.remove("is-dragging")}),o.style.clipPath="inset(0 50% 0 0)",r.style.left="50%"});const s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},{threshold:.2});e.forEach(i=>s.observe(i))}const Y=[{id:1,name:"Carlos Mendoza",vehicle:"BMW Serie 5",rating:5,text:"Increíble servicio, mi auto quedó como nuevo. El pulido profesional eliminó todos los rayones que tenía. 100% recomendado.",date:"Hace 2 semanas",verified:!0},{id:2,name:"María González",vehicle:"Toyota RAV4",rating:5,text:"Primera vez que vengo y quedé encantada. El equipo es muy profesional y los productos que usan son de primera calidad.",date:"Hace 1 mes",verified:!0},{id:3,name:"Roberto Silva",vehicle:"Harley Davidson",rating:5,text:"Llevé mi moto y el cuidado que tuvieron fue excepcional. Sabían exactamente cómo tratar cada parte. Volveré siempre.",date:"Hace 3 semanas",verified:!0},{id:4,name:"Andrea Paredes",vehicle:"Mercedes GLC",rating:5,text:"El mejor lavadero de Santiago sin duda. La atención al cliente es excelente y el resultado habla por sí solo.",date:"Hace 1 semana",verified:!0},{id:5,name:"Felipe Contreras",vehicle:"Ford Mustang",rating:5,text:"Llevo 2 años trayendo mi Mustang aquí. Nadie más lo toca. El tratamiento cerámico que me hicieron es espectacular.",date:"Hace 2 meses",verified:!0},{id:6,name:"Valentina Reyes",vehicle:"Audi Q5",rating:5,text:"Excelente relación precio-calidad. El lavado premium deja el auto impecable y el aroma dura días. Super recomendado!",date:"Hace 5 días",verified:!0}];function L(e){let s="";for(let i=0;i<5;i++)i<e?s+=`<svg class="testimonials__star testimonials__star--filled" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>`:s+=`<svg class="testimonials__star" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
      </svg>`;return s}function j(e){return e.split(" ").map(s=>s[0]).join("").toUpperCase()}function N(e,s){return`
    <div class="testimonials__card" style="--delay: ${s*.1}s">
      <div class="testimonials__card-header">
        <div class="testimonials__avatar">
          <span>${j(e.name)}</span>
        </div>
        <div class="testimonials__user-info">
          <h4 class="testimonials__name">
            ${e.name}
            ${e.verified?`
              <span class="testimonials__verified" title="Cliente verificado">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
            `:""}
          </h4>
          <span class="testimonials__vehicle">${e.vehicle}</span>
        </div>
        <div class="testimonials__rating">
          ${L(e.rating)}
        </div>
      </div>

      <p class="testimonials__text">"${e.text}"</p>

      <div class="testimonials__card-footer">
        <span class="testimonials__date">${e.date}</span>
        <span class="testimonials__source">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          Google
        </span>
      </div>
    </div>
  `}function Q(){return`
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
              ${L(5)}
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
          ${Y.map((e,s)=>N(e,s)).join("")}
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
  `}function U(){const e=document.querySelectorAll(".testimonials__card"),s=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("is-visible")})},{threshold:.1});e.forEach(i=>s.observe(i))}function W(){return`
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
  `}function X(){const e=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&i.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll(".location__info-card, .parking__feature").forEach(s=>{e.observe(s)})}function K(){return`
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
  `}function Z(){const e=new IntersectionObserver(s=>{s.forEach((i,a)=>{i.isIntersecting&&setTimeout(()=>{i.target.classList.add("visible")},a*100)})},{threshold:.1});document.querySelectorAll(".promos__card").forEach(s=>{e.observe(s)})}function J(){return`
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
  `}function e1(){document.querySelectorAll('.footer a[href^="#"]').forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const i=e.getAttribute("href"),a=document.querySelector(i);a&&a.scrollIntoView({behavior:"smooth"})})})}function s1(){const e=document.querySelector("#app");e&&(e.innerHTML=`
    ${C()}
    <main>
      ${S()}
      ${$()}
      ${T()}
      ${F()}
      ${Q()}
      ${W()}
      ${K()}
    </main>
    ${J()}
  `,z(),B(),H(),R(),G(),U(),X(),Z(),e1(),requestAnimationFrame(()=>{document.body.classList.add("is-loaded")}))}document.addEventListener("DOMContentLoaded",s1);
