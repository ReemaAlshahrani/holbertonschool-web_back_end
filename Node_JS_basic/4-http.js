const http = require('http');

const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(PORT);

// Export the server application
module.exports = app;
