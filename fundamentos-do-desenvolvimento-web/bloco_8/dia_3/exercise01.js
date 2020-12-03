const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// fonte utilizada para realizar a atividade
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function flatten() {
  return arrays.reduce((arr, actual) => arr.concat(actual));
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);