// Nesse teste irá aparecer no console 1 - test
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

// Acertei 1/3 da questão rs, apareceu '1 - beforeEach', 1 - test, 1 - afterEach

// Neste teste irá aparecer no console 2 - beforeEach, 2 - test e 2 - afterEach. 
describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
// Esse acertei, pois rodei os testes separadamente

// Quando rodei os testes juntos o resultado foi diferente: 1 - beforeEach, 1 - test, 1 - afterEach, 1 - beforeEach,  2 - beforeEach, 2 - test, 2 - afterEach e 1 - afterEach