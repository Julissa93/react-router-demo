const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const app = express();
const {db, Puppy, Kitten} = require('./db')
module.exports = app;

// Logging middleware
app.use(volleyball);

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

//get puppies
app.get('/puppies', async (req, res, next) => {
  try {
    const puppies = await Puppy.findAll()
    res.send(puppies)
  } catch(err) {
    next(err)
  }
})

//get kittens
app.get('/kittens', async (req, res, next) => {
  try {
    const kittens = await Kitten.findAll()
    res.send(kittens)
  } catch(err) {
    next(err)
  }
})

// This middleware will catch any URLs resembling a file extension
// for example: .js, .html, .css
// This allows for proper 404s instead of the wildcard '#<{(|' catching
// URLs that bypass express.static because the given file does not exist.
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(8080, () =>
  console.log(`

Listening on port 8080

http://localhost:8080/

`)
);
