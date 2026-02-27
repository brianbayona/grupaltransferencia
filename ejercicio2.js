// 1. Pedimos los datos
let horas = Number(prompt("¿Cuántas horas trabajaste esta semana?"));
let valorHora = Number(prompt("¿Cuánto te pagan por hora?"));

// 2. Calculamos el salario (Multiplicación)
let salario = horas * valorHora;

// 3. Mostramos el resultado con una alerta
alert("Tu salario semanal es de: $" + salario);