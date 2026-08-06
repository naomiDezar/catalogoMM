/**
 * ============================================================
 *  CATÁLOGO - JavaScript Vanilla
 *  Estructura limpia y preparada para futuras funcionalidades.
 * ============================================================
 */

// ==========================================================
//  CONFIGURACIÓN GLOBAL - WHATSAPP
//  Único lugar donde se define el número y el mensaje.
//  Usado tanto por el botón de la página principal como por
//  los botones "Consultar" del catálogo (catalog.js).
// ==========================================================

// >>> CAMBIA TU NÚMERO DE WHATSAPP AQUÍ (código de país + número, sin +, sin espacios) <<<
const WHATSAPP_NUMBER = "51982665034";

// >>> CAMBIA EL MENSAJE PREDETERMINADO AQUÍ (opcional, vacío = sin texto) <<<
const DEFAULT_WHATSAPP_MESSAGE = "Hola, me gustaría obtener información sobre las flores eternas.";

// ==========================================================
//  FUNCIONES COMPARTIDAS DE WHATSAPP (productos)
//  Único lugar donde se construye el mensaje y el enlace wa.me.
//  Usadas por la vista previa de la página principal y por los
//  botones "Consultar" de catalogo.html (catalog.js).
// ==========================================================

// Prioridad: usa product.imageUrl si está definido; si no,
// construye la URL absoluta a partir de la ruta relativa.
function getProductImageUrl(product) {
  if (product.imageUrl && product.imageUrl.trim() !== '') {
    return product.imageUrl.trim();
  }
  return window.location.origin + '/' + product.imagen;
}

// Construye el mensaje con nombre, categoría, precio e imagen.
function buildWhatsAppMessage(product) {
  const imageUrl = getProductImageUrl(product);

  return `Hola 👋

Estoy interesado(a) en el siguiente producto:

🌸 Producto:
${product.nombre}

🏷️ Categoría:
${product.categoria}

💰 Precio:
${product.precio}

🖼️ Imagen del producto:
${imageUrl}

¿Podrían brindarme más información?`;
}

// Abre WhatsApp con el mensaje del producto (número global).
function openProductWhatsApp(product) {
  const message = encodeURIComponent(buildWhatsAppMessage(product));
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================
  //  ACORDEÓN - PREGUNTAS FRECUENTES (FAQ)
  //  Agrega nuevos .faq-item en el HTML y funcionarán solos.
  // ==========================================================

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-item__question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Cierra todos los items abiertos (comportamiento acordeón)
      faqItems.forEach(el => {
        el.classList.remove('active');
        el.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      // Si el item clickeado no estaba activo, ábrelo
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });


  // ==========================================================
  //  MENÚ MÓVIL - TOGGLE
  //  Abre y cierra el menú en dispositivos móviles.
  // ==========================================================

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Cierra el menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  // ==========================================================
  //  ANIMACIONES SCROLL - FADE IN
  //  Agrega la clase .animate a cualquier elemento
  //  y aparecerá con una transición suave al hacer scroll.
  // ==========================================================

  const animateElements = document.querySelectorAll('.animate');

  // Si no hay elementos con .animate, agregamos la clase automáticamente
  // a las secciones principales para que tengan animación.
  const sectionsToAnimate = [
    '.about__grid',
    '.explore__action',
    '.catalog__grid',
    '.featured__grid',
    '.reviews__grid',
    '.faq__list',
    '.contact__whatsapp',
    '.footer__grid'
  ];

  if (animateElements.length === 0) {
    sectionsToAnimate.forEach(selector => {
      const el = document.querySelector(selector);
      if (el) el.classList.add('animate');
    });
  }

  // Muestra de inmediato los elementos que ya están en pantalla al cargar.
  // Evita que el contenido quede invisible (opacity: 0) en móviles cuando el
  // observador tarda o no llega a dispararse con contenedores muy altos.
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh && rect.bottom > 0;
  }

  document.querySelectorAll('.animate').forEach(el => {
    if (isInViewport(el)) el.classList.add('visible');
  });

  // Si el navegador no soporta IntersectionObserver, mostramos todo.
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.animate').forEach(el => el.classList.add('visible'));
  } else {
    // Intersection Observer para animaciones.
    // threshold: 0 (cualquier píxel visible dispara la animación) para que
    // funcione también en móviles con secciones muy altas, donde un umbral
    // de 0.1 nunca se alcanza y la sección quedaría en blanco (invisible).
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Deja de observar una vez visible para mejorar rendimiento
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observa todos los elementos con la clase .animate
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  }


  // ==========================================================
  //  BOTÓN WHATSAPP (página principal)
  //  El número y el mensaje se configuran arriba, en el ámbito
  //  global (WHATSAPP_NUMBER y DEFAULT_WHATSAPP_MESSAGE).
  // ==========================================================

  const whatsappBtn = document.getElementById('whatsapp-btn');

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();

      let url = `https://wa.me/${WHATSAPP_NUMBER}`;

      if (DEFAULT_WHATSAPP_MESSAGE && DEFAULT_WHATSAPP_MESSAGE.trim() !== '') {
        const encoded = encodeURIComponent(DEFAULT_WHATSAPP_MESSAGE.trim());
        url += `?text=${encoded}`;
      }

      window.open(url, '_blank');
    });
  }


  // ==========================================================
  //  BOTONES "CONSULTAR" - VISTA PREVIA DE LA PÁGINA PRINCIPAL
  //  Los 6 productos destacados usan el mismo mensaje de
  //  WhatsApp que los de catalogo.html.
  //  La categoría se lee de data-category="..." de la tarjeta.
  // ==========================================================

  const previewButtons = document.querySelectorAll('.catalog__grid .product-card__btn');

  previewButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      if (!card) return;

      const img = card.querySelector('.product-card__img');
      const name = card.querySelector('.product-card__name');
      const price = card.querySelector('.product-card__price');

      const product = {
        nombre: name ? name.textContent.trim() : 'Producto',
        categoria: card.dataset.category || 'Flores Eternas',
        precio: price ? price.textContent.trim() : '',
        imagen: img ? img.getAttribute('src') : ''
      };

      openProductWhatsApp(product);
    });
  });


  // ==========================================================
  //  ESTRUCTURA PREPARADA - FUNCIONALIDADES FUTURAS
  //  Descomenta y usa cuando necesites implementarlas.
  // ==========================================================

  // -----------------------------------------------------------
  //  FILTROS DE CATÁLOGO (futuro)
  //  Filtra productos por categoría o precio.
  // -----------------------------------------------------------
  // const filterButtons = document.querySelectorAll('.filter-btn');
  // const products = document.querySelectorAll('.product-card');
  //
  // filterButtons.forEach(btn => {
  //   btn.addEventListener('click', () => {
  //     const filter = btn.dataset.filter;
  //     products.forEach(product => {
  //       if (filter === 'all' || product.dataset.category === filter) {
  //         product.style.display = '';
  //       } else {
  //         product.style.display = 'none';
  //       }
  //     });
  //   });
  // });


  // -----------------------------------------------------------
  //  BUSCADOR (futuro)
  //  Busca productos por nombre o descripción.
  // -----------------------------------------------------------
  // const searchInput = document.getElementById('search-input');
  //
  // searchInput.addEventListener('input', (e) => {
  //   const term = e.target.value.toLowerCase();
  //   products.forEach(product => {
  //     const name = product.querySelector('.product-card__name').textContent.toLowerCase();
  //     const desc = product.querySelector('.product-card__desc').textContent.toLowerCase();
  //     if (name.includes(term) || desc.includes(term)) {
  //       product.style.display = '';
  //     } else {
  //       product.style.display = 'none';
  //     }
  //   });
  // });


  // -----------------------------------------------------------
  //  MODO OSCURO (futuro)
  //  Alterna entre tema claro y oscuro.
  // -----------------------------------------------------------
  // const darkModeToggle = document.getElementById('dark-mode-toggle');
  //
  // darkModeToggle.addEventListener('click', () => {
  //   document.body.classList.toggle('dark-mode');
  //   localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  // });
  //
  // // Restaurar tema guardado
  // if (localStorage.getItem('theme') === 'dark') {
  //   document.body.classList.add('dark-mode');
  // }

});
