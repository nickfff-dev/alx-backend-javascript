const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      if (process.argv.length !== 3) {
        res.end('Cannot load the database\n');
      }
      const data = await fs.readFile(process.argv[2], 'utf8');
      if (data === undefined) {
        res.end('Cannot load the database\n');
      }
      const lines = data.split('\n');
      const students = lines.filter((line, index) => line.trim() !== '' && index !== 0);
      const fields = {};

      students.forEach((student) => {
        if (student) {
          const [firstname, lastname, age, field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          if ((lastname && age)) {
            fields[field].push(firstname);
          }
        }
      });

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.length}\n`);
      Object.keys(fields).forEach((field) => {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      });
      res.end();
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Cannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
