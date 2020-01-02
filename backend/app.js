
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World...boop')
})

app.get('/api/books', (req, res) => {
  res.send([1, 2, 3, 'boop'])
})

app.get('/api/books/:id', (req, res) => {
  res.send(req.params.id)
})

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
