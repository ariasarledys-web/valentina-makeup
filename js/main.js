// Numero de WhatsApp de la tienda (cambiar por el numero real)
const NUMERO_WHATSAPP = "573011411383";

// El carrito empieza vacio
let carrito = [];

// Muestra los precios con puntos de miles, ejemplo: $35.000
function formatoPrecio(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

// ---- Mostrar los productos en el catalogo ----
const contenedor = document.getElementById("lista-productos");

productos.forEach(function (producto) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta";
  tarjeta.innerHTML =
    '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">' +
    '<div class="tarjeta-cuerpo">' +
    "<h3>" + producto.nombre + "</h3>" +
    "<p>" + producto.descripcion + "</p>" +
    '<p class="precio">' + formatoPrecio(producto.precio) + "</p>" +
    '<button onclick="agregarAlCarrito(' + producto.id + ')">Agregar al carrito</button>' +
    "</div>";
  contenedor.appendChild(tarjeta);
});

// ---- Funciones del carrito ----
function agregarAlCarrito(id) {
  const producto = productos.find(function (p) { return p.id === id; });
  const item = carrito.find(function (i) { return i.id === id; });
  if (item) {
    item.cantidad = item.cantidad + 1;
  } else {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
  }
  mostrarCarrito();
}

function quitarDelCarrito(id) {
  carrito = carrito.filter(function (i) { return i.id !== id; });
  mostrarCarrito();
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find(function (i) { return i.id === id; });
  item.cantidad = item.cantidad + cambio;
  if (item.cantidad <= 0) {
    quitarDelCarrito(id);
  } else {
    mostrarCarrito();
  }
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const contador = document.getElementById("contador");
  const totalTexto = document.getElementById("total");
  lista.innerHTML = "";
  let total = 0;
  let cantidadTotal = 0;

  if (carrito.length === 0) {
    lista.innerHTML = "<p>El carrito esta vacio.</p>";
  }

  carrito.forEach(function (item) {
    const subtotal = item.precio * item.cantidad;
    total = total + subtotal;
    cantidadTotal = cantidadTotal + item.cantidad;
    const fila = document.createElement("div");
    fila.className = "item-carrito";
    fila.innerHTML =
      "<span>" + item.nombre + "</span>" +
      '<span><button onclick="cambiarCantidad(' + item.id + ', -1)">-</button> ' +
      item.cantidad +
      ' <button onclick="cambiarCantidad(' + item.id + ', 1)">+</button></span>' +
      "<span>" + formatoPrecio(subtotal) + "</span>" +
      '<button class="btn-quitar" onclick="quitarDelCarrito(' + item.id + ')">Quitar</button>';
    lista.appendChild(fila);
  });

  contador.textContent = cantidadTotal;
  totalTexto.textContent = formatoPrecio(total);
}

// ---- Boton de hacer pedido por WhatsApp ----
function hacerPedido() {
  if (carrito.length === 0) {
    alert("El carrito esta vacio. Agrega al menos un producto.");
    return;
  }
  let mensaje = "Hola Valentina Makeup, quiero hacer un pedido:\n";
  let total = 0;
  carrito.forEach(function (item) {
    const subtotal = item.precio * item.cantidad;
    total = total + subtotal;
    mensaje = mensaje + "- " + item.nombre + " x" + item.cantidad + " = " + formatoPrecio(subtotal) + "\n";
  });
  mensaje = mensaje + "Total: " + formatoPrecio(total);
  const url = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

mostrarCarrito();
