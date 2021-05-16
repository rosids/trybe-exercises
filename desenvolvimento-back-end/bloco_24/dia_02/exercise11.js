db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": "Christian Bale",
    },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
    $push: {
      "cast.$.actor": "Michael Caine",
    },
  },
);

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
    $push: {
      "cast.$.actor": "Heath Ledger",
    },
  },
);
