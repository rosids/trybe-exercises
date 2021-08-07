const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}!` });
});

module.exports = router;
