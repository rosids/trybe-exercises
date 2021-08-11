const express = require('express');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.auth, (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

module.exports = router;
