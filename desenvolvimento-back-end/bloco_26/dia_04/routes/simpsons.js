const express = require('express');
const middlewareSimpsons = require('../middlewares/simpsons');
const router = express.Router();

router.get('/', middlewareSimpsons.getSimpsons);

module.exports = router;
