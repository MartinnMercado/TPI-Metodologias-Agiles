export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: Set<string>;
  private vidasRestantes: number;

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
    this.letrasAdivinadas = new Set();
    this.vidasRestantes = 6;
  }

  // Muestra las letras acertadas y guiones en las que faltan
  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((letra) => (this.letrasAdivinadas.has(letra) ? letra : "_"))
      .join(" ");
  }

  // Devuelve la cantidad de vidas disponibles
  vidas(): number {
    return this.vidasRestantes;
  }

  // Devuelve el estado actual de la partida ('JUGANDO', 'GANADO', 'PERDIDO')
  estado(): string {
    if (this.vidasRestantes === 0) {
      return "PERDIDO";
    }
    if (!this.palabraEnmascarada().includes("_")) {
      return "GANADO";
    }
    return "JUGANDO";
  }

  // Calcula el puntaje: vidas restantes * 100 si gano, 0 si no
  puntaje(): number {
    if (this.estado() === "GANADO") {
      return this.vidasRestantes * 100;
    }
    return 0;
  }

  // Registra la letra: no hace nada si ya termino, ignora repetidas, acierta o descuenta vida
  adivinar(letra: string): void {
    if (this.estado() !== "JUGANDO") {
      return;
    }

    const letraNormalizada = letra.toUpperCase();

    // Si la letra ya fue arriesgada previamente, no produce ningún efecto
    if (this.letrasAdivinadas.has(letraNormalizada)) {
      return;
    }

    this.letrasAdivinadas.add(letraNormalizada);

    if (!this.palabra.includes(letraNormalizada)) {
      this.vidasRestantes--;
    }
  }
}
