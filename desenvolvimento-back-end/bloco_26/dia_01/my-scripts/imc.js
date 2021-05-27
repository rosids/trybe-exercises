const readline = require('readline-sync');

function classificacaoImc(imc) {
  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza)');
    return;
  }

  if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal');
    return;
  }

  if (imc >= 25 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
    return;
  }

  if (imc >= 30 && imc <= 34.9) {
    console.log('Obesidade grau I');
    return;
  }

  if (imc >= 35 && imc <= 39.9) {
    console.log('Obesidade grau II');
    return;
  }

  console.log('Obesidade graus III e IV');
  return '';
}

function calculaImc() {
  const peso = readline.questionFloat('Qual seu peso? (em kg) ');
  const altura = readline.questionFloat('Qual sua altura? (em metros) ');

  const imc = (peso / altura ** 2).toFixed(2);

  console.log(`Seu IMC é ${imc}`);

  const classificacao = classificacaoImc(imc);

  console.log(classificacao);
}

calculaImc();
