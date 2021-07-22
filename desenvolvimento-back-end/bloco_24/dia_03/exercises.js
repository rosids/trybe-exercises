// Exercício 01
db.movies.find({
  category: {
    $all: ['action', 'adventure'],
  },
});
