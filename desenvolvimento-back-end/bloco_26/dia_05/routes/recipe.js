const express = require('express');
const router = express.Router();
const middleware = require('../middlewares');

router.delete('/:id', middleware.recipe.deleteById);

router.put('/:id/ingredients', [
  middleware.recipe.verifyId,
  middleware.recipe.deleteIngredients,
  middleware.recipe.addIngredients,
]);

router.put('/:id', middleware.recipe.updateById);

module.exports = router;