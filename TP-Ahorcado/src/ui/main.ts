import { Ahorcado } from "../domain/Ahorcado";

// ─── Partes del ahorcado en orden de aparición según errores ──────────────────
const PARTES_AHORCADO = [
  "cabeza",
  "cuerpo",
  "brazo-izq",
  "brazo-der",
  "pierna-izq",
  "pierna-der",
];

// ─── Obtener parámetros desde URL (seam para tests de aceptación) ─────────────
function obtenerPalabra(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("word") || "GATO";
}

function obtenerDificultadURL(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get("dificultad");
}

// ─── Elementos del DOM ────────────────────────────────────────────────────────
const btnIniciar = document.getElementById("btn-iniciar") as HTMLButtonElement;
const btnReiniciar = document.getElementById("btn-reiniciar") as HTMLButtonElement;
const pantallaJuego = document.getElementById("pantalla-juego") as HTMLElement;
const pantallaInicio = document.getElementById("pantalla-inicio") as HTMLElement;
const elemPalabra = document.getElementById("word") as HTMLElement;
const elemCorazones = document.getElementById("corazones") as HTMLElement; // visual
const elemVidasNum = document.getElementById("lives") as HTMLElement;       // testid numérico
const elemEstado = document.getElementById("game-status") as HTMLElement;
const inputLetra = document.getElementById("input-letra") as HTMLInputElement;
const elemPuntaje = document.getElementById("score") as HTMLElement;
const elemPalabraRevelada = document.getElementById("palabra-revelada") as HTMLElement;
const elemLetrasUsadas = document.getElementById("letras-usadas") as HTMLElement;
const elemDificultad = document.getElementById("dificultad-label") as HTMLElement;
const selectDificultad = document.getElementById("select-dificultad") as HTMLSelectElement;

let juego: Ahorcado;
let vidasMaximas: number;

// ─── Actualiza los corazones según vidas restantes (van desapareciendo) ─────
function actualizarCorazones(vidasActuales: number): void {
  // Actualiza el span numérico (para los tests de aceptación)
  if (elemVidasNum) elemVidasNum.textContent = String(vidasActuales);

  // Actualiza los corazones visuales (solo quedan los vivos)
  if (!elemCorazones) return;
  elemCorazones.innerHTML = "";
  for (let i = 0; i < vidasActuales; i++) {
    const span = document.createElement("span");
    span.className = "corazon";
    span.textContent = "\u2665";
    span.setAttribute("aria-hidden", "true");
    elemCorazones.appendChild(span);
  }
}

// ─── Muestra las partes del ahorcado según los errores cometidos ─────────────
function actualizarAhorcado(errores: number): void {
  const partesAMostrar =
    vidasMaximas > 0
      ? Math.min(
          PARTES_AHORCADO.length,
          Math.round((errores / vidasMaximas) * PARTES_AHORCADO.length)
        )
      : errores;

  PARTES_AHORCADO.forEach((id, idx) => {
    const parte = document.getElementById(id) as SVGElement | null;
    if (!parte) return;
    parte.style.display = idx < partesAMostrar ? "" : "none";
  });
}

// ─── Actualiza las letras usadas en pantalla ─────────────────────────────────
function actualizarLetrasUsadas(): void {
  if (!elemLetrasUsadas) return;
  const letras = juego.letrasUsadas();
  elemLetrasUsadas.textContent = letras.join(", ");
}

// ─── Muestra el menú inicial y oculta la pizarra de juego ───────────────────
function volverAlMenuInicial(): void {
  if (pantallaJuego) pantallaJuego.style.display = "none";
  if (pantallaInicio) pantallaInicio.style.display = "flex";
}

// ─── Inicia una nueva partida ─────────────────────────────────────────────────
function iniciarJuego(): void {
  const palabra = obtenerPalabra();
  const dificultadURL = obtenerDificultadURL();
  const dificultad = dificultadURL ?? selectDificultad?.value ?? "normal";

  juego = new Ahorcado(palabra, dificultad);
  vidasMaximas = juego.vidas();

  // Actualizar UI
  if (elemPalabra) elemPalabra.textContent = juego.palabraEnmascarada();
  if (elemEstado) {
    elemEstado.textContent = "";
    elemEstado.className = "chalk-text chalk-text--estado";
  }
  if (elemPuntaje) elemPuntaje.textContent = "";
  if (elemPalabraRevelada) elemPalabraRevelada.textContent = "";
  if (elemLetrasUsadas) elemLetrasUsadas.textContent = "";
  if (elemDificultad) {
    const nombres: Record<string, string> = {
      facil: "Fácil",
      normal: "Normal",
      dificil: "Difícil",
    };
    elemDificultad.textContent = `Dificultad: ${nombres[dificultad] ?? dificultad}`;
  }

  actualizarCorazones(vidasMaximas);
  actualizarAhorcado(0);

  if (btnReiniciar) btnReiniciar.style.display = "none";
  if (inputLetra) {
    inputLetra.disabled = false;
    inputLetra.value = "";
    inputLetra.focus();
  }

  // Mostrar pizarra, ocultar menú
  if (pantallaInicio) pantallaInicio.style.display = "none";
  if (pantallaJuego) pantallaJuego.style.display = "block";
}

// ─── Listeners ────────────────────────────────────────────────────────────────
if (btnIniciar) {
  btnIniciar.addEventListener("click", iniciarJuego);
}

if (btnReiniciar) {
  btnReiniciar.addEventListener("click", volverAlMenuInicial);
}

if (inputLetra) {
  inputLetra.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && inputLetra.value.trim() !== "") {
      if (juego) {
        const erroresAntes = vidasMaximas - juego.vidas();
        juego.adivinar(inputLetra.value);
        const erroresDespues = vidasMaximas - juego.vidas();

        if (elemPalabra) elemPalabra.textContent = juego.palabraEnmascarada();
        actualizarCorazones(juego.vidas());
        actualizarLetrasUsadas();

        // Animar nueva parte si hubo error
        if (erroresDespues > erroresAntes) {
          actualizarAhorcado(erroresDespues);
        }

        if (juego.estado() !== "JUGANDO") {
          if (elemEstado) {
            const gano = juego.estado() === "GANADO";
            elemEstado.textContent = gano ? "GANASTE" : "PERDISTE";
            elemEstado.className = `chalk-text chalk-text--estado ${
              gano ? "chalk-text--victoria" : "chalk-text--derrota"
            }`;
          }
          if (elemPuntaje) {
            elemPuntaje.textContent = `Puntaje: ${juego.puntaje()}`;
          }
          if (juego.estado() === "PERDIDO") {
            actualizarAhorcado(vidasMaximas); // asegura ahorcado completo
            if (elemPalabraRevelada) {
              elemPalabraRevelada.textContent = juego.palabraReal();
            }
          }
          if (btnReiniciar) btnReiniciar.style.display = "inline";
          if (inputLetra) inputLetra.disabled = true;
        }
      }
      inputLetra.value = "";
    }
  });
}
