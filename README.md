# Valentina Makeup

Tienda en linea sencilla con carrito de compras, hecha con HTML, CSS y JavaScript.

## Que tiene la pagina

- Encabezado con logo y menu
- Banner principal
- Seccion "Quienes somos"
- Catalogo de productos
- Carrito de compras: agregar, quitar, cambiar cantidades y ver el total en pesos colombianos
- Boton "Hacer pedido" que abre WhatsApp con el pedido listo (productos, cantidades y total)
- Diseño responsive, se ve bien en celular

## Estructura del proyecto

```
index.html
css/estilos.css
js/productos.js
js/main.js
img/
README.md
```

## Como cambiar los productos

Los productos estan en `js/productos.js`. Para agregar uno nuevo se copia un bloque y se cambian el nombre, el precio, la imagen y la descripcion. La foto del producto va en la carpeta `img/`.

## Como cambiar el numero de WhatsApp

En `js/main.js`, en la primera linea, se cambia el valor de `NUMERO_WHATSAPP` por el numero real de la tienda (con el 57 de Colombia al principio).

## Como ver la pagina

Abrir `index.html` en el navegador, o verla publicada en GitHub Pages desde la pestaña Settings > Pages del repositorio, eligiendo la rama `main` y la carpeta `/ (root)`.

## Creditos de imagenes

Fotografias de los productos suministradas por Valentina Makeup de su catalogo.
