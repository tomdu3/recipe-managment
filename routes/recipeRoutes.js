const express = require('express');
const router = express.Router();

// CRUD Routes
router.get('/', (req, res) => {
    res.send('Get all recipes');
    }
);

module.exports = router;