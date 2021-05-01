// Exercício 1
db.bios.find({_id: 8});

// Exercício 2
db.bios.find({_id: 8}, {name: 1});

// Exercício 3
db.bios.find(
  {_id: 8}, 
  {
    name: 1, 
    birth: 1, 
    _id: 0
  }
  );

// Exercício 4
db.bios.find(
  {"name.first": "John"}
).pretty();

// Exercício 5
db.bios.find().limit(3).pretty();

// Exercício 6
db.bios.find().limit(2).skip(5);

// Exercício 7
// mongoimport --db=books --collection=books --file=books.json
db.books.count();

// Exercício 8
db.books.count({status: "PUBLISH"});

// Exercício 9
db.books.find(
  {},
  {
    title: 1,
    isbn: 1,
    pageCount: 1,
    _id: 0
  }
).limit(3);

// Exercício 10
db.books.find(
  {
    status: "MEAP"
  },
  {
    title: 1,
    authors: 1,
    status: 1
  }
).limit(10).skip(5);