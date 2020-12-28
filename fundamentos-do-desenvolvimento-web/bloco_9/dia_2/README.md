1. Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins! Como? Vamos fazer juntos!
    * Primeiro, veja o [manual da API do site icanhazdadjoke.com](https://icanhazdadjoke.com/api). Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa API:
      * Visite o [site](https://icanhazdadjoke.com/), e perceba que ele devolve uma página HTML com uma piada aleatória.
      * Em seguida, no terminal, vamos fazer a requisição: ``` curl -H "Accept: text/html" "https://icanhazdadjoke.com/"```. Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.
      * Para a próxima requisição, vamos usar o comando: ```curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"```. Veja que agora recebemos apenas a piada aleatória em formato texto.
      * Por fim, faça a requisição: ```curl -H "Accept: application/json" "https://icanhazdadjoke.com/"```. Agora a API retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave _Accept:_ no header, definido por _-H_ no comando, o serviço nos retorna uma resposta diferente.
    * Utilize o HTML e o js a seguir como base:
      ~~~html
      <!DOCTYPE html>
      <html>
        <head>
          <title>Best jokes ever</title>
        <script src="apiScript.js" ></script>
        </head>
        <body>
          <h1>Get ready for a great joke!</h1>
          <h2 id="jokeContainer"></h2>
        </body>
      </html>
      ~~~

      ~~~js
      const API_URL = 'https://icanhazdadjoke.com/';

      const fetchJoke = () => {
        // Adicionar lógica aqui!
      };

      window.onload = () => fetchJoke();
      ~~~
2. Agora, um passo para trás: vamos fazer, passo a passo, uma Promise . Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
    * Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
4. Quando a Promise for rejeitada, imprima, via _console.log_, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.