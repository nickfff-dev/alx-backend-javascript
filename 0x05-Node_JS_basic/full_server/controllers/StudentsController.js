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
    } catch (err) {
      res.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const path = process.argv.length > 2 ? process.argv[2] : '';
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const data = await readDatabase(path);
      if (data[major]) {
        res.status(200).send(`List: ${data[major].join(', ')}`);
      }
    } catch (err) {
      res.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }
}
export default StudentsController;
module.exports = StudentsController;
