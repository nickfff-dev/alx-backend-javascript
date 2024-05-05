const fs = require('fs').promises;

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    if (typeof path !== 'string') {
      reject(new Error('Cannot load the database'));
    }
    if (path === '') {
      reject(new Error('Cannot load the database'));
    }
    if (path) {
      fs.readFile(path, 'utf8').then((data, error) => {
        if (error) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const lines = data.split('\n');
          const students = lines.filter((line, index) => line.trim() !== '' && index !== 0);
          const fields = {};
          students.forEach((student) => {
            const [firstname, lastname, age, field] = student.split(',');
            if (!fields[field]) {
              fields[field] = [];
            }
            if (lastname === undefined || age === undefined) {
              reject(new Error('Cannot load the database'));
            }
            fields[field].push(firstname);
          });
          resolve(fields);
        }
      });
    }
  });
}

module.exports = { readDatabase };
