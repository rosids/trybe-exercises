const joi = require('joi');

module.exports = joi
  .object({
    id: joi.string().required(),
    name: joi.string().required(),
  })
  .messages({
    'any.required': 'mandatory {#label} field',
  });
