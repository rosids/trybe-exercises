const express = require('express');
const middlewares = require('../middlewares/');

const router = express.Router();

router.post('/', middlewares.auth, (req, res) => {
  const { name, age } = req.body;

  if (!age || age <= 17)
    return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!` });
});

module.exports = router;
