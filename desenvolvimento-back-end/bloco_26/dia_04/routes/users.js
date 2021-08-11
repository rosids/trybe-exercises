const express = require('express');
const middlewares = require('../middlewares');

const router = express.Router();

router.put('/:name/:age', middlewares.auth, (req, res) => {
  const { name, age } = req.params;

  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

module.exports = router;
