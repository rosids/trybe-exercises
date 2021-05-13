db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31"),
      },
      status: "EM SEPARACAO",
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 2.592e+8],
      },
    },
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1,
    },
  },
  {
    $group: {
      _id: null,
      dataEntregaMaxima: { $max: "$dataEntregaPrevista" },
      dataEntregaMinima: { $min: "$dataEntregaPrevista" },
    },
  },
  {
    $project: {
      _id: 0,
      diasDiferenca: {
        $ceil: {
          $abs: {
            $divide: [
              { $subtract: ["$dataEntregaMaxima", "$dataEntregaMinima"] }, 86400000,
            ],
          },
        },
      },
    },
  },
]);
