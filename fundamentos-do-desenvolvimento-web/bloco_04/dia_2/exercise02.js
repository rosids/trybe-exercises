let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index+= 1) {
  sum += numbers[index];
}

console.log(`A soma dos valores é: ${sum}`)
