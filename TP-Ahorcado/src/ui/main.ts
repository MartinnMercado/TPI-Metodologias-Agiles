import { Ahorcado } from '../domain/Ahorcado';

// Lee la palabra desde el parámetro URL (?word=...) o usa "GATO" por defecto (seam de test)
function obtenerPalabra(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get('word') || 'GATO';
}

const btnIniciar = document.getElementById('btn-iniciar') as HTMLButtonElement;
const pantallaJuego = document.getElementById('pantalla-juego') as HTMLElement;
const elemPalabra = document.getElementById('word') as HTMLElement;
const elemVidas = document.getElementById('lives') as HTMLElement;

if (btnIniciar) {
  btnIniciar.addEventListener('click', () => {
    const palabra = obtenerPalabra();
    const juego = new Ahorcado(palabra);

    if (elemPalabra) {
      elemPalabra.textContent = juego.palabraEnmascarada();
    }
    if (elemVidas) {
      elemVidas.textContent = String(juego.vidas());
    }
    if (pantallaJuego) {
      pantallaJuego.style.display = 'block';
    }
  });
}
