import { describe, it, expect } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - US-01 Iniciar partida', () => {

  // Primer ejemplo: palabra de 4 letras
  it('la palabra enmascarada muestra un guion por cada letra (GATO)', () => {
    const juego = new Ahorcado('GATO');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
  });

  // Segundo ejemplo: palabra de 5 letras, confirma que funciona para cualquier longitud
  it('la palabra enmascarada muestra un guion por cada letra (PERRO)', () => {
    const juego = new Ahorcado('PERRO');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _ _');
  });

});