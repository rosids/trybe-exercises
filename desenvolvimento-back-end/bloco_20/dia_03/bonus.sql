# Exercício 1
SELECT * FROM Scientists.Scientists WHERE Name LIKE '%e%';

# Exercício 2
SELECT Name FROM Scientists.Projects WHERE Code LIKE 'A%' ORDER BY Name;

# Exercício 3
SELECT Code, Name FROM Scientists.Projects WHERE Code LIKE '%3%' ORDER BY Name;

# Exercício 4
SELECT Scientist FROM Scientists.AssignedTo WHERE Project IN ('AeH3', 'Ast3', 'Che1');

# Exercício 5
SELECT * FROM Scientists.Projects WHERE Hours > 500;

# Exercício 6
SELECT * FROM Scientists.Projects WHERE Hours BETWEEN 250 AND 800;

# Exercício 7
SELECT Name, Code FROM Scientists.Projects WHERE Name NOT LIKE 'A%';

# Exercício 8
SELECT Name FROM Scientists.Projects WHERE Code LIKE '%H%';