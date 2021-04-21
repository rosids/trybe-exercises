# Exercício 10
SELECT m.id, m.title, m.director, m.`year`, m.length_minutes FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;

# Exercício 11
SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes FROM Pixar.Movies AS m1, Pixar.Movies AS m2
WHERE m1.director = m2.director AND m1.title <> m2.title;

# Exercício 12
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Theater;
SELECT m.title FROM Pixar.Movies AS m WHERE m.id IN (SELECT movie_id FROM Pixar.BoxOffice WHERE international_sales >= 500000000) AND m.length_minutes > 110;

SELECT m.title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b ON b.movie_id = m.id
WHERE b.international_sales >= 500000000 and m.length_minutes > 110;