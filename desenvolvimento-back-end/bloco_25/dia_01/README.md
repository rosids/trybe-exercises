## Agora a prática:
Para esta etapa, utilizaremos um dataset que contém três coleções: `clientes`, `produtos` e `vendas`. Utilize os comandos abaixo para importar essas coleções para o banco `erp`:
  1. Faça o download dos arquivos `json`, clicando com o botão direito e escolhando a opção "Salvar como":
      - [clientes](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/clientes-b41ac10693375ca85847468d9071f788.json)
      - [produtos](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/produtos-0a039404ac00200fe4a948986caf26c2.json)
      - [vendas](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/aggregation-framework/part-1/vendas-3e516ade3d00b07e1163e9be4e81bf37.json)
  2. Faça a importação para sua instância do MongoDB:
      ```bash
        mongoimport --db erp <caminho_do_arquivo_clientes.json>
        mongoimport --db erp <caminho_do_arquivo_produtos.json>
        mongoimport --db erp <caminho_do_arquivo_vendas.json>
      ```
  3. Conecte-se à sua instância e confira o número de documentos em cada coleção:
      ```js
        use erp;
        db.clientes.count(); // 499
        db.produtos.count(); // 499
        db.vendas.count(); // 4900
      ```
Com o dataset importado, é hora de colocar a mão na massa!

> O MongoDb possui diversas ferramentas como, por exemplo, `mongo`, `mongosh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as *queries*, o importante é realizá-las.
## Exercícios
01. Utilizando o estágio `$match`, escreva uma agregação para retornar somente os clientes do sexo `"MASCULINO"`.
02. Utilizando o estágio `$match`, escreva uma agregação para retornar somente os clientes do sexo `"FEMININO"` e com data de nascimento entre os anos de `1995` e `2005`.
03. Utilizando o estágio `$match`, escreva uma agregação para retornar somente os clientes do sexo `"FEMININO"` e com data de nascimento entre os anos de `1995` e `2005`, limitando a quantidade de documentos retornados em `5`.
04. Conte quantos clientes do estado `SC` existem na coleção. Retorne um documento em que o campo `_id` contenha a UF e outro campo com o total.
05. Agrupe os clientes por `sexo`. Retorne o total de clientes de cada sexo no campo `total`.
06. Agrupe os clientes por `sexo` e `uf`. Retorne o total de clientes de cada sexo no campo `total`.
07. Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
    ```js
    {
      "estado": "SP",
      "sexo": "MASCULINO",
      "total": 100
    }
    ```
08. Descubra quais são os `5` clientes que gastaram o maior valor.
09. Descubra quais são os `10` clientes que gastaram o maior valor no ano de `2019`.
10. Descubra quantos clientes compraram mais de `5` vezes. Retorne um documento que contenha somente o campo `clientes` com o total de clientes.
    - Dica: O operador [$count](https://docs.mongodb.com/manual/reference/operator/aggregation/count/#pipe._S_count) pode simplificar sua query .
11. Descubra quantos clientes compraram menos de **três** vezes entre os meses de `Janeiro de 2020` e `Março de 2020`.
12. Descubra quais as **três** `uf` s que mais compraram no ano de `2020`. Retorne os documentos no seguinte formato:
    ```js
    {
      "totalVendas": 10,
      "uf": "SP"
    }
    ```
13. Encontre qual foi o total de vendas e a média de vendas de cada `uf` no ano de `2019`. Ordene os resultados pelo nome da `uf`. Retorne os documentos no seguinte formato:
    ```js
     {
      "_id": "MG",
      "mediaVendas": 9407.129225352113,
      "totalVendas": 142
     }
    ```
