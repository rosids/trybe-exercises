const pyramid = (base) => {
  const middle = (base + 1) / 2;
  let controlLeft = middle;
  let controlRight = middle;
  const symbol = '*';
  
  for (let line = 1; line <= middle; line += 1) {
    let outputLine = '';
    for (let col = 1; col <= base; col += 1) {
      (col == controlLeft || col == controlRight || line == middle) ? outputLine += symbol : outputLine += ' ';
    }
    
    controlLeft -= 1;
    controlRight += 1;
    console.log(outputLine);
  }
  
  return 'Pirâmide concluída!';
}

console.log(pyramid(7));