const express = require('express');
const bodyParser = require('body-parser');
const v1Router = require('../routes/v1');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', v1Router);

module.exports = app;
