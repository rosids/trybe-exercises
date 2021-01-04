let numero = 20;

let divisor = 0;
for(let atual = 2; atual < numero; atual++) {
  if (numero % atual == 0) {
    divisor += 1;
  }
}

if(divisor == 0) {
  console.log(`${numero} é primo`);
} else {
  console.log(`${numero} não é primo`)
}
