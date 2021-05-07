## Agora a prática!
> Para os exercícios a seguir, utilizaremos um dataset que contém dados de Super-Heróis. Faça o download do arquivo JSON [aqui](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/mongodb/superheroes-957c961ea234d06d7cfdae73c87d47a6.json). Após fazer o download do arquivo, importe-o para o MongoDB através da ferramenta `mongoimport`.

### Exercícios
> O MongoDb possui diversas ferramentas como, por exemplo, `mongo`, `mongosh`, `Compass` e outras ferramentas de terceiros. Você pode utilizar o que achar melhor para executar as *queries*, o importante é realizá-las.
01. Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.
02. Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
03. Retorne o total de super-heróis menores que 1.80m.
04. Retorne o total de super-heróis com até 1.80m.
05. Selecione um super-herói com 2.00m ou mais de altura.
06. Retorne o total de super-heróis com 2.00m ou mais.
07. Selecione todos os super-heróis que têm olhos verdes.
08. Retorne o total de super-heróis com olhos azuis.
09. Utilizando o operador `$in`, selecione todos os super-heróis com cabelos pretos ou carecas (`"No Hair"`).
10. Retorne o total de super-heróis com cabelos pretos ou carecas (`"No Hair"`).
11. Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
12. Utilizando o operador `$not`, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
13. Selecione todos os super-heróis que **não** sejam **humanos** ou que **não** sejam maiores do que **1.80m**.
14. Selecione todos os super-heróis com **1.80m** ou **2.00m** de altura e que **sejam publicados** pela **Marvel Comics**.
15. Selecione todos os super-heróis que **pesem** entre **80kg** e **100kg**, sejam **Humanos** ou **Mutantes** e **não sejam publicados** pela **DC Comics**.
16. Retorne o total de documentos que **não** contêm o campo **race**.
17. Retorne o total de documentos que **contêm** o campo **hairColor**.
18. Remova **apenas um** documento publicado pela **Sony Pictures**.
19. Remova todos os documentos **publicados** pelo **George Lucas**.
