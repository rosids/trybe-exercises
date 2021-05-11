db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-01-01"),
        $lte: ISODate("2020-12-31"),
      },
    },
  },
  {
    $lookup: {
      from: "clientes",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "cliente",
    },
  },
  { $unwind: "$cliente" },
  {
    $group: {
      _id: "$cliente.endereco.uf",
      totalVendas: {
        $sum: 1,
      },
    },
  },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      totalVendas: 1,
      uf: "$_id",
    },
  },
]);
