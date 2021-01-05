const { encode, decode } = require('./encode-decode');


describe('Verifica as funções encode e decode', () => {
  it('Testa se a função encode e decode são definidas', () => {
    expect(encode).toBeDefined();
    expect(decode).toBeDefined();
  });

  it('Testa se o encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });

  it('Verifica se o retorno das funções encode e decode possuem a mesma quantidade de caracter do parâmetro', () => {
    expect(encode('casa').length).toEqual(4);
    expect(decode('c5sc5z').length).toEqual(6);
  });
});

describe('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente, na função encode', () => {
  it('converte apenas a vogal "a" no número 1', () => expect(encode('casa')).toEqual('c1s1'));

  it('converte apenas a vogal "e" no número 2', () => expect(encode('veste')).toEqual('v2st2'));

  it('converte apenas a vogal "i" no número 3', () => expect(encode('zizi')).toEqual('z3z3'));

  it('converte apenas a vogal "o" no número 4', () => expect(encode('olho')).toEqual('4lh4'));

  it('converte apenas a vogal "u" no número 5', () => expect(encode('cuscuz')).toEqual('c5sc5z'));
});

describe('Testa se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente, na função decode', () => {
  it('converte apenas o número 1 na vogal "a"', () => expect(decode('c1s1')).toEqual('casa'));

  it('converte apenas o número 2 na vogal "e"', () => expect(decode('v2st2')).toEqual('veste'));

  it('converte apenas o número 3 na vogal "i"', () => expect(decode('z3z3')).toEqual('zizi'));

  it('converte apenas o número 4 na vogal "o"', () => expect(decode('4lh4')).toEqual('olho'));
  
  it('converte apenas o número 5 na vogal "u"', () => expect(decode('c5sc5z')).toEqual('cuscuz'));
});