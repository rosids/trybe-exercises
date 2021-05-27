const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

const numeroScriptEscolhido = readline.keyInSelect(scripts.map(({ name }) => name),
  'Qual script deseja? ');

const scriptEscolhido = scripts[numeroScriptEscolhido];

require(scriptEscolhido.script);
