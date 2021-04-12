# Exercício 1
SELECT 'This is SQL Exercise, Practice and Solution';

# Exercício 2
SELECT 1, 2, 3;

# Exercício 3
SELECT 10 + 15;

# Exercício 4
SELECT (20 * 2) + 4;

# Exercício 5
SELECT * FROM Scientists.Scientists;

# Exercício 6
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

# Exercício 7
SELECT Name FROM Scientists.Scientists ORDER BY Name;

# Exercício 8
SELECT Name FROM Scientists.Projects ORDER BY Name DESC;

# Exercício 9
SELECT CONCAT('O projeto', Name, ' precisou de ', Hours ', para ser concluído.') FROM Scientists.Projects;

# Exercício 10
SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

# Exercício 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

# Exercício 12
SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

# Exercício 13
SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

# Exercício 14
SELECT * FROM Scientists.Projects ORDER BY Hours LIMIT 5;

# Exercício 15
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') FROM Scientists.Scientsts;
