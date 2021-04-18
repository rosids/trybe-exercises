#Exercício 8
SELECT * FROM Pixar.BoxOffice WHERE domestic_sales > 400000000;
UPDATE Pixar.BoxOffice SET rating = 9.0 WHERE movie_id IN (6, 10);

#Exercício 9
SELECT * FROM Pixar.BoxOffice WHERE international_sales < 300000000 AND domestic_sales > 200000000;
UPDATE Pixar.BoxOffice SET rating = 6.0 WHERE movie_id IN (3, 7, 8);

SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
#Exercício 10
SELECT * FROM Pixar.Movies WHERE length_minutes < 100;
DELETE FROM Pixar.BoxOffice WHERE movie_id IN (1, 6, 7, 8);
DELETE FROM Pixar.Movies WHERE id IN (1, 6, 7, 8);