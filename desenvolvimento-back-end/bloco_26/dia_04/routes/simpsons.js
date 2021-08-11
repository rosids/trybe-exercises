const express = require('express');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/', middlewares.auth, middlewares.simpsons.getSimpsons);

router.get('/:id', middlewares.auth, middlewares.simpsons.getSimpsonsById);

router.post('/', middlewares.auth, middlewares.simpsons.createSimpson);

module.exports = router;
