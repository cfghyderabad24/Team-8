const express = require('express');
const router = express.Router();
const { Op } = require('sequelize'); // Import Sequelize's Op operator
const Student = require('../models/Student'); // Adjust path as per your project structure

// Route to handle student search
router.get('/search', async (req, res) => {
  const { searchText } = req.query;

  try {
    // Perform search query using Sequelize
    const students = await Student.findAll({
      where: {
        studentName: {
          [Op.iLike]: `%${searchText}%`, // Case-insensitive search
        },
      },
    });

    res.json(students);
  } catch (error) {
    console.error('Error searching students:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
