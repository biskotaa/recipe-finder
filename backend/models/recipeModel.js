const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a recipe name!']
    },
    ingredients: [{
        type: String,
        required: [true, 'Please add recipe ingredients!']
    }],
    instructions: {
        type: String,
        required: [true, 'Please add recipe instructions!']
    }

})

module.exports = mongoose.model('Recipe', recipeSchema);