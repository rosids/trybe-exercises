const joi = require('joi');

module.exports = joi
  .object({
    email: joi.string().required(),
    password: joi.string().required(),
    firstName: joi.string().required(),
    phone: joi.string().required(),
  })
  .messages({
    'any.required': 'missing fields',
  });
