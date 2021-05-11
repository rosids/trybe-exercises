db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, { $multiply: [86400000, 365] }],
        },
      },
    },
  },
  {
    $lookup: {
      from: "vendas",
      localField: "clienteId",
      foreignField: "clienteId",
      as: "compras",
    },
  },
  { $match: { "compras.dataVenda": { $gte: ISODate("2019-06-01"), $lte: ISODate("2020-03-31") } } },
  { $addFields: { totalCompras: { $size: "$compras" } } },
  { $sort: { totalCompras: -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  {
    $addFields: {
      "compras.valorComDesconto": {
        $subtract: ["$compras.valorTotal", { $multiply: ["$compras.valorTotal", 0.1] }],
      },
    },
  },
  {
    $group: {
      _id: "$endereco.uf",
      totalComprasEstado: { $sum: 1 },
    },
  },
  { $sort: { totalComprasEstado: -1 } },
  { $limit: 5 },
]).pretty();
