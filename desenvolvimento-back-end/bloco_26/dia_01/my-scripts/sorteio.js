const readline = require('readline-sync');

function mensagem(numeroUsuario, numeroSorteado) {
  if (numeroUsuario === numeroSorteado) {
    return console.log('Parabéns, número correto');
  }
  return console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}.`);
}

function game() {
  const numeroUsuario = readline.questionInt('Digite um número entre 0 e 10: ');

  const numeroSorteado = Math.round((Math.random() * 10));

  mensagem(numeroUsuario, numeroSorteado);

  const jogarNovamente = readline.question('Deseja jogar novamente? (S para sim e N para não): ');

  if (jogarNovamente.toLocaleLowerCase() !== 's') return console.log('Até a próxima!');

  game();
}

game();
