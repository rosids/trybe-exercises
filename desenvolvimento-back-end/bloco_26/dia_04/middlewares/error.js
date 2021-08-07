module.exports = (err, _req, res, _next) => {
  if (err.isBoom) {
    const { statusCode, message } = err.output.payload;
    return res.status(statusCode).json({ message });
  }

  console.log(err);
  res.status(500).json(err);
};
