const cuadrado = function (n) {
  return n * n;
};

/* console.log(cuadrado(12)); */

const hacerSonido = function () {
  console.log("Hey Mijo!!");
};

/* hacerSonido(); */

const potencia0 = function (base, exponente) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};

/* console.log(potencia(2, 10)); */

const dividirEnDos = function (numero) {
  return numero / 2;
};

let numero = 10;
/* console.log(dividirEnDos(100));

console.log(numero); */

/* Función ingredientes necesarios - HUMUS */
const humus = function (factor) {
  const ingredientes = function (cantidad, unidad, nombre) {
    let cantidadIngredientes = cantidad * factor;
    if (cantidadIngredientes > 1) {
      unidad += "s";
    }
    console.log(`${cantidadIngredientes} ${unidad} ${nombre}`);
  };
  ingredientes(1, "lata", "garbanzos");
  ingredientes(0.25, "taza", "tahini");
  ingredientes(0.25, "taza", "jugo de limon");
  ingredientes(1, "clavo", "ajo");
  ingredientes(2, "cucharada", "aceite de oliva");
  ingredientes(0.5, "cucharadita", "comino");
};

/* humus(3); */

/* Crear funciones de una forma mas facil */
/* console.log("El futuro dice:", futuro()); */

function futuro() {
  return "Nunca tendran autos voladores.";
}

/* Funciones de flecha */
const potencia = (base, exponente) => {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
};
/* console.log(potencia(2, 10)); */

const cuadrado1 = (x) => {
  return x * x;
};
const cuadrado2 = (x) => x * x;
/* console.log(cuadrado1(4), cuadrado2(2)); */

console.log("---------------------");
function menos(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(menos(10));
console.log(menos(10, 5));
console.log("--------------------");
function potencia1(base, exponente = 10) {
  let resultado = 1;
  for (let cuenta = 0; cuenta < exponente; cuenta++) {
    resultado *= base;
  }
  return resultado;
}
/* console.log(potencia1(2)); */
console.log(potencia1(2, 10));
console.log("-------------------- CIERRE");
/* Esta característica —poder hacer referencia a una instancia específica de una
vinculación local en un alcance encerrado— se llama cierre. */
function envolverValor(n) {
  let local = n;
  return () => local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);
/* console.log(envolver1());
console.log(envolver2()); */

function multiplicar(factor) {
  return (numero) => numero * factor;
}
let duplicar = multiplicar(3);
/* console.log(duplicar(5)); */
console.log("Recursión");
function potencia2(base, exponente) {
  if (exponente == 0) {
    return 1;
  } else {
    return base * potencia2(base, exponente - 1);
  }
}
/* console.log(potencia2(2, 3)); */
function encontrarSolucion(objetivo) {
  function encontrar (actual, historia){
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    }else {
      return encontrar(actual + 5, `(${historia} + 5)`) ||
             encontrar(actual * 3, `(${historia} * 3)`);
    }
  }
  return encontrar(1, "1");
}
console.log(encontrarSolucion(6));