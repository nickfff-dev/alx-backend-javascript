const fs = require('fs');
/**
 * Counts the number of students in each field from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    // Filter out empty lines and the header line
    const students = lines.filter((line, index) => line.trim() !== '' && index !== 0);
    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      if (lastname === undefined || age === undefined) {
        throw new Error();
      }
      fields[field].push(firstname);
    });

    console.log(`Number of students: ${students.length}`);
    Object.keys(fields).forEach((field) => {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
