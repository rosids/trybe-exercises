db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            {
              $subtract: [
                "$$NOW", "$dataNascimento",
              ],
            },
            {
              $multiply: [86400000, 365],
            },
          ],
        },
      },
    },
  },
]).pretty();
