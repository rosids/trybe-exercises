// Exercício 1
db.superheroes.find({}).limit(1).pretty();

// Exercício 2
db.superheroes.find({
  "aspects.height": { $lt: 180 }
});

// Exercício 3
db.superheroes.count({
  "aspects.height": { $lt: 180 }
});

// Exercício 4
db.superheroes.count({
  "aspects.height": { $lte: 180 }
});

// Exercício 5
db.superheroes.find({
  "aspects.height": { $gte: 200 }
}).limit(1);

// Exercício 6
db.superheroes.count({
  "aspects.height": { $gte: 200 }
});

// Exercício 7
db.superheroes.find({
  "aspects.eyeColor": "green"
});

// Exercício 8
db.superheroes.count({
  "aspects.eyeColor": { $eq: "blue" }
});

// Exercício 9
db.superheroes.find({
  "aspects.hairColor": { $in: ["black", "No Hair"] }
});

// Exercício 10
db.superheroes.count({
  "aspects.hairColor": {$in: ["black", "No Hair"]}
});

// Exercício 11
db.superheroes.count({
  "aspects.hairColor": { $nin: ["black", "No Hair"] }
});

// Exercício 12
db.superheroes.count({
  "aspects.height": { $not: { $gt: 180 } }
});

// Exercício 13
db.superheroes.find({
  $nor: [
    { race: "Human" },
    { "aspects.height": { $gt: 180 }  }
  ]
});

// Exercício 14
db.superheroes.find({
  $or: [
    { "aspects.height": 180  },
    { "aspects.height": 200  }
  ],
  publisher: "Marvel Comics"
});

// Exercício 15
db.superheroes.find({
  $and: [
    {
      "aspects.weigth": { $gte: 180, $lte: 100 } 
    },
    {
      $or: [
        { race: "Human" },
        { race: "Mutant" }
      ],
    },
    {
      publisher: { $ne: "DC Comics" }
    }
  ]
});

// Exercício 16
db.superheroes.count({
  race: { $exists: false }
});

// Exercício 17
db.superheroes.count({
  "aspects.hairColor": { $exists: true }
});

// Exercício 18
db.superheroes.deleteOne({
  publisher: "Sony Pictures"
});

// Exercício 19
db.superheroes.deleteMany({
  publisher: "George Lucas"
});
