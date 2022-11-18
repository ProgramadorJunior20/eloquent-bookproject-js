// Ciclo de un triangulo Ejerc - 1
/* 

Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente
triángulo:
#
##
###
####
#####
######
####### 

*/

for (let line = "#"; line.length <= 8; line += "#") {
  console.log(line);
}
console.log("--------------------");
console.log("--------------------");

// Longitud de String

/* let miNombre = "Jefferson";
console.log(miNombre.length); */

// Ejercicio 2 FizzBuzz
/* 
Escribe un programa que use console.log para imprimir todos los números de
1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
en lugar del número, y para los números divisibles por 5 (y no 3), imprime
"Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "
FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
o "Buzz" para números divisibles por solo uno de ellos).
*/
for (let numero = 1; numero <= 100; numero += 1) {
  // Ejercicio Jefferson
  if (numero % 3 === 0) {
    console.log(`${numero} Fizz`);
  } else if (numero % 5 === 0) {
    console.log(`${numero} Buzz`);
  } else if (numero % 3 === 0 || numero % 5 === 0) {
    console.log(`${numero} FizzBuzz`);
  }
}
console.log("--------------------");
console.log("--------------------");

// Ejercicio comparativo FizzBuzz
for (let n = 1; n <= 100; n++) {
  let dividivi = "";
  if (n % 3 === 0) dividivi += "Fizz";
  if (n % 5 === 0) dividivi += "Buzz";
  console.log( dividivi || n );
}
console.log("--------------------");
console.log("--------------------");

// Ejercicio Tablero de ajedrez
/* 
Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto: 

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

Cuando tengas un programa que genere este patrón, define una vinculación
tamaño = 8 y cambia el programa para que funcione con cualquier tamaño,
dando como salida una cuadrícula con el alto y ancho dados.
*/

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for ( x = 0; x < size; x++){
        if ((x + y) % 2 === 0){
            board += " ";
        }else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);