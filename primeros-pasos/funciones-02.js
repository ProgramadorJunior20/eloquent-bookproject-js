/* 
Queremos escribir un programa que imprima dos números, los números de
vacas y pollos en una granja, con las palabras Vacas y Pollos después de ellos, y
ceros acolchados antes de ambos números para que siempre tengan tres dígitos
de largo.

007 Vacas
011 Pollos
 */
function imprimirInventarioGranja0(vacas, pollos) {
  let stringVaca = String(vacas);
  while (stringVaca.length < 3) {
    stringVaca = "0" + stringVaca;
  }
  console.log(`${stringVaca} Vacas`);
  let stringPollos = String(pollos);
  while (stringPollos.length < 3) {
    stringPollos = "0" + stringPollos;
  }
  console.log(`${stringPollos} Pollos`);
}
//imprimirInventarioGranja0(7, 11);

/* optimizando condigo */
/* function imprimirEtiquetaAlcochadaConCeros(numero, etiqueta) {
  let stringNumero = String(numero);
  while (stringNumero.length < 3) {
    stringNumero = "0" + stringNumero;
  }
  console.log(`${stringNumero} ${etiqueta}`);
}

function imprimirInventarioGranja(vacas, pollos, cerdos) {
  imprimirEtiquetaAlcochadaConCeros(vacas, "Vacas");
  imprimirEtiquetaAlcochadaConCeros(pollos, "Pollos");
  imprimirEtiquetaAlcochadaConCeros(cerdos, "Cerdos");
}
*/

function alcocharConCeros(numero, amplitud) {
  let string = String(numero);
  while (string.length < amplitud) {
    string = "0" + string;
  }
  return string;
}

function imprimirInventarioGranja(vacas, pollos, cerdos) {
  console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
  console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
  console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
}

imprimirInventarioGranja(7, 16, 3);

/* FUNCIONES */
// Define f para sostener un valor de función
const f = function (a) {
  console.log(a + 2);
};
// Declara g para ser una función
function g(a, b) {
  return a * b * 3.5;
}
// Un valor de función menos verboso
let h = (a) => a % 3;
