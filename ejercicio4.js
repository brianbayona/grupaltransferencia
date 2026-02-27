/**
 * Ejercicio 4: Consumo de gasolina
 */
let kilometrosRecorridos, consumoPorKm, litrosConsumidos;

kilometrosRecorridos = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos:"));
consumoPorKm = parseFloat(prompt("Ingrese el consumo por kilómetro (litros/km):"));

litrosConsumidos = kilometrosRecorridos * consumoPorKm;

console.log("Litros totales consumidos: " + litrosConsumidos);