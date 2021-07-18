const rescue = require('express-rescue');
const { getPosts } = require('../../utils/fsPosts');

module.exports = rescue(async (_req, res) => {
  const posts = await getPosts();
  return res.status(200).json(posts);
});