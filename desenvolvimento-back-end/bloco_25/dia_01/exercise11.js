db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-03-31"),
      },
    },
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      totalCompras: {
        $lt: 3,
      },
    },
  },
  {
    $count: "clientes",
  },
]);
