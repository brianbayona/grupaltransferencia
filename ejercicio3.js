// 1. Pedimos las 4 edades
// Es OBLIGATORIO usar Number() porque vamos a usar el signo + para sumar
let edad1 = Number(prompt("Ingresa la edad de la persona 1:"));
let edad2 = Number(prompt("Ingresa la edad de la persona 2:"));
let edad3 = Number(prompt("Ingresa la edad de la persona 3:"));
let edad4 = Number(prompt("Ingresa la edad de la persona 4:"));

// 2. Calculamos el promedio
// Usamos paréntesis para que primero sume y luego divida
let promedio = (edad1 + edad2 + edad3 + edad4) / 4;

// 3. Mostramos el resultado
alert("El promedio de edad del grupo es: " + promedio);