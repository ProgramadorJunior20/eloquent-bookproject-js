const cuadrado = function (n) {
  return n * n;
};

console.log(cuadrado(12));

const hacerSonido = function () {
  console.log("Hey Mijo!!");
};

hacerSonido();

const potencia = function (base, exponente) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};

console.log(potencia(2, 10));

const dividirEnDos = function (numero) {
  return numero / 2;
};
let numero = 10;
console.log(dividirEnDos(100));
