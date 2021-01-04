let n = 5;

function sumOfNumbersTheRange(number) {
  let sum = 0;
  for(let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(sumOfNumbersTheRange(n));