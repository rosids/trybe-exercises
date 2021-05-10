// Exercício 14
db.xmen.updateMany(
  {
    class: "unknown",
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $unset: {
      class: "",
    },
  },
);

// Exercício 15
db.xmen.updateMany(
  {},
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $rename: {
      name: "hero_name",
      true_name: "full_name"
    },
    $set: {
      power: 100,
    },
  },
);

// Exercício 16
db.xmen.updateMany(
  {
    class: { $in: ["omega", "gama"] },
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $max: {
      power: 500,
    },
  },
);

// Exercício 17
db.xmen.updateMany(
  {
    class: "gama",
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $min: {
      power: 300,
    },
  },
);

// Exercício 18
db.xmen.updateMany(
  {
    class: { $exists: false },
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $inc: {
      power: -100,
    },
  },
);

// Exercício 19
db.xmen.updateOne(
  {
    $or: [
      {
        occupation: "Senior Staff",
        power: { $gt: 100 },
      },
      {
        occupation: "Junior Staff",
        power: { $gt: 200 },
      },
    ],
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $set: {
      areas: ["Students Room"]
    },
  },
);

// Exercício 20
db.xmen.updateMany(
  {
    occupation: "Junior Staff",
    areas: { $exists: false },
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $set: {
      areas: ["Outside"],
    },
  },
);
