import { describe, it, expect } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - US-01 Iniciar partida', () => {

  it('la palabra enmascarada muestra un guion por cada letra', () => {
    const juego = new Ahorcado('GATO');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
  });

});