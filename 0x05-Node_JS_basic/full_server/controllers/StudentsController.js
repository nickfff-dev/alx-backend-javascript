import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const path = process.argv.length > 2 ? process.argv[2] : '';
      const data = await readDatabase(path);
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
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(path);
      if (data[major]) {
        return res.status(200).send(`List: ${data[major].join(', ')}`);
      }
      return res.status(500).send('Cannot load the database');
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
export default StudentsController;
module.exports = StudentsController;
