const statusCode = {
  badRequest: 400,
  internalServerError: 500,
  unauthorized: 401,
};

module.exports = (err, _req, res, _next) => {
  if (err.isBoom) {
    const { statusCode, message } = err.output.payload;
    return res.status(statusCode).json({ message });
  }

  if (err.isJoi) {
    const { details, status } = err;
    const message = details.map(({ message: error }) => error);
    return res.status(statusCode[status]).json({ message });
  }

  console.log(err);
  const { internalServerError } = statusCode;
  res.status(internalServerError).json(err);
};
