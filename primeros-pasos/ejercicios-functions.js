/* retornar el numero minimo con una function, Mínimo*/
console.log("--------------------- E#01");
const numeroMin = (x, y) => {
  const mini = Math.min(x, y);
  return mini;
};

console.log(numeroMin(100, 20));

/* 
// Ejercicio comparativo
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
 */
console.log("--------------------- E#02");
/* Recursión */
const esPar = (n) => {
  if (n % 2 == 0) {
    return `${n} Es Par`;
  } else {
    return `${n} Es Impar`;
  }
};

//console.log(esPar(-1));

/*
ejercicio conparativo

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false 
*/
console.log("-------------------- E#3");
/* conteo de frijoles */
/* let nombre = "jefferson";
console.log(nombre[8].length); */

const contarChar = (string, ch) => { // mi ejercicio
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      contador += 1;
    }
  }
  return contador;
};

const contarFs = (string) => {
  return contarChar(string, "F");
};

console.log(contarFs("jeFFerson"));
console.log(contarChar("KKKKKKjefferson", "K"));

/* function countChar(string, ch) {
  // Ejercicio comparativo
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4 */
