CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
) ENGINE = InnoDB;

CREATE TABLE estilomusical(
  estilo_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE album(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  artist_id INT NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  preco DECIMAL(5,2),
  estilo_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artista(artista_id),
  FOREIGN KEY (estilo_id) REFERENCES estilomusical(estilo_id)
) ENGINE = InnoDB;

CREATE TABLE cancao(
  cancao_id INT PRIMARY KEY AUTO_INCREMENT,
  duracao INT NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE = InnoDB;