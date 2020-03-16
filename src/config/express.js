const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const swagger = require('express-swagger-generator');
const { ValidationError } = require('express-validation');
const v1Router = require('../routes/v1');
const swaggerOptions = require('./swagger');
const { APP_DIR } = require('.');

const app = express();
const expressSwagger = swagger(app);
expressSwagger(swaggerOptions);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(APP_DIR, 'public')));
app.use('/api/v1', v1Router);

app.use((err, req, res) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  return res.status(500).json(err);
});

module.exports = app;
