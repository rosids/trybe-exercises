const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const movies = await moviesCollection
    .find()
    .toArray();

  return movies.map(({ _id, ...movieData }) => ({
    id: _id,
    ...movieData,
  }));
};

const create = async ({ title, directedBy, releaseYear }) => {
  const moviesCollection = await connection()
    .then((db) => db.collection('movies'));

  const { insertedId: id } = await moviesCollection
    .insertOne({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const findById = async (id) => {
  if(!ObjectId.isValid(id)) return null;
  const conn = await connection();
  const result = await conn.collection('movies').findOne(ObjectId(id));
  return result;
}

const remove = async(id) => {
  if(!ObjectId.isValid(id)) return null;
  const movie = await findById(id);
  if(!movie) return null;
  const conn = await connection();
  await conn.collection('movies').deleteOne({_id: ObjectId(id)});
  return movie;
}

module.exports = {
  create,
  getAll,
  findById,
  remove,
};