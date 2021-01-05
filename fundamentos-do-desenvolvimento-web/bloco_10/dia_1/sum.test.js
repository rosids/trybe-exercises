const { expect } = require('@jest/globals');
const sum = require('./sum');

describe('Parte 1 do exercício', () => {
  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Testa se a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect(() => sum(4,'5')).toThrow();
  });

  it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});