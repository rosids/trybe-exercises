const readline = require("readline-sync");

function calculaImc() {
  const peso = readline.questionFloat("Qual seu peso? (em kg) ");
  const altura = readline.questionFloat("Qual sua altura? (em metros) ");

  const imc = (peso / altura ** 2).toFixed(2);

  console.log(`Seu IMC é ${imc}`);
}

calculaImc();
