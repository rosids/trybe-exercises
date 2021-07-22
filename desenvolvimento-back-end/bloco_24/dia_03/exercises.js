// Exercício 01
db.movies.find({
  category: {
    $all: ['action', 'adventure'],
  },
});

// Exercício 02
db.movies.find({
  category: {
    $all: ['action'],
  },
  imdbRating: { $gt: 7 },
});