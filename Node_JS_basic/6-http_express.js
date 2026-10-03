const express = require('express');

const app = express();
const PORT = 1245;

// Root endpoint returning welcome message
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(PORT);

module.exports = app;
