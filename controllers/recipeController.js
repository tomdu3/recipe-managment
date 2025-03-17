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

  module.exports = {
    getAllRecipes
  };