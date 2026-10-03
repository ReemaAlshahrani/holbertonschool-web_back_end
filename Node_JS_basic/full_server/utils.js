import fs from 'fs';

/**
 * Reads CSV database asynchronously and returns an object of student names per field.
 * @param {string} filePath - Path to CSV database file.
 * @returns {Promise<Object>}
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length <= 1) {
      resolve({});
      return;
    }

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

    resolve(students);
  });
});

export default readDatabase;
