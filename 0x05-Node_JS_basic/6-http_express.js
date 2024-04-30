const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
