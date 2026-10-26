import { describe, it, expect } from 'vitest';
import { Ahorcado } from '../src/domain/Ahorcado';

describe('Ahorcado - US-01 Iniciar partida', () => {
  it('la palabra enmascarada muestra un guion por cada letra (GATO)', () => {
    const juego = new Ahorcado('GATO');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
  });

  it('la palabra enmascarada muestra un guion por cada letra (PERRO)', () => {
    const juego = new Ahorcado('PERRO');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _ _');
  });

  it('el juego arranca con 6 vidas', () => {
    const juego = new Ahorcado('GATO');
    expect(juego.vidas()).toBe(6);
  });
});

describe('Ahorcado - US-07 / US-08 Adivinar letras', () => {
  it('al acertar una letra se revela en la palabra enmascarada', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('A');
    expect(juego.palabraEnmascarada()).toBe('_ A _ _');
    expect(juego.vidas()).toBe(6);
  });

  it('al arriesgar una letra que no pertenece se descuenta una vida', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('E');
    expect(juego.palabraEnmascarada()).toBe('_ _ _ _');
    expect(juego.vidas()).toBe(5);
  });

  it('arriesgar la misma letra errada no descuenta vidas adicionales', () => {
    const juego = new Ahorcado('GATO');
    juego.adivinar('E');
    juego.adivinar('E');
    expect(juego.vidas()).toBe(5);
  });
});

describe('Ahorcado - US-11 Finalizar partida', () => {
  it('el juego arranca en estado JUGANDO', () => {
    const juego = new Ahorcado('GATO');
    expect(juego.estado()).toBe('JUGANDO');
  });

  it('el juego pasa a estado PERDIDO al agotar las 6 vidas', () => {
    const juego = new Ahorcado('GATO');
    ['B', 'C', 'D', 'E', 'F', 'H'].forEach((letra) => juego.adivinar(letra));
    expect(juego.vidas()).toBe(0);
    expect(juego.estado()).toBe('PERDIDO');
  });

  it('el juego pasa a estado GANADO al adivinar todas las letras', () => {
    const juego = new Ahorcado('GATO');
    ['G', 'A', 'T', 'O'].forEach((letra) => juego.adivinar(letra));
    expect(juego.estado()).toBe('GANADO');
  });

  it('no se pueden ingresar letras una vez que el juego fue ganado', () => {
    const juego = new Ahorcado('GATO');
    ['G', 'A', 'T', 'O'].forEach((letra) => juego.adivinar(letra));
    juego.adivinar('Z');
    expect(juego.vidas()).toBe(6);
  });
});