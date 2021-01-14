#### Exercícios React
1. Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
    - ⚠️ Substitua o nome-app pelo que você desejar para seu app ⚠️
2. Crie uma lista de tarefas simples seguindo os passos abaixo:
    - insira a função a seguir acima do seu App:
      ~~~jsx
      const task = (value) => {
        return (
          <li>{value}</li>
        );
      }
      ~~~
    - agora, chame a função dentro do seu componente `App` (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`.
    - por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App.
3. Acesse [este link](https://www.freecodecamp.org/learn/front-end-libraries/react/) e faça cada um dos exercícios em ordem, sendo o último o "Create a Component with Composition".