import { Ahorcado } from "../domain/Ahorcado";

function obtenerPalabra(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("word") || "GATO";
}

function obtenerDificultad(): string {
  const params = new URLSearchParams(window.location.search);
  return (
    params.get("dificultad") ||
    (document.getElementById("select-dificultad") as HTMLSelectElement)
      ?.value ||
    "normal"
  );
}

const btnIniciar = document.getElementById("btn-iniciar") as HTMLButtonElement;
const btnReiniciar = document.getElementById(
  "btn-reiniciar",
) as HTMLButtonElement;
const pantallaJuego = document.getElementById("pantalla-juego") as HTMLElement;
const elemPalabra = document.getElementById("word") as HTMLElement;
const elemVidas = document.getElementById("lives") as HTMLElement;
const elemEstado = document.getElementById("game-status") as HTMLElement;
const inputLetra = document.getElementById("input-letra") as HTMLInputElement;
const elemPuntaje = document.getElementById("score") as HTMLElement;
const elemPalabraRevelada = document.getElementById(
  "palabra-revelada",
) as HTMLElement;
const selectDificultad = document.getElementById(
  "select-dificultad",
) as HTMLSelectElement;
const labelDificultad = document.querySelector(
  "label[for='select-dificultad']",
) as HTMLElement;

let juego: Ahorcado;

function mostrarPantallaDificultad(): void {
  if (selectDificultad) selectDificultad.style.display = "inline";
  if (labelDificultad) labelDificultad.style.display = "inline";
}

function ocultarPantallaDificultad(): void {
  if (selectDificultad) selectDificultad.style.display = "none";
  if (labelDificultad) labelDificultad.style.display = "none";
  if (btnIniciar) btnIniciar.style.display = "none";
}

function iniciarJuego(): void {
  const palabra = obtenerPalabra();
  const dificultad = obtenerDificultad();
  juego = new Ahorcado(palabra, dificultad);

  if (elemPalabra) elemPalabra.textContent = juego.palabraEnmascarada();
  if (elemVidas) elemVidas.textContent = String(juego.vidas());
  if (elemEstado) elemEstado.textContent = "";
  if (elemPuntaje) elemPuntaje.textContent = "";
  if (elemPalabraRevelada) elemPalabraRevelada.textContent = "";
  ocultarPantallaDificultad();
  if (btnReiniciar) btnReiniciar.style.display = "none";
  if (inputLetra) {
    inputLetra.disabled = false;
    inputLetra.value = "";
    inputLetra.focus();
  }
  if (pantallaJuego) pantallaJuego.style.display = "block";
}

if (btnIniciar) {
  btnIniciar.addEventListener("click", iniciarJuego);
}

if (btnReiniciar) {
  btnReiniciar.addEventListener("click", iniciarJuego);
}

// Al presionar Enter en la caja de texto, se envía la letra a la lógica
if (inputLetra) {
  inputLetra.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputLetra.value.trim() !== "") {
      if (juego) {
        juego.adivinar(inputLetra.value);
        if (elemPalabra) elemPalabra.textContent = juego.palabraEnmascarada();
        if (elemVidas) elemVidas.textContent = String(juego.vidas());
        if (juego.estado() !== "JUGANDO") {
          if (elemEstado) {
            elemEstado.textContent =
              juego.estado() === "PERDIDO" ? "PERDISTE" : "GANASTE";
          }
          if (elemPuntaje) {
            elemPuntaje.textContent = `Puntaje: ${juego.puntaje()}`;
          }
          if (juego.estado() === "PERDIDO" && elemPalabraRevelada) {
            elemPalabraRevelada.textContent = juego.palabraReal();
          }
          mostrarPantallaDificultad();
          if (btnReiniciar) btnReiniciar.style.display = "inline";
          inputLetra.disabled = true;
        }
      }
      inputLetra.value = "";
    }
  });
}