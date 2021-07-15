const Cep = require('../models/Cep');

const cepIsValid = (cep) => /\d{5}-?\d{3}/.test(cep);

const findByCep = async (cep) => {
  if (!cepIsValid(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  const result = await Cep.findByCep(cep);

  if (!result) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return result;
};

module.exports = {
  findByCep,
};