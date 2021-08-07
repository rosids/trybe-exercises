const fs = require('fs/promises');
const path = require('path');

const simpsons = path.resolve(__dirname, '../database', './simpsons.json');

const getSimpsons = () =>
  fs.readFile(simpsons, 'utf-8').then((content) => JSON.parse(content));

const addSimpsons = async (newSimpsons) => {
  await fs.writeFile(simpsons, JSON.stringify(newSimpsons, null, 2));
};

module.exports = {
  getSimpsons,
  addSimpsons,
};
