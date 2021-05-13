db.movies.updateOne(
  {
    title: "Batman",
  },
  {
    $pull: {
      category: "action",
    },
  },
);
