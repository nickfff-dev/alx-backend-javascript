import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const path = process.argv.length > 2 ? process.argv[2] : '';
      const data = await readDatabase(path);
      const testResponse = [];
      testResponse.push('This is the list of our students');
      Object.entries(data).sort((a, b) => {
        if (a[0].toLowerCase() < b[0].toLowerCase()) {
          return -1;
        }
        if (a[0].toLowerCase() > b[0].toLowerCase()) {
          return 1;
        }
        return 0;
      }).forEach(([field, students]) => {
        testResponse.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });

      res.status(200).send(testResponse.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(path);
      if (data[major]) {
        return res.status(200).send(`List: ${data[major].sort().join(', ')}`);
      }
      return res.status(500).send('Cannot load the database');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
module.exports = StudentsController;
