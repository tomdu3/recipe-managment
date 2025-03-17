const express = require('express');
const router = express.Router();
const {
    getAllRecipes
} = require('../controllers/recipeController');


// CRUD Routes
router.get('/', getAllRecipes);

module.exports = router;