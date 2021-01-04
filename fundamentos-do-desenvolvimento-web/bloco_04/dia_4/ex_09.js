const biggestName = (array) => {
  let bigger = array[0];
  for (let index in array) {
    (array[index].length > bigger.length) ? bigger = array[index] : bigger;
  }
  return bigger;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));