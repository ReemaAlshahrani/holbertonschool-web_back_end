const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2];

/**
 * Reads a CSV database file asynchronously and formats student info.
 * @param {string} path - Path to CSV database file.
 * @returns {Promise<string>}
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
    return;
  }

  // 1. Read file asynchronously using utf-8 encoding
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

    // 3. Skip header line and group students by field (CS / SWE)
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

    // 4. Format total count and field details into text output
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

// Root endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Students list endpoint /students
app.get('/students', (req, res) => {
  const headerText = 'This is the list of our students\n';

  // 5. Fetch student data and construct complete response
  countStudents(DB_FILE)
    .then((data) => {
      res.send(`${headerText}${data}`);
    })
    .catch((err) => {
      res.send(`${headerText}${err.message}`);
    });
});

// Listen on port 1245
app.listen(PORT);

module.exports = app;
