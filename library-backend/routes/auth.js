const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../models/Teacher');
const { Student, Book } = require('./db');
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ where: { teacherName: username } });
    if (teacher && await bcrypt.compare(password, teacher.password)) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

// Route to fetch registered students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to fetch total number of books and availability
router.get('/books', async (req, res) => {
  try {
    const totalBooks = await Book.count();
    const availableBooks = await Book.count({ where: { availability: 'Available' } });
    res.json({ totalBooks, availableBooks });
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
