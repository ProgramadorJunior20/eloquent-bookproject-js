console.log("ROMPIENDO UN CICLO");
for (let actual = 20; ; actual += 1) {
  if (actual % 7 == 0) {
    console.log(actual);
    document.querySelector("#header").innerHTML = actual;
    break;
  }
}

console.log("VALORES CON SWITCH");

switch (prompt("Como esta el clima?")) {
  case "lluvioso":
    console.log("Recuerda salir con paraguas");
    break;
  case "soleado":
    console.log("Vistete con poca ropa");
    break;
  case "nublado":
    console.log("Ve afuera");
    break;
  default:
    console.log("Tipo de clima desconocido!");
    break;
}
