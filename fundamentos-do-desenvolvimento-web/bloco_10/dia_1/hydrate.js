const checkNumber = number => Number.isInteger(number) === true;

const sumOfStringArrayNumbers = array => array.reduce((acc, string) => {
  let number = parseInt(string);
  let checkedNumber = checkNumber(number);
  return (checkedNumber) ? acc + number : acc;
}, 0);

const hydrate = (drink) => {
  const separator = ' ' || 'e';
  const splitString = drink.split(separator);
  const result = sumOfStringArrayNumbers(splitString);

  const plural = result === 1 ? 'copo' : 'copos';
  return `${result} ${plural} de água`
}

module.exports = hydrate;