const error = {
  invalidData: 400,
  notFound: 404,
};

module.exports = (err, _req, res, _next) => {
  const statusCode = error[err.error.code];

  res.status(statusCode).json(err);
};