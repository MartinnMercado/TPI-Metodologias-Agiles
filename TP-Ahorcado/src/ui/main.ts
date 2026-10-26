import { Ahorcado } from "../domain/Ahorcado";

function obtenerPalabra(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("word") || "GATO";
}

const btnIniciar = document.getElementById("btn-iniciar") as HTMLButtonElement;
const pantallaJuego = document.getElementById("pantalla-juego") as HTMLElement;
const elemPalabra = document.getElementById("word") as HTMLElement;
const elemVidas = document.getElementById("lives") as HTMLElement;
const elemEstado = document.getElementById("game-status") as HTMLElement;
const inputLetra = document.getElementById("input-letra") as HTMLInputElement;

let juego: Ahorcado;

if (btnIniciar) {
  btnIniciar.addEventListener("click", () => {
    const palabra = obtenerPalabra();
    juego = new Ahorcado(palabra);

    if (elemPalabra) {
      elemPalabra.textContent = juego.palabraEnmascarada();
    }
    if (elemVidas) {
      elemVidas.textContent = String(juego.vidas());
    }
    if (elemEstado) {
      elemEstado.textContent = "";
    }
    if (pantallaJuego) {
      pantallaJuego.style.display = "block";
    }
    if (inputLetra) {
      inputLetra.focus();
    }
  });
}

// Al presionar Enter en la caja de texto, se envía la letra a la lógica
if (inputLetra) {
  inputLetra.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputLetra.value.trim() !== "") {
      if (juego) {
        juego.adivinar(inputLetra.value);
        if (elemPalabra) {
          elemPalabra.textContent = juego.palabraEnmascarada();
        }
        if (elemVidas) {
          elemVidas.textContent = String(juego.vidas());
        }
        if (elemEstado && juego.estado() !== "JUGANDO") {
          elemEstado.textContent = juego.estado() === "PERDIDO" ? "PERDISTE" : "GANASTE";
        }
      }
      inputLetra.value = "";
    }
  });
}

