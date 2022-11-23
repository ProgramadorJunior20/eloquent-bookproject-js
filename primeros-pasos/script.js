const message = 'Hello world' // Try edit me
const salto = "Esta es mi primera linea\nY esta la segunda"; // Salto de linea
const concatenar = "con" + "cat" + "e" + "nar"; // Concatenando
const literales = `La mitad de 100 es ${100 / 2}`; // Plantillas literales
const compara = 1 + 1 == 2 && 10 * 10 > 50;  // Operadores ligicos

// Update header text
/* document.querySelector('#header').innerHTML = message
document.querySelector('#header').innerHTML = concatenar */
/* document.querySelector('#header').innerHTML = literales */
document.querySelector('#header').innerHTML = compara

// Log to console
console.log(message)
console.log(salto)
console.log(null || "usuario")
console.log(null || "usuario")