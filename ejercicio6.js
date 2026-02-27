let minutosTotales = prompt("Introduce la cantidad de minutos:");
minutosTotales = Number(minutosTotales);

// 2. Calcular horas (usamos Math.floor para redondear hacia abajo)
let horas = Math.floor(minutosTotales / 60);

// 3. Calcular los minutos restantes
let minutosRestantes = minutosTotales % 60;

// 4. Mostrar el resultado
console.log(horas + " horas y " + minutosRestantes + " minutos.");