# Exercício 1
USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_insert
  BEFORE INSERT ON movies
  FOR EACH ROW
BEGIN
  SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_movies_log_insert
  AFTER INSERT ON movies
  FOR EACH ROW
BEGIN
  INSERT INTO movies_logs(movie_id, `action`, log_date) VALUES (NEW.movie_id, 'INSERT', DATE(NOW()));
END $$
DELIMITER ;

# Exercício 2
USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_update
  BEFORE UPDATE ON movies
  FOR EACH ROW
BEGIN
  SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
  INSERT INTO movies_logs(movie_id, `action`, log_date) VALUES (NEW.movie_id, 'UPDATE', DATE(NOW()));
END $$
DELIMITER ;

# Exercício 3
USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_delete
  AFTER DELETE ON movies
  FOR EACH ROW
BEGIN
  INSERT INTO movies_logs(movie_id, `action`, log_date) VALUES (OLD.movie_id, 'DELETE', DATE(NOW()));
END $$
DELIMITER ;