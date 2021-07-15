const express = require('express');
const cepCotroller = require('../controllers/cepController');

const router = express.Router();

router.get('/:cep', cepCotroller.findByCep);

module.exports = router;