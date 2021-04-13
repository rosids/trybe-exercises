# Exercício 1
SELECT * FROM PecasFornecedores.Pecas WHERE name LIKE 'GR%';

# Exercício 2
SELECT * FROM PecasFornecedores.Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;

# Exercício 3
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos WHERE Fornecedor LIKE '%N%';

# Exercício  4
SELECT * FROM PecasFornecedores.Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC;

# Exercício 5
SELECT COUNT(*) AS 'Número de Fornecedores com a letra F' FROM PecasFornecedores.Fornecedores WHERE code LIKE '%F%';

# Exercício 6
SELECT * FROM PecasFornecedores.Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco;

# Exercício 7
SELECT COUNT(*) FROM PecasFornecedores.Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';