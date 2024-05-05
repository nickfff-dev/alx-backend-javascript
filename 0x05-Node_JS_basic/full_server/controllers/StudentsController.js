const { readDatabase } = require('../utils');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(DB_FILE);
      const fullResponse = [];
      fullResponse.push('This is the list of our students');
      Object.keys(data).sort().forEach((field) => {
        fullResponse.push(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
      });
      res.status(200).send(fullResponse.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(DB_FILE);
      if (data[major]) {
        return res.status(200).send(`List: ${data[major].join(', ')}`);
      }
      return res.status(500).send('Cannot load the database');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
