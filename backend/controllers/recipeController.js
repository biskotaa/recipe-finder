const asyncHandler = require('express-async-handler');

const Recipe = require('../models/recipeModel')

const getRecipes = asyncHandler (async (req, res) => {
    const recipes = await Recipe.find()

    res.status(200).json(recipes)
});

const getRecipe = asyncHandler (async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)

    if (!recipe) {
        res.status(404)
        throw new Error('Recipe not found!')
    }

    res.status(200).json(recipe)
});

const setRecipe =asyncHandler( async (req, res) => {
    if (!req.body.name) {
        res.status(400);
        throw new Error('Please add a name field')
    }

    const recipe = await Recipe.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })

    res.status(200).json(recipe)
})

const updateRecipe = asyncHandler (async (req, res) => {

    const recipe = await Recipe.findById(req.params.id)

    if(!recipe){
        res.status(400)
        throw new Error('Recipe not found!')
    }

    const updateRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateRecipe)
})

const deleteRecipe = asyncHandler (async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)

    if(!recipe){
        res.status(400)
        throw new Error('Recipe not found!')
    }

    await Recipe.findByIdAndDelete(req.params.id);

    res.status(200).json({ id: req.params.id })
})

const filterRecipe = asyncHandler (async (req, res) => {
    const searchTerm = req.query.searchTerm;
    if (!searchTerm) {
        return res.status(400).json({ error: 'Please provide a search term' });
    }

    try {
        const recipes = await Recipe.find({
          $or: [
            { name: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search
            { ingredients: { $regex: searchTerm, $options: 'i' } },
            { instructions: { $regex: searchTerm, $options: 'i' } },
          ],
        });
    
        if (recipes.length === 0) {
          return res.status(404).json({ error: 'No recipes found' });
        }
    
        res.json(recipes);
      } 
      catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = {
    getRecipes,
    getRecipe,
    setRecipe,
    updateRecipe,
    deleteRecipe,
    filterRecipe
}