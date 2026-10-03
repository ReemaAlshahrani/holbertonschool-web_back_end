const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv[2];

// Helper function to read and format student data asynchronously
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // 1. Read file asynchronously
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // 2. Clean lines and ignore empty rows
    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length <= 1) {
      resolve('Number of students: 0');
      return;
    }

    // 3. Skip header and group students by field
    const studentLines = lines.slice(1);
    const students = {};

    studentLines.forEach((line) => {
      const fields = line.split(',');
      if (fields.length >= 4) {
        const firstName = fields[0].trim();
        const field = fields[3].trim();

        if (firstName && field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        }
      }
    });

    // 4. Format output lines
    const totalStudents = Object.values(students).reduce(
      (acc, curr) => acc + curr.length,
      0,
    );

    const output = [`Number of students: ${totalStudents}`];

    Object.entries(students).forEach(([field, names]) => {
      output.push(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    });

    resolve(output.join('\n'));
  });
});

// Create HTTP server and set routing
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    const headerText = 'This is the list of our students\n';

    // 5. Fetch student data and send response
    countStudents(DB_FILE)
      .then((data) => {
        res.end(`${headerText}${data}`);
      })
      .catch((err) => {
        res.end(`${headerText}${err.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Listen on port 1245
app.listen(PORT);

module.exports = app;
