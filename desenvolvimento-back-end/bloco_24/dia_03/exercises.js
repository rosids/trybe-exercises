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

// Exercíco 5
db.movies.updateOne(
  { title: 'Home Alone' },
  {
    $push: {
      ratings: {
        $each: [200, 99, 65],
      },
    },
  },
  { upsert: true },
);

// Exercício 6
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gt: 103 }
    },
  },
  { _id: 0, title: 1, ratings: 1},
);

// Exercício 7
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 100, $lte: 105 },
    },
  },
  { _id: 0, title: 1, ratings: 1 },
);

// Exercício 8
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] },
    },
  },
  { _id: 0, title: 1, ratings: 1 },
);