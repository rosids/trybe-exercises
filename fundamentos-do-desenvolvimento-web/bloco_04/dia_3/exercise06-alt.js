let primo = [2,3];
let numero = 20;

for(let atual = 4; atual < numero; atual+= 1) {
  let divisores = 0;
  for(let menorNumero = 2; menorNumero < atual; menorNumero += 1) {
    if (atual % menorNumero == 0) {
      divisores += 1;
    }
  }

  if (divisores == 0) {
    primo.push(atual);
  }

}

console.log(primo);
