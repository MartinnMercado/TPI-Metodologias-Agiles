export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: Set<string>;

  constructor(palabra: string) {
    this.palabra = palabra.toUpperCase();
    this.letrasAdivinadas = new Set();
  }

  // Muestra las letras acertadas y guiones en las que faltan
  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((letra) => (this.letrasAdivinadas.has(letra) ? letra : "_"))
      .join(" ");
  }

  // Devuelve las vidas iniciales disponibles (6)
  vidas(): number {
    return 6;
  }

  // Registra la letra que arriesgó el jugador
  adivinar(letra: string): void {
    this.letrasAdivinadas.add(letra.toUpperCase());
  }
}
