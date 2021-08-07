const rescue = require('express-rescue');
const { getSimpsons: readSimpsons } = require('../utils/fsSimpsons');

const getSimpsons = rescue(async (_req, res) => {
  const simpsons = await readSimpsons();

  res.status(200).json(simpsons);
});

module.exports = {
  getSimpsons,
};
