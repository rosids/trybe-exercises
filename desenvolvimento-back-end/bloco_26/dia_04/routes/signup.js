const express = require('express');
const schemaSignup = require('../schema/signup');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', (req, res, next) => {
  const { email, password, firstName, phone } = req.body;

  const { error } = schemaSignup.validate({
    email,
    password,
    firstName,
    phone,
  });
  if (error) {
    const newError = { isJoi: true, status: 'unauthorized', ...error };
    return next(newError);
  }

  res.status(200).json({ token: generateToken() });
});

module.exports = router;
