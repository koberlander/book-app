const Joi = require('joi');
const express = require('express');
const app = express()

app.use(express.json())

const books = [
   {
      "id":    1,
      "title": "Business"
   },

   {
      "id":    2,
      "title": "History"
   },
   {
      "id":    3,
      "title": "Computers"
   },
   {
      "id":    4,
      "title": "Science"
   },
   {
      "id":    5,
      "title": "Fiction"
   },
   {
      "id":    6,
      "title": "Travel"
   }
]

app.get('/', (req, res) => {
  res.send(books)
})

app.get('/api/books', (req, res) => {
  res.send(books)
})

app.post('/api/books', (req, res) => {
  const schema = {
    genre: Joi.string().min(3)
  }

  const result = Joi.validate(req.body, schema)

  if(result.error){
    res.status(400).send(res.error.details[0].message)
    return
  }

  const book = {
    genre: req.body.genre
  }
  books.push(book)
  res.send(book)
})

app.put('/api/books/:id', (req, res) => {
  // Find the book
  // If no book, return 404

  // Validate
  // If invalid, return 400 - Bad request

  // Update the book
  // Return the updated book
})



app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === req.params.id)

  if (!book) res.status(404).send('Book with that ID not found.')

  res.send(book)
})

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
