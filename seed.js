const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Recipe = require('./models/Recipe');

dotenv.config();

const recipes = require('./models/fixtureRecipe.json');

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding');

    // Clear existing recipes
    await Recipe.deleteMany({});
    console.log('Cleared existing recipes');

    // Insert new recipes
    await Recipe.insertMany(recipes);
    console.log(`Seeded ${recipes.length} recipes`);

    // Close the connection
    mongoose.connection.close();
    console.log('Seeding complete');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedDB();