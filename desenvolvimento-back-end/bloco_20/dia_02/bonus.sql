# Exercício 1
SELECT Code, Name FROM PiecesProviders.Providers ORDER BY Name DESC LIMIT 1;

# Exercício 2
SELECT Piece, Price FROM PieceProviders.Provides ORDER BY Price DESC LIMIT 5;

# Exercício 3
SELECT DISTINCT Provider, Price FROM PieceProviders.Provides ORDER BY Price DESC LIMIT 4 OFFSET 3;

# Exercício 4
SELECT CONCAT('A peça mais cara é a: ', Piece, ', provida pela empresa ', Provider, ' e custa ', Price, ' reais.') FROM PieceProviders.Provides ORDER BY Price DESC LIMIT 1;
