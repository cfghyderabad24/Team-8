const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../models/Teacher');
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

module.exports = router;
