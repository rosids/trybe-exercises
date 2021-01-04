const pyramid = (base) => {
  let lineIndex;
  let lineColumn;
  let lineInput = '';
  const symbol = '*';
  
  const midOfMatrix = (base + 1) / 2;
  let controlLeft = midOfMatrix;
  let controlRight = midOfMatrix;
  for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
    for (lineColumn = 1; lineColumn <= base; lineColumn += 1) {
      (lineColumn > controlRight && lineColumn < controlLeft) ? lineInput = lineInput + symbol : lineInput = lineInput + ' ';
    }
    
    console.log(lineInput);
    lineInput = '';
    controlRight -= 1;
    controlLeft += 1;
  };
  return '\n Pirâmide concluída';
}

console.log(pyramid(5));