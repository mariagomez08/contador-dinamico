const numeroContador = document.getElementById("numeroContador");
const botonAumentar = document.getElementById("btnAumentar");

let aux = 1;
let fuePulsado = false;

console.log("Estoy aqui");

botonAumentar.addEventListener("click", () => {
  fuePulsado = true;
  if (fuePulsado && aux <10) {
    aux = aux + 1;
    numeroContador.textContent = aux; // <--- aqui pasamos el dato al dom
    document.numeroContador = aux;
  }else{
    numeroContador.style.color = "blue"
  }
});

