const numbersObject = numbers => {
  let num = {};

  for (let index = 0; index < numbers.length; index += 1) {
    let value = numbers[index];
    (num[value] === undefined) ? num[value] = 1 : num[value] = num[value] + 1;  
  }
  
  return num;  
}

const moreRepeated = numbers => {
  const obj = numbersObject(numbers)
  let repeatCounter = 0;
  let numberCounter = 0;

  for (let key in obj) {
    if (repeatCounter < obj[key]) {
      repeatCounter = obj[key];
      numberCounter = key;
    }
  }

  return numberCounter;
}

console.log(moreRepeated([2, 3, 2, 5, 8, 2, 3]));