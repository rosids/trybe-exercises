const readline = require('readline-sync');

function calculaVelocidadeMedia() {
  const distancia = readline.questionInt('Qual a distancia? (metros) ');
  const tempo = readline.questionInt('Qual o tempo? (segundos) ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média é ${velocidadeMedia} m/s`);
}

calculaVelocidadeMedia();
