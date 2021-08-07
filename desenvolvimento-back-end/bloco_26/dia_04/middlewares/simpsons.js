const rescue = require('express-rescue');
const boom = require('@hapi/boom');

const { getSimpsons: readSimpsons } = require('../utils/fsSimpsons');

const getSimpsons = rescue(async (_req, res) => {
  const simpsons = await readSimpsons();

  res.status(200).json(simpsons);
});

const getSimpsonsById = rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await readSimpsons();

  const findId = simpsons.find((simpson) => simpson.id === id);

  if (!findId) throw boom.notFound('simpson not found');

  res.status(200).json(findId);
});

module.exports = {
  getSimpsons,
  getSimpsonsById,
};
