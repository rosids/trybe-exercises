# Exercício 1
CREATE FULLTEXT INDEX category_name_index ON sakila.category(`name`);

# Custo com INDEX = 0.35
SELECT * FROM sakila.category WHERE MATCH(name) AGAINST('action');

DROP INDEX category_name_index ON sakila.category;

# Custo sem INDEX = 1.85
SELECT * FROM sakila.category WHERE name LIKE '%action%';

# Exercício 2
CREATE INDEX address_postal_code ON sakila.address(postal_code);

# Custo com INDEX = 0.35
SELECT * FROM sakila.address WHERE postal_code = '36693';

DROP INDEX address_postal_code ON sakila.address;

# Custo sem INDEX = 61.80
SELECT * FROM sakila.address WHERE postal_code = '36693';