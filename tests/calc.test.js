import { describe, it, expect } from 'vitest';
import { suma, resta, mult, div } from '../src/utils/calc.js';

describe('Funciones de cálculo', () => {
  it('suma(5, 3) debe retornar 8', () => {
    expect(suma(5, 3)).toBe(8);
  });
  it('resta(5, 3) debe retornar 2', () => {
    expect(resta(5, 3)).toBe(2);
  });
  it('mult(5, 3) debe retornar 15', () => {
    expect(mult(5, 3)).toBe(15);
  });
  it('div(6, 3) debe retornar 2', () => {
    expect(div(6, 3)).toBe(2);
  });
  it('div(5, 0) debe lanzar un error de división por cero', () => {
    expect(() => div(5, 0)).toThrow('División por cero no permitida');
  });
  it('suma(0, 0) debe retornar 0', () => {
    expect(suma(0, 0)).toBe(0);
  });
  it('resta(0, 0) debe retornar 0', () => {
    expect(resta(0, 0)).toBe(0);
  });
  it('mult(0, 0) debe retornar 0', () => {
    expect(mult(0, 0)).toBe(0);
  });
  it('div(0, 1) debe retornar 0', () => {
    expect(div(0, 1)).toBe(0);
  });
  it('div(1, 0) debe lanzar un error de división por cero', () => {
    expect(() => div(1, 0)).toThrow('División por cero no permitida');
  });
  it('suma(1e10, 1e10) debe retornar 2e10', () => {
    expect(suma(1e10, 1e10)).toBe(2e10);
  });
  it('resta(1e10, 1e10) debe retornar 0', () => {
    expect(resta(1e10, 1e10)).toBe(0);
  });
});
