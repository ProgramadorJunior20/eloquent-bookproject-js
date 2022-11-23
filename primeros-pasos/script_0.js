let deudaLuigi = 140;
deudaLuigi = deudaLuigi - 35;
console.log("Deunda:", deudaLuigi);

let uno = 1,
  dos = 2;
let result = uno + dos;
console.log(result);

/* const password = prompt("Introducir contraseña"); */ // Muestra un cuadro de dialogo en el nevagador
console.log(Math.max(2, 4)); // Toma cualquier cantidad de argumentos numericos y devuelve el mayor de ellos
console.log(Math.min(2, 4) + 100); // Es lo contrario de Math.max
/* let elNumero = Number(prompt("Elige un número")); // Opteniendo un mumero entero
if (!Number.isNaN(elNumero)) { // “a menos que elNumero no sea un número, haz esto”.
  console.log("Tu numero es la raiz cuadrada de: ", elNumero * elNumero);
} else {
    console.log("Ey. Porque no me disde un número ?");
}
 */
if (1 + 1 == 2) console.log("Es verdad"); // Omitiendo las llavas

/* let numero = Number(prompt("Elige un número"));

if ( numero < 10) { // Anidacion de condisiones
    console.log("Pequeño");
} else if ( numero < 100 ) {
    console.log("Mediano");
}else {
    console.log("Grande");
} */

/* Flujo De Control De Ciclos */

let number = 0;

while (number <= 12) {
  // Ciclo while Mostrando numeros pares
  console.log(number);
  number += 2;
}

console.log("--------------------- WHILE");

let resultado = 1;
let contador = 0;

while (contador < 10) {
  resultado = resultado * 2;
  contador += 1;
}
console.log(resultado);

console.log("------------------- DO WHILE");

/* let tuNombre;

do {
  tuNombre = prompt("Quien eres?");
} while (!tuNombre);
{
  console.log(tuNombre);
} */

console.log("--------------------- CONDISIÓN");

if (false != true) {
  console.log("Esto tiene sentido");
  if (1 < 2) {
    console.log("No hay sorpresa aqui.");
  }
}

console.log("--------------------- FOR");
/* Ciclos For */

for ( let numero = 0; numero <= 12; numero += 2 ){ // Impresión de números pares
    console.log(numero);
    document.querySelector('#header').innerHTML = numero
}

/* Este es el código que calcula 2 a la 10, usando for en lugar de while */

let resultado2 = 1;

for (let contador = 0; contador < 10; contador += 1) {
    resultado2 = resultado2 * 2;
}
console.log(resultado2);
document.querySelector('#header').innerHTML = resultado2

