const fs = require('fs');

//Reads a CSV file synchronously and logs student statistics.
const countStudents = (path) => {
  let fileContent;

  // 1. Attempt to read the CSV file synchronously
  try {
    fileContent = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // 2. Split content into lines and ignore empty lines
  const lines = fileContent
    .split('\n')
    .filter((line) => line.trim().length > 0);

  if (lines.length <= 1) {
    console.log('Number of students: 0');
    return;
  }

  // 3. Remove header and group student names by field (CS / SWE)
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

  // 5. Log count and firstname list for each field
  Object.entries(students).forEach(([field, names]) => {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
    );
  });
};

module.exports = countStudents;
