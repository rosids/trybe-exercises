const MovieService = require('../services/movieService');

const getAll = async (_req, res) => {
  const movies = await MovieService
    .getAll();

  res.status(200).json(movies);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400)
      .send('Dados inválidos');
  }

  res.status(201)
    .send('Filme criado com sucesso!');
};

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await MovieService.findById(id);
  if(!result) return res.status(404).json({
    error: {
      code: 'not_found',
      message: 'Filme não encontrado',
    },
  });

  res.status(200).json(result)
}

const remove = async(req, res) => {
  const { id } = req.params;
  const removedMovie = await MovieService.remove(id);
  if(!removedMovie) return res.status(400).send('O filme não foi removido.');
  res.status(200).json(removedMovie);
}

module.exports = {
  getAll,
  create,
  findById,
  remove,
};