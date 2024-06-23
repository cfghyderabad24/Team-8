const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const authRoutes = require('./routes/auth');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;
app.options('*', cors()); // Enable CORS preflight for all routes
app.use(cors({
    origin: 'http://your-react-native-app.com', // Replace with your app's URL
    methods: ['GET', 'POST'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));
  
// Routes
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

async function initializeDatabase() {
  try {
    await db.authenticate();
    console.log('Database connected...');
    await db.sync();
    console.log('Database synced');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

initializeDatabase().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

