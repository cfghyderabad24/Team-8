const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Your existing auth routes
const studentRoutes = require('./routes/students'); // New student search route
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Your existing auth routes
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Initialize and sync database (if needed)
async function initializeDatabase() {
  try {
    await db.authenticate();
    console.log('Database connected...');
    await db.sync(); // Sync your Sequelize models if necessary
    console.log('Database synced');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

initializeDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Internal server error');
});
