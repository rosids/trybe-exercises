const boom = require('@hapi/boom');

module.exports = (req, _res, next) => {
  const { authorization: token } = req.headers;

  if (!token || token.length !== 16) throw boom.unauthorized('Token inválido!');

  next();
};
