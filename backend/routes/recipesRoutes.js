const express = require('express');
const router = express.Router();
const { getRecipes, setRecipe, updateRecipe, deleteRecipe, filterRecipe, getRecipe } = require('../controllers/recipeController')

router.route('/filter').get(filterRecipe)

router.route('/').get(getRecipes).post(setRecipe)

router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe)


module.exports = router