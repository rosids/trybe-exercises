# Exercício 1
USE sakila;
CREATE VIEW film_with_categories AS
SELECT f.title,
  fc.category_id,
  c.`name`
FROM sakila.film_category AS fc
INNER JOIN sakila.category AS c ON c.category_id = fc.category_id
INNER JOIN sakila.film AS f ON f.film_id = fc.film_id
ORDER BY f.title;

# Exercício 2
CREATE VIEW film_info AS
SELECT fa.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) AS actor,
  f.title
FROM sakila.film_actor AS fa
INNER JOIN sakila.actor AS a ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id
ORDER BY `actor`;

# Exercício 3
CREATE VIEW address_info AS
SELECT a.address_id,
  a.address,
  a.district,
  c.city_id,
  c.city
FROM sakila.address AS a
INNER JOIN sakila.city AS c ON c.city_id = a.city_id
ORDER BY c.city;

# Exercício 4
CREATE VIEW movies_languages AS
SELECT f.title,
  l.language_id,
  l.`name`
FROM sakila.film AS f
INNER JOIN sakila.`language` AS l ON l.language_id = f.language_id;
