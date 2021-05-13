db.movies.updateOne(
  {
    title: "Batman",
  },
  {
    $pop: { category: -1 },
  },
);
