module.exports = (err, _req, res, _next) => {
  res.stautus(500).json(err);
};
