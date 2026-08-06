/**
 * ============================================================
 *  PRODUCTOS - Catálogo de Flores Eternas
 * ============================================================
 *
 *  ▸ PARA AGREGAR UN NUEVO PRODUCTO:
 *    1. Copia un bloque de objeto {...}
 *    2. Cambia: id, nombre, precio, descripcion, categoria,
 *       imagen e imageUrl
 *    3. Coloca tu imagen PNG en la carpeta:
 *       assets/images/productos/
 *    4. Guarda el archivo. El catálogo se genera automáticamente.
 *
 *  ▸ NO necesitas modificar el HTML ni el JavaScript.
 *
 *  ▸ CAMPOS:
 *    - id:          número único del producto.
 *    - nombre:      nombre que se muestra en la tarjeta.
 *    - precio:      precio en soles (S/. xx.xx).
 *    - descripcion: texto corto que acompaña al producto.
 *    - categoria:   agrupa los productos ("Flores Eternas" / "Equipos de Fútbol").
 *    - imagen:      ruta RELATIVA de la imagen PNG sin fondo.
 *    - imageUrl:    URL COMPLETA de la imagen para WhatsApp.
 *
 *  ▸ IMAGEURL - IMPORTANTE:
 *    Cuando el sitio esté PUBLICADO en un dominio real, reemplaza
 *    "https://midominio.com" por tu dominio real en cada producto.
 *    Ejemplo:  https://tudominio.com/assets/images/productos/rosa1.png
 *
 *    Esta URL se envía dentro del mensaje de WhatsApp porque wa.me
 *    NO permite adjuntar imágenes automáticamente (limitación de
 *    seguridad de WhatsApp).
 * ============================================================
 */

const products = [

  /* ------------------------------------------------------------
     FLORES ETERNAS (16)
     CAMBIA imagen, imageUrl, precio o descripción aquí.
     Reemplaza el PNG en assets/images/productos/
     ------------------------------------------------------------ */

  {
    id: 1,
    nombre: "Flor en maceta",
    precio: "S/. 15.00",
    descripcion: "Flores rosas en su maceta, perfecto para ocasiones especiales.",
    categoria: "Flores Eternas",
    imagen: "assets/images/florfucsia.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-1.png"
  },

  {
    id: 2,
    nombre: "Flores en maceta",
    precio: "S/. 20.00",
    descripcion: "Flores de colores en su maceta.",
    categoria: "Flores Eternas",
    imagen: "assets/images/florcolores.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-2.png"
  },

  {
    id: 3,
    nombre: "Flores rosa",
    precio: "S/. 50.00",
    descripcion: "Flores rosa en su maceta.",
    categoria: "Flores Eternas",
    imagen: "assets/images/florrosa.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-3.png"
  },

  {
    id: 4,
    nombre: "Flor en maceta",
    precio: "S/. 15.00",
    descripcion: "Bellas flores rojas para los amantes del rojo.",
    categoria: "Flores Eternas",
    imagen: "assets/images/florroja.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-4.png"
  },

  {
    id: 5,
    nombre: "Bouquet Rosa",
    precio: "S/. 20.00",
    descripcion: "Hermoso ramito de flores rosa.",
    categoria: "Flores Eternas",
    imagen: "assets/images/bouquet.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-5.png"
  },

  {
    id: 6,
    nombre: "Tulipan azul",
    precio: "S/. 58.00",
    descripcion: "Hermoso tulipan azul.",
    categoria: "Flores Eternas",
    imagen: "assets/images/tuliblue.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-6.png"
  },

  {
    id: 7,
    nombre: "Flor en maceta",
    precio: "S/. 15.00",
    descripcion: "Bella flor rosa con blanco.",
    categoria: "Flores Eternas",
    imagen: "assets/images/florblanro.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-7.png"
  },

  {
    id: 8,
    nombre: "Flores en maceta",
    precio: "S/. 15.00",
    descripcion: "Lindas flores rojas en su macetita.",
    categoria: "Flores Eternas",
    imagen: "assets/images/rositas.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-8.png"
  },

  {
    id: 9,
    nombre: "Flor morada",
    precio: "S/. 15.00",
    descripcion: "Bella flor morada en su maceta.",
    categoria: "Flores Eternas",
    imagen: "assets/images/lavanda.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-9.png"
  },

  {
    id: 10,
    nombre: "Flor en maceta",
    precio: "S/. 20.00",
    descripcion: "Linda flor amarilla para un detalle especial.",
    categoria: "Flores Eternas",
    imagen: "assets/images/floramarilla.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-10.png"
  },

  {
    id: 11,
    nombre: "Flor en maceta",
    precio: "S/. 20.00",
    descripcion: "Bella flor roja en su macetita.",
    categoria: "Flores Eternas",
    imagen: "assets/images/roja.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-11.png"
  },

  {
    id: 12,
    nombre: "Moradita",
    precio: "S/. 20.00",
    descripcion: "Bello arreglo de flores moradas.",
    categoria: "Flores Eternas",
    imagen: "assets/images/lila.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-12.png"
  },

  {
    id: 13,
    nombre: "Azulita",
    precio: "S/. 25.00",
    descripcion: "Bella flor azul.",
    categoria: "Flores Eternas",
    imagen: "assets/images/blue.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-13.png"
  },

  {
    id: 14,
    nombre: "Flor en maceta",
    precio: "S/. 15.00",
    descripcion: "Hermosa flor amarilla.",
    categoria: "Flores Eternas",
    imagen: "assets/images/yellow.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-14.png"
  },

  {
    id: 15,
    nombre: "Flor en maceta",
    precio: "S/. 20.00",
    descripcion: "Bella flor naranja.",
    categoria: "Flores Eternas",
    imagen: "assets/images/naranja.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-15.png"
  },

  {
    id: 16,
    nombre: "Flor en tarjeta",
    precio: "S/. 12.00",
    descripcion: "Bello arreglo en tarjetita.",
    categoria: "Flores Eternas",
    imagen: "assets/images/florcar.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-16.png"
  },

  {
    id: 17,
    nombre: "Flor azul",
    precio: "S/. 18.00",
    descripcion: "Hermosa flor azul en maceta.",
    categoria: "Flores Eternas",
    imagen: "assets/images/azul.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-16.png"
  },

  /* ------------------------------------------------------------
     ARREGLOS DE EQUIPOS DE FÚTBOL DEL PERÚ (3)
     CAMBIA imagen, imageUrl, precio o descripción aquí.
     ------------------------------------------------------------ */

  {
    id: 18,
    nombre: "Portalapicero Alianza Lima",
    precio: "S/. 18.00",
    descripcion: "Hermoso Portalapicero de Alianza Lima.",
    categoria: "Equipos de Fútbol",
    imagen: "assets/images/alianza.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-17.png"
  },

  {
    id: 19,
    nombre: "Portalapicero Universitario",
    precio: "S/. 18.00",
    descripcion: "Hermoso Portalapicero  de Universitario de Deportes.",
    categoria: "Equipos de Fútbol",
    imagen: "assets/images/universitario.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-18.png"
  },

  {
    id: 20,
    nombre: "Portalapicero Sporting Cristal",
    precio: "S/. 18.00",
    descripcion: "Hermoso Portalapicero  de Sporting Cristal.",
    categoria: "Equipos de Fútbol",
    imagen: "assets/images/cristal.png",
    imageUrl: "https://midominio.com/assets/images/productos/producto-19.png"
  }

];

// NOTA: para agregar más categorías solo agrega nuevos objetos
// con el nombre de categoría que desees, por ejemplo:
//   categoria: "Arreglos Personalizados"
