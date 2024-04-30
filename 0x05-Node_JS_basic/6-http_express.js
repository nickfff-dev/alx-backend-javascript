const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!\n');
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
