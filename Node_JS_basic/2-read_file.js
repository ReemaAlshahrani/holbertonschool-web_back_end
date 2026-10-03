const fs = require('fs');

// Reads a CSV database file synchronously and logs student statistics.

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  let fileContent;
  try {
    fileContent = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = fileContent
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length <= 1) {
    console.log('Number of students: 0');
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

  const totalStudents = Object.values(students).reduce(
    (acc, curr) => acc + curr.length,
    0,
  );

  console.log(`Number of students: ${totalStudents}`);

  Object.entries(students).forEach(([field, names]) => {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
    );
  });
};

module.exports = countStudents;
