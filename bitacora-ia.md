# Bitácora de uso de IA — Valentina Makeup

Registro de las veces que usé una IA durante el proyecto, qué le pedí, qué hice con lo que me dio y qué aprendí.

| Día | Herramienta | Lo que pedí (prompt resumido) | Lo que me dio | Lo que acepté, cambié o descarté, y por qué | Lo que aprendí |
|---|---|---|---|---|---|
| 1 | ChatGPT | Cómo organizar una tienda sencilla en HTML, CSS y JavaScript para un proyecto escolar | Una estructura de carpetas: index.html, css/, js/ e img/, y las secciones de la página | La acepté completa porque era simple y ordenada; descarté que me sugiriera usar un framework porque era demasiado para este nivel | Un proyecto web se organiza separando estructura (HTML), diseño (CSS) y lógica (JavaScript) |
| 2 | ChatGPT | Cómo guardar los productos en un arreglo de JavaScript y mostrarlos sin escribirlos uno por uno en el HTML | Un arreglo de objetos con nombre, precio, imagen y descripción, y un ciclo forEach para crear las tarjetas | Lo acepté, pero cambié los productos de ejemplo por los 8 productos reales de la tienda, con sus precios en pesos | Con un arreglo puedo agregar o quitar productos cambiando solo un archivo |
| 3 | ChatGPT | Cómo sumar el total del carrito en JavaScript | Una función que sumaba con reduce | La acepté en parte: cambié reduce por un ciclo que va acumulando el total porque así lo entiendo mejor, y agregué el formato de precio con toLocaleString('es-CO') para que se vea $35.000 | El ciclo recorre el arreglo y acumula un valor; toLocaleString da formato de número según el país |
| 4 | ChatGPT | Cómo hacer el botón "Hacer pedido" para que abra WhatsApp con el pedido armado | Un enlace de wa.me con el mensaje codificado usando encodeURIComponent | Lo acepté, pero cambié el número de ejemplo que traía por el número real de la tienda (con el 57 de Colombia) | Con wa.me y encodeURIComponent se puede enviar un mensaje listo desde una página web |
| 5 | ChatGPT | Cómo hacer que la página se vea bien en celular y usar los colores de mi marca | Variables CSS con los colores rosado y dorado del logo y una media query para pantallas pequeñas | Lo acepté, pero ajusté los colores hasta que combinaran con el logo y cambié el tamaño de las fotos del catálogo | Las variables CSS guardan los colores de la marca en un solo lugar y el diseño responsive adapta la página al celular |
| 6 | ChatGPT | Revisar si el nombre de la empresa quedó bien escrito en todo el proyecto | Me dijo que el nombre estaba bien en los archivos | Lo descarté en parte: al revisar GitHub yo misma encontré que la descripción del repositorio decía "Valentain" y lo corregí a "Valentina". Aprendí a no confiar sin revisar | La IA puede equivocarse o no revisar todo; el responsable de entregar bien el trabajo soy yo |

## Cierre del proyecto

La IA me ayudó a organizar el proyecto por carpetas, a crear el arreglo de productos y a resolver las partes que no sabía hacer, como el total del carrito y el enlace de WhatsApp.
También me sirvió para avanzar más rápido, porque en vez de empezar desde cero partía de un ejemplo y lo adaptaba a mi tienda.
La IA se equivocó cuando aseguró que el nombre estaba bien escrito en todo el proyecto, porque en la descripción del repositorio quedó "Valentain" y me tocó detectarlo y corregirlo yo.
También me dio un número de WhatsApp de ejemplo y productos de ejemplo, y si no los reviso la tienda habría quedado con datos falsos.
Ahora, sin la IA, ya podría crear la estructura de una página, agregar productos al arreglo y cambiar colores y textos por mi cuenta.
También sé revisar el código antes de aceptarlo, porque entendí que la IA propone, pero quien decide y entrega el trabajo soy yo.
