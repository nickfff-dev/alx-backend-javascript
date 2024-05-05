const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv');
      let response = 'This is the list of our students\n';
      Object.keys(data).sort().forEach((field) => {
        response += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
      });
      res.status(200).send(response);
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
      const data = await readDatabase('./database.csv');
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
