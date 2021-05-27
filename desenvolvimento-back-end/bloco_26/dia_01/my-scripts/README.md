## Agora a prática:
> Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o `npm init` chamado `my-scripts`. Realize os exercícios dentro desse pacote.

## Exercícios
01. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
    01. A fórmula para calcular o IMC é `peso / altura ^ 2`.
    02. Comece criando um novo pacote node com `npm init` e respondendo às perguntas do `npm`.
    03. Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para `peso` e `altura`.
    04. Armazene o script no arquivo `imc.js`.
02. Agora, permita que o script seja executado através do comando `npm run imc`
    01. O novo script criado deve conter o comando que chama o `node` para executar o arquivo `imc.js`.
03. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
    01. Você já utilizou o pacote `readline-sync` para esse fim. Que tal utilizar o mesmo pacote?
    02. Substitua os valores fixos de `peso` e `altura` por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
04. Agora temos um problema: `peso` não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
    01. O pacote `readline-sync` possui uma função específica para tratar esses casos. Consulte a [documentação](https://www.npmjs.com/package/readline-sync#utility_methods) do pacote e encontre o método adequado para realizar input de **floats**.
    02. Encontrou a função? Show! Agora utilize-a para solicitar o input de `peso`.
05. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
    - Considere a seguinte tabela para classificar a situação do IMC:
    ```
    | IMC                                       | Situação                  |
    | ----------------------------------------- | ------------------------- |
    | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
    | Entre 18,5 e 24,9                         | Peso normal               |
    | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
    | Entre 30,0 e 34,9                         | Obesidade grau I          |
    | Entre 35,0 e 39,9                         | Obesidade grau II         |
    | 40,0 e acima                              | Obesidade graus III e IV  |
    ```
06. Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida
    01. A fórmula para calcular velocidade média é `distância / tempo`.
    02. Armazene o script no arquivo velocidade.js.
    03. Agora, permita que o script seja executado através do comando `npm run velocidade`. Para isso, crie a chave `velocidade` dentro do objeto `scripts` no `package.json`.
    04. Utilize o `readline-sync` para solicitar os dados à pessoa.
    05. Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.
07. Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
    01. O script deve ser executado através do comando `npm run sorteio`.
    02. Utilize o `readline-sync` para realizar input de dados.
    03. Armazene o script em sorteio.js.
    04. O número gerado deve ser um inteiro entre 0 e 10.
    05. Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
    06. Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
    07. Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script.
08. Crie um arquivo index.js que pergunta qual script deve ser executado
    01. O script deve ser acionado através do comando `npm start`.
    02. Utilize o `readline-sync` para realizar o input de dados
    03. Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
    04. Ao digitar o número de um script e pressionar *enter*, o script deve ser executado.
    05. Você pode utilizar o `require` para executar o script em questão.
    
## Bônus
01. Crie um script que realize o fatorial de um número n .
    > O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
    01. Armazene o script no arquivo `fatorial.js`.
    02. Utilize o `readline-sync` para realizar o input de dados.
    03. O script deve ser acionado através do comando `npm run fatorial`
    04. Adicione o script ao menu criado no exercício 5.
    05. Adicione validações para garantir que o valor informado seja um inteiro maior que 0.
02. Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.
    > A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.
    01. Armazene o script no arquivo `fibonacci.js`.
    02. Utilize o `readline-sync` para realizar o input de dados.
    03. O script deve ser acionado através do comando `npm run fibonacci`
    04. Adicione o script ao menu criado no exercício 5.
    05. Não imprima o valor `0`, uma vez que ele não está incluso na sequência;
    06. Quando `n = 10`, exatamente 10 elementos devem ser exibidos;
    07. Adicione validações para garantir que o valor informado é um inteiro maior que 0.
