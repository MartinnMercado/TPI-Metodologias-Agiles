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
      .split('')
      .map((letra) => (this.letrasAdivinadas.has(letra) ? letra : '_'))
      .join(' ');
  }

  // Devuelve la cantidad de vidas disponibles
  vidas(): number {
    return this.vidasRestantes;
  }

  // Registra la letra: si acierta la revela, si no pertenece descuenta una vida
  adivinar(letra: string): void {
    const letraNormalizada = letra.toUpperCase();
    this.letrasAdivinadas.add(letraNormalizada);

    if (!this.palabra.includes(letraNormalizada)) {
      this.vidasRestantes--;
    }
  }
}