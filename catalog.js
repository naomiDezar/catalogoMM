/**
 * ============================================================
 *  CATÁLOGO - Renderizado de productos (catalogo.html)
 * ============================================================
 *
 *  Este archivo lee el arreglo `products` (products.js) y
 *  genera automáticamente todas las tarjetas de producto.
 *
 *  ▸ PARA AGREGAR PRODUCTOS: edita products.js (NO este archivo).
 *  ▸ PARA CAMBIAR EL NÚMERO DE WHATSAPP: edita script.js
 *    (variable global WHATSAPP_NUMBER).
 *
 *  NOTA: script.js debe cargarse ANTES de este archivo.
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================
  //  CONTENEDOR DONDE SE RENDERIZA EL CATÁLOGO
  // ==========================================================

  const catalogGrid = document.getElementById('catalog-grid');

  // Si la página no tiene el contenedor, no hacemos nada.
  if (!catalogGrid) return;

  // ==========================================================
  //  MENSAJE Y ENLACE DE WHATSAPP (compartidos)
  //  Las funciones buildWhatsAppMessage() y openProductWhatsApp()
  //  viven en script.js (único lugar donde se definen el número,
  //  el mensaje y el enlace wa.me), para que la vista previa de
  //  la página principal y el catálogo usen exactamente la misma
  //  lógica sin duplicar código.
  //  NOTA: script.js se carga ANTES de este archivo.
  // ==========================================================


  // ==========================================================
  //  CREA UNA TARJETA DE PRODUCTO
  // ==========================================================

  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.categoria; // útil para futuros filtros

    card.innerHTML = `
      <div class="product-card__image">
        <!-- IMAGEN: reemplaza el PNG en assets/images/productos/ -->
        <img src="${product.imagen}" alt="${product.nombre}" class="product-card__img">
        <div class="product-card__overlay"></div>
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${product.categoria}</span>
        <h3 class="product-card__name">${product.nombre}</h3>
        <p class="product-card__price">${product.precio}</p>
        <p class="product-card__desc">${product.descripcion}</p>
        <button class="btn btn--small btn--outline product-card__btn">
          Consultar por WhatsApp
        </button>
      </div>
    `;

    // Botón "Consultar": abre WhatsApp con el mensaje del producto.
    const button = card.querySelector('.product-card__btn');
    button.addEventListener('click', () => openProductWhatsApp(product));

    return card;
  }


  // ==========================================================
  //  RENDERIZA TODOS LOS PRODUCTOS
  // ==========================================================

  products.forEach(product => {
    catalogGrid.appendChild(createProductCard(product));
  });

});
