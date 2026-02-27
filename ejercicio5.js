/**
 * Ejercicio 5: Tiempo estimado de viaje
 */
let distancia, velocidad, tiempo;

distancia = parseFloat(prompt("Ingrese la distancia del recorrido en km:"));
velocidad = parseFloat(prompt("Ingrese la velocidad promedio en km/h:"));

tiempo = distancia / velocidad;

console.log("El tiempo estimado del viaje es: " + tiempo + " horas");
