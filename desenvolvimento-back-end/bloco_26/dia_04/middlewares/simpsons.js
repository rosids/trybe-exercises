const rescue = require('express-rescue');
const boom = require('@hapi/boom');

const schemaSimpsons = require('../schema/simpsons');
const {
  getSimpsons: readSimpsons,
  addSimpsons,
} = require('../utils/fsSimpsons');

const getSimpsons = rescue(async (_req, res) => {
  const simpsons = await readSimpsons();

  res.status(200).json(simpsons);
});

const findById = (simpsons, id) => {
  return simpsons.find((simpson) => simpson.id === id);
};

const getSimpsonsById = rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await readSimpsons();

  const findId = findById(simpsons, id);

  if (!findId) throw boom.notFound('simpson not found');

  res.status(200).json(findId);
});

const createSimpson = rescue(async (req, res, next) => {
  const { id, name } = req.body;
  const { error } = schemaSimpsons.validate(
    { id, name },
    { abortEarly: false }
  );

  if (error) {
    const newError = { isJoi: true, status: 'badRequest', ...error };
    return next(newError);
  }

  const simpsons = await readSimpsons();
  const findId = findById(simpsons, id);
  if (findId) throw boom.conflict('id already exists');

  const newSimpson = [...simpsons, { id, name }];
  await addSimpsons(newSimpson);
  res.status(204).end();
});

module.exports = {
  getSimpsons,
  getSimpsonsById,
  createSimpson,
};
