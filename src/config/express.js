const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('express-swagger-generator');
const v1Router = require('../routes/v1');
const swaggerOptions = require('./swagger');

const app = express();
const expressSwagger = swagger(app);
expressSwagger(swaggerOptions);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', v1Router);

module.exports = app;
