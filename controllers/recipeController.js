const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

// Get all recipes
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if `id` is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid recipe ID' });
        }

        // Find the recipe by ID
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new recipe
const createRecipe = async (req, res) => {
    try {
        const { name, ingredients, instructions } = req.body;
        const recipe = new Recipe({ name, ingredients, instructions });
        await recipe.save();
        res.status(201).json({
            message: 'Recipe created successfully',
            recipe
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a recipe by ID
const deleteRecipe = async (req, res) => {
    try {
        // Check if `id` is a valid ObjectId
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid recipe ID' });
        }

        // Find and delete the recipe by ID
        const recipe = await Recipe.findByIdAndDelete(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({
            message: 'Recipe deleted successfully',
            recipe
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    deleteRecipe,
};