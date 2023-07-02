let subTotalPm = 0;
let subTotalCalc = 0;
let subTotalEco = 0;
let subTotal = 0;

// Calcular el precio neto de los productos
function calcularSubTotal() {
  let portaminas = document.getElementById("portaminas").value;
  let calculadoras = document.getElementById("calculadoras").value;
  let eco = document.getElementById("eco").value;

  // Chequeo de portaminas
  if (portaminas == "Pm1") {
    subTotalPm += 5580;
  }
  if (portaminas == "Pm2") {
    subTotalPm += 1638;
  }
  if (portaminas == "Pm3") {
    subTotalPm += 14136;
  }
  if (portaminas == "Pm4") {
    subTotalPm += 5332;
  }
  if (portaminas == "Pm5") {
    subTotalPm += 2852;
  }
  if (portaminas == "Pm6") {
    subTotalPm += 3844;
  }
  if (portaminas == "Pm7") {
    subTotalPm += 6696;
  }
  if (portaminas == "Pm8") {
    subTotalPm += 7688;
  }
  if (portaminas == "Pm9") {
    subTotalPm += 19840;
  }

  // Chequeo calculadoras
  if (calculadoras == "Casio") {
    subTotalCalc += 17360;
  }
  if (calculadoras == "TI") {
    subTotalCalc += 9920;
  }
  if (calculadoras == "Sharp") {
    subTotalCalc += 13883;
  }

  //Chequeo eco-friendly
  if (eco == "Eco1") {
    subTotalEco += 4464;
  }
  if (eco == "Eco2") {
    subTotalEco += 2976;
  }
  if (eco == "Eco3") {
    subTotalEco += 1407;
  }
  if (eco == "Eco4") {
    subTotalEco += 6175;
  }
  if (eco == "Eco5") {
    subTotalEco += 1482;
  }

  // A partir de aca se calculan las unidades
  let Pm10Ud = document.getElementById("Pm10Ud").checked;
  let Pm20Ud = document.getElementById("Pm20Ud").checked;

  let Calc10Ud = document.getElementById("Calc10Ud").checked;
  let Calc20Ud = document.getElementById("Calc20Ud").checked;

  let Eco10Ud = document.getElementById("Eco10Ud").checked;
  let Eco20Ud = document.getElementById("Eco20Ud").checked;

  if (Pm10Ud) {
    subTotalPm *= 10;
    subTotalPm = (95 * subTotalPm) / 100;
  }
  if (Pm20Ud) {
    subTotalPm *= 20;
    subTotalPm = (90 * subTotalPm) / 100;
  }

  if (Calc10Ud) {
    subTotalCalc *= 10;
    subTotalPm = (95 * subTotalCalc) / 100;
  }
  if (Calc20Ud) {
    subTotalCalc *= 20;
    subTotalCalc = (90 * subTotalCalc) / 100;
  }

  if (Eco10Ud) {
    subTotalEco *= 10;
    subTotalEco = (95 * subTotalEco) / 100;
  }
  if (Eco20Ud) {
    subTotalEco *= 10;
    subTotalEco = (90 * subTotalEco) / 100;
  }

  subTotal = subTotalPm + subTotalCalc + subTotalEco;

  return subTotal;
}

function imprimirSubTotal() {
  let subTotalCompra = calcularSubTotal();
  let campoSubTotal = document.getElementById("subTotal");

  campoSubTotal.textContent = "Subtotal: $";
  campoSubTotal.textContent += subTotalCompra;
  if (subTotalCompra > 0) {
    alert("Se agregaron productos al carrito con éxito");
    borrarSeleccionCarrito();
  } else {
    alert("Por favor, seleccione un producto para agregar al carrito");
  }
}

function calcularEnvio() {
  let ciudad = document.getElementById("ciudad").value;
  let valorEnvio = 0;

  // Se ejecuta el if pero igualmente dice que el envio es 750
  if (ciudad == "Bell Ville" || ciudad == "bell ville") {
    valorEnvio = 0;
    console.log("La ciudad es " + ciudad);
    console.log("Se ejecuta el if");
  } else {
    valorEnvio = 750;
  }

  return valorEnvio;
}

function imprimirEnvio() {
  let valorEnvioCompra = calcularEnvio();
  let campoEnvio = document.getElementById("envio");

  campoEnvio.textContent = "Envio: $";
  campoEnvio.textContent += valorEnvioCompra;
}

function valuarEntrada() {
  let nombreDelCliente = document.getElementById("nombre").value;
  let apellidoDelcliente = document.getElementById("apellido").value;
  let provincia = document.getElementById("provincia").value;
  let ciudad = document.getElementById("ciudad").value;
  let direccion = document.getElementById("direccion").value;
  let codigoPostal = document.getElementById("codigoPostal").value;

  if (
    nombreDelCliente == "" ||
    apellidoDelcliente == "" ||
    provincia == "" ||
    ciudad == "" ||
    direccion == "" ||
    codigoPostal == ""
  ) {
    alert("Por favor, complete todos los campos");
  }
}

function borrarSeleccionCarrito() {
  document.getElementById("portaminas").value = "";
  document.getElementById("calculadoras").value = "";
  document.getElementById("eco").value = "";

  document.getElementById("Pm1Ud").checked = false;
  document.getElementById("Pm10Ud").checked = false;
  document.getElementById("Pm20Ud").checked = false;

  document.getElementById("Calc1Ud").checked = false;
  document.getElementById("Calc10Ud").checked = false;
  document.getElementById("Calc20Ud").checked = false;

  document.getElementById("Eco1Ud").checked = false;
  document.getElementById("Eco10Ud").checked = false;
  document.getElementById("Eco20Ud").checked = false;
}
