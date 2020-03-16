require('dotenv').config();
const express = require('express');
const { PORT, ENV } = require('./config');

const app = express();

app.get('/', (_, res) => res.send('Hello World!'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} - env (${ENV})`);
});
