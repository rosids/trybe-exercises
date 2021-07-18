const express = require('express');
const rescue = require('express-rescue');
const router = express.Router();
const { getUsers } = require('../utils/fsUsers');

router.get('/:name', rescue(async (req, res) => {
  const { name } = req.params;
  const users = await getUsers();

  const user = users.find(({ user }) => user === name);
  if (!user) return res.status(404).send('user not found');

  res.status(200).send(user.comments);
}));

module.exports = router;