const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.filter(animal => animal.age === age);

      return (animal.length !== 0) ? resolve(animal) : reject('Nenhum animal com essa idade foi encontrado!');
    }, 100);
  })
);

const getAnimalByAge = async (age) => await findAnimalByAge(age);

// ---------------------

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      await expect(getAnimalByAge(2)).resolves.toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await expect(getAnimalByAge(10)).rejects.toBe('Nenhum animal com essa idade foi encontrado!');
    });
  });
});