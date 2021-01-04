let array = [2, 4, 6, 7, 10, 0, -3];

function smaller(array) {
  let smaller = array[0];
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] < smaller) {
      smaller = array[index]
    }
  }
  return smaller;
};

function indexOfLowest (array) {
  let numbers = smaller(array);
  for(let index = 0; index < array.length; index += 1) {
    if(numbers == array[index]){
      return index;
    }
  }
}

console.log(indexOfLowest(array));