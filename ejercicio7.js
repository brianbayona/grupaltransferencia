// 1. Solicitar el precio del producto
let precioOriginal = prompt("Introduce el precio del producto:");
precioOriginal = Number(precioOriginal);

// 2. Calcular el descuento (10%) y el precio final
let descuento = precioOriginal * 0.10;
let precioFinal = precioOriginal - descuento;

// 3. Mostrar resultados detallados
console.log("Precio original: $" + precioOriginal);
console.log("Descuento (10%): -$" + descuento);
console.log("Precio final a pagar: $" + precioFinal);