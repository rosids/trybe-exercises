# Exercício 1
USE hr;
ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40) DEFAULT NULL;

# Exercício 2
ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25) DEFAULT NULL;

# Exercício 3
ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40) DEFAULT NULL;