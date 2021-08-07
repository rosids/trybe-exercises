const express = require('express');
const middlewareSimpsons = require('../middlewares/simpsons');
const router = express.Router();

router.get('/', middlewareSimpsons.getSimpsons);

router.get('/:id', middlewareSimpsons.getSimpsonsById);

router.post('/', middlewareSimpsons.createSimpson);

module.exports = router;
