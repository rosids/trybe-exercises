const connection = require('./connection');

const findByCep = async (cep) => {
  const [result] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep],
  );

  if (!result) return null;

  return result[0];
};

module.exports = {
  findByCep,
};