# Exercício 1
SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON m.id = b.movie_id;

# Exercício 2
SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id WHERE b.international_sales > b.domestic_sales;

# Exercício 3
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;
SELECT m.title, b.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
ORDER BY b.rating DESC;

# Exercício 4
SELECT t.id AS 'theater_id', t.`name`, t.location, m.id AS 'movie_id', m.title, m.director, m.`year`, m.length_minutes FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY t.`name`;

# Exercício 5
SELECT t.id AS 'theater_id', t.`name`, t.location, m.id AS 'movie_id', m.title, m.director, m.`year`, m.length_minutes FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m ON m.theater_id = t.id
ORDER BY t.`name`;

# Exercício 6
SELECT title FROM Pixar.Movies WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);

SELECT m.title, b.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE b.rating > 7.5;

# Exercício 7
SELECT m.title, (SELECT rating FROM Pixar.BoxOffice  WHERE m.id = movie_id) AS rating FROM Pixar.Movies AS m WHERE m.`year` > 2009;

SELECT m.title, b.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE m.`year` > 2009;

# Exercício 8
SELECT t.`name`, t.location FROM Pixar.Theater AS t WHERE EXISTS (SELECT * FROM Pixar.Movies WHERE t.id = theater_id);

# Exercício 9
SELECT t.`name`, t.location FROM Pixar.Theater AS t WHERE NOT EXISTS (SELECT * FROM Pixar.Movies WHERE theater_id = t.id);