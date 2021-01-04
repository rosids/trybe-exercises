let array = [2, 3, 6, 7, 10, 1];

function bigger(array) {
  let bigger = 0;
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index]
    }
  }
  return bigger;
};

function indexOfGreatest (array) {
  let numbers = bigger(array);
  for(let index = 0; index < array.length; index += 1) {
    if(numbers == array[index]){
      return index;
    }
  }
}

console.log(indexOfGreatest(array));