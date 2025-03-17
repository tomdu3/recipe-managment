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
      // Check if the `id` in params is a string or number
      let id = req.params.id;
  
      // Convert number to string if necessary
      if (!isNaN(id)) {
        id = String(id);
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

  module.exports = {
    getAllRecipes,
    getRecipeById,
  };