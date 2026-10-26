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

  // Devuelve el estado actual de la partida ('JUGANDO', 'GANADO', 'PERDIDO')
  estado(): string {
    if (this.vidasRestantes === 0) {
      return 'PERDIDO';
    }
    if (!this.palabraEnmascarada().includes('_')) {
      return 'GANADO';
    }
    return 'JUGANDO';
  }

  // Registra la letra: ignora repetidas, si acierta revela y si falla descuenta una vida
  adivinar(letra: string): void {
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