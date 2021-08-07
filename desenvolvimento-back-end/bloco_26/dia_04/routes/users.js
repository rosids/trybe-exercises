const express = require('express');

const router = express.Router();

router.put('/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

module.exports = router;
