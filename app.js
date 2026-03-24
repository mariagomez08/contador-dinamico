const numeroContador = document.getElementById("numeroContador");
const botonAumentar = document.getElementById("btnAumentar");
const botonDecrementar = document.getElementById("btnDecrementar");

let aux = 0;

botonAumentar.addEventListener("click", function () {
  if (aux < 9) {
    aux = aux + 1;
    numeroContador.style.color = "white";
  } else if (aux === 9) {
    aux = aux + 1;

    numeroContador.style.color = "red";
  }
    numeroContador.textContent = aux;
});

botonDecrementar.addEventListener("click", function () {
  if (aux > 1) {
    aux = aux - 1;
    numeroContador.style.color = "white";
  } else if (aux === 1) {
    aux = aux - 1;
  }
    numeroContador.textContent = aux;
});
