import readDatabase from '../utils';

class StudentsController {
  // Return list of all students sorted by field alphabetically
  static getAllStudents(request, response) {
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((students) => {
        const responseParts = ['This is the list of our students'];
        const fields = Object.keys(students).sort((a, b) => (
          a.toLowerCase().localeCompare(b.toLowerCase())
        ));

        fields.forEach((field) => {
          const names = students[field];
          responseParts.push(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
          );
        });

        response.status(200).send(responseParts.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  // Return list of students for a specific major (CS or SWE)
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((students) => {
        const names = students[major] || [];
        response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
