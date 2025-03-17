const express = require('express');
const router = express.Router();
const {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    deleteRecipe,
    updateRecipe,
} = require('../controllers/recipeController');


// CRUD Routes
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.delete('/:id', deleteRecipe);
router.put('/:id', updateRecipe);

module.exports = router;