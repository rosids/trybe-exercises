db.movies.updateOne(
  {
    title: "Batman",
  },
  {
    $push: {
      category: {
        $each: ["villain", "comic-based"],
      },
    },
  },
);
