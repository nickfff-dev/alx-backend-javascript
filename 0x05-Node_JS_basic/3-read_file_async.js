// eslint-disable-next-line no-unused-vars
const fs = require('fs').promises;

/**
 * Counts the number of students in each field from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} A promise that resolves when the operation is complete.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data, err) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
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

          resolve(true);
        }
      });
  });
}

module.exports = countStudents;
