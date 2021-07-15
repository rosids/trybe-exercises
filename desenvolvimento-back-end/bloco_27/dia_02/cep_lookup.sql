CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(9) NOT NULL PRIMARY KEY,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL
);

INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES
('40430530', 'Rua Duarte da Costa', 'Vila Rui Barbosa', 'Salvador', 'BA');