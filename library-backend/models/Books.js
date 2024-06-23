const express = require('express');
const router = express.Router();

// Sample book data (for demonstration)
const bookData = [
  { bookName: 'Harry Potter', availability: 'Not Available', days: 6 },
  { bookName: 'Hatchet', availability: 'Not Available', days: 7 },
  { bookName: 'Lord of the Rings', availability: 'Available', days: 0 },
  { bookName: 'The Phantom Tollbooth', availability: 'Not Available', days: 4 },
  { bookName: 'The City of Ember', availability: 'Available', days: 0 },
  // Add more books as needed
];

// Route to handle book search
router.get('/search', (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).send('Query parameter "query" is required');
  }

  const filteredBooks = bookData.filter((book) =>
    book.bookName.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredBooks);
});

module.exports = router;
