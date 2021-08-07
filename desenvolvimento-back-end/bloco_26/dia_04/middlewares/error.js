const statusCode = {
  badRequest: 400,
  internalServerError: 500,
};
module.exports = (err, _req, res, _next) => {
  if (err.isBoom) {
    const { statusCode, message } = err.output.payload;
    return res.status(statusCode).json({ message });
  }

  const { badRequest, internalServerError } = statusCode;
  if (err.isJoi) {
    const { details } = err;
    const message = details.map(({ message: error }) => error);
    return res.status(badRequest).json({ message });
  }

  console.log(err);
  res.status(internalServerError).json(err);
};
