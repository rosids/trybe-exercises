const longestWord = phrase => {
  const words = phrase.split(' ');
  let bigger = '';
  
  for (const index in words) {
    const word = words[index];
    (word.length > bigger.length) ? bigger = word : bigger;
  }
  
  return bigger;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));