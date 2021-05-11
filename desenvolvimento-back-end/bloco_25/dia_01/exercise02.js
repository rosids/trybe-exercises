db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31"),
      },
    },
  },
]);
