const express = require('express');
const client = require('./database')
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/home', async (req, res) => {
    let result = await client.query(`SELECT COUNT(*) FROM STUDENT`)
    const students = result.rows[0].count
    result = await client.query(`SELECT COUNT(*) FROM BOOKS`)
    const books = result.rows[0].count
    result = await client.query(`SELECT COUNT(*) FROM books as b WHERE CURRENT_DATE > (select date_ from transactions as t where t.tid = b.last_tid)`)
    const avail_books = result.rows[0].count
  res.send({
    total_students: students,
    total_books: books,
    books_available: avail_books
  });
});

app.get('/api/books/available', async (req, res) => {
    const books = await client.query(`SELECT book_id, book_name FROM books as b WHERE CURRENT_DATE > (select date_ from transactions as t where t.tid = b.last_tid)`)
    res.json(books.rows);
  });

app.get('/api/student/:id', async (req, res) => {

    const result = await client.query(`SELECT books_read FROM student where student_id = ${req.params.id}`)
    res.json(result.rows[0]);
  });

app.get('/api/students/', async (req, res) => {
    const books = await client.query(`SELECT student_id, name FROM student`)
    res.json(books.rows);
  });

  
// A route to handle GET requests to /users
// app.get('/api/books/due', async (req, res) => {
//     const books = await client.query(`SELECT b.book_id, b.book_name FROM books as b WHERE DATE_PART('day', CURRENT_DATE - (select date_ from transactions as t where t.tid = b.last_tid)::DATE) > 7`)
//     res.json(books.rows);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
