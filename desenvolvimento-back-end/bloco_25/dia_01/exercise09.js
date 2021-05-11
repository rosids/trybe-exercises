db.vendas.aggregate([
  {
    $match: {
      status: {
        $in: ["ENTREGUE", "EM SEPARACAO"],
      },
      dataVenda: {
        $gte: ISODate("2019-01-01"),
        $lte: ISODate("2019-12-31"),
      },
    },
  },
  {
    $group: {
      _id: "clienteId",
      valorTotal: {
        $sum: "$valorTotal",
      },
    },
  },
  {
    $sort: {
      valorTotal: -1,
    },
  },
  {
    $limit: 10,
  },
]);
