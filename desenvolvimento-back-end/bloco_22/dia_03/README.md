## Exercícios
### Agora a prática:
#### Desafios sobre `VIEW`
01. Crie uma view chamada `film_with_categories` utilizando as tabelas `category`, `film_category` e `film` do banco de dados `sakila`. Essa view deve exibir o `título` do filme, o `id` da categoria e o `nome` da categoria. Os resultados devem ser ordenados pelo `título` do filme.
02. Crie uma view chamada `film_info` utilizando as tabelas `actor`, `film_actor` e `film` do banco de dados `sakila`. Sua view deve exibir o `actor_id`, o nome completo do ator ou da atriz em uma coluna com o `ALIAS actor` e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
03. Crie uma view chamada `address_info` que faça uso das tabelas `address` e `city` do banco de dados `sakila`. Sua view deve exibir o `address_id`, o `address`, o `district`, o `city_id` e a `city`. Os resultados devem ser ordenados pelo nome das cidades.
04. Crie uma view chamada `movies_languages`, usando as tabelas `film` e language do banco de dados `sakila`. Sua view deve exibir o **tulo do filme**, o **id do idioma** e o **idioma do filme**.

#### Desafios sobre `INDEX`
01. Verifique o impacto de um `FULLTEXT INDEX` na tabela category (banco de dados `sakila`), adicionando-o na coluna `name`. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
	```sql
	-- Após ter criado o índice, mensure o custo com a seguinte query:
	SELECT *
	FROM sakila.category
	WHERE MATCH(name) AGAINST('action');

	-- Após ter excluído o índice, mensure o custo com a seguinte query:
	SELECT *
	FROM sakila.category
	WHERE name LIKE '%action%';
	```
02. Verifique o impacto de um `INDEX` na tabela `address` (banco de dados `sakila`) adicionando-o na coluna `postal_code`. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
	```sql
	-- Mensure o custo com a seguinte query:
	SELECT *
	FROM sakila.address
	WHERE postal_code = '36693';
	```
#### Desafios sobre `ALTER TABLE`
**Restaure o banco de dados HR abaixo antes de continuar, caso não o tenha restaurado em alguma lição anterior:**
> O banco de dados usado como base para os próximos exercícios pode ser restaurado através [deste arquivo SQL](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql).
##### Desafios:
01. Escreva uma query SQL para alterar o nome da coluna `street_address` para `address`, mantendo o mesmo tipo e tamanho de dados.
02. Escreva uma query SQL para alterar o nome da coluna `region_name` para `region`, mantendo o mesmo tipo e tamanho de dados.
03. Escreva uma query SQL para alterar o nome da coluna `country_name` para `country`, mantendo o mesmo tipo e tamanho de dados.
