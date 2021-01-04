const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

const separator = (acc, curr) => acc.concat(curr.split(''));
const sumA = (acc, letter) => (letter === 'A' || letter === 'a') ? acc + 1 : acc;

function containsA() {
  const name = names.reduce(separator, []);
  return name.reduce(sumA, 0);
}

assert.deepEqual(containsA(), 20);