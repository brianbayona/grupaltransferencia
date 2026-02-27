// 1. Pedimos los datos
let producto = prompt("¿Qué producto compraste?");
let precio = Number(prompt("¿Cuál es el precio?"));
let cantidad = Number(prompt("¿Cuántos llevas?"));

// 2. Calculamos el total
let total = precio * cantidad;

// 3. Mostramos la alerta
alert("El total a pagar por " + cantidad + " " + producto + " es: " + total);