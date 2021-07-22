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

// Exercício 3
db.movies.updateOne(
  { title: 'Batman'},
  {
    $push: {
      ratings: {
        $each: [85, 100, 102, 105],
      },
    },
  },
);

// Exercício 4
db.movies.updateOne(
  { title: 'Godzilla' },
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102],
      },
    },
  },
  { upsert: true },
);