const fs = require('fs');

// Reads a CSV database file asynchronously.
const countStudents = (path) => new Promise((resolve, reject) => {
  // 1. Read the file asynchronously using utf-8 encoding
  fs.readFile(path, 'utf-8', (err, data) => {
    // Reject with exact error message if reading fails
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    // 2. Clean lines and ignore empty rows
    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    // Early resolve if there are no student records
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      resolve();
      return;
    }

    // 3. Skip header and group students by field (CS / SWE)
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

    // 4. Calculate total count and log total number of students
    const totalStudents = Object.values(students).reduce(
      (acc, curr) => acc + curr.length,
      0,
    );

    console.log(`Number of students: ${totalStudents}`);

    // 5. Log student names for each field
    Object.entries(students).forEach(([field, names]) => {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    });

    // Resolve promise successfully
    resolve();
  });
});

module.exports = countStudents;
