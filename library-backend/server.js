const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Your existing auth routes
const bookRoutes = require('./routes/books'); // New book search route
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Your existing auth routes
app.use('/api/books', bookRoutes); // New book search route

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
