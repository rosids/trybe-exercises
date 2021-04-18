# Exercício 1
SELECT MAX(SALARY) AS 'MAIOR SALÁRIO' FROM hr.employees;

# Exercício 2
SELECT MAX(SALARY) - MIN(SALARY) FROM hr.employees;

# Exercício 3
SELECT JOB_ID, AVG(SALARY) AS 'avg_salary' FROM hr.employees GROUP BY JOB_ID ORDER BY `avg_salary` DESC;

# Exercício 4
SELECT SUM(SALARY) FROM hr.employees;

# Exercício 5
SELECT MAX(SALARY) AS 'Maior Salário', MIN(SALARY) AS 'Menor Salário', SUM(SALARY) AS 'Total Salários', ROUND(AVG(SALARY), 2) AS 'Média Salarial' FROM hr.employees;

# Exercício 6
SELECT JOB_ID, COUNT(*) FROM hr.employees WHERE JOB_ID = 'IT_PROG';

# Exercício 7
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID;

# Exercício 8
SELECT JOB_ID, SUM(SALARY) FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID = 'IT_PROG';

# Exercício 9
SELECT JOB_ID, AVG(SALARY) AS 'avg_salary' FROM hr.employees GROUP BY JOB_ID HAVING JOB_ID NOT IN ('IT_PROG') ORDER BY `avg_salary` DESC;

# Exercício 10
SELECT DEPARTMENT_ID, AVG(SALARY), COUNT(*) FROM hr.employees GROUP BY DEPARTMENT_ID HAVING COUNT(*) > 10;

# Exercício 11
SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777') WHERE PHONE_NUMBER LIKE '515%';

# Exercício 12
SELECT * FROM hr.employees WHERE LENGTH(FIRST_NAME) >= 8;

# Exercício 13
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;

# Exercício 14
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;

# Exercício 15
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;

# Exercício 16
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM hr.employees;

# Exercício 17
SELECT LAST_NAME HIRE_DATE FROM hr.employees WHERE DATE(HIRE_DATE) LIKE '1987-07-%';

# Exercício 18
SELECT FIRST_NAME, LAST_NAME, DATEDIFF(CURRENT_DATE(), HIRE_DATE) FROM hr.employees;