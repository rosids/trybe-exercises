const cepService = require('../services/cepServices');

const findByCep = async (req, res, next) => {
  const { cep } = req.params;
  const result = await cepService.findByCep(cep);

  if (result.error) return next(result);

  return res.json(result);
};

module.exports = {
  findByCep,
};