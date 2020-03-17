const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const swagger = require('express-swagger-generator');
const { ValidationError } = require('express-validation');
const v1Router = require('../routes/v1');
const swaggerOptions = require('./swagger');
const { APP_DIR } = require('.');
const APIError = require('../helpers/APIError');
const appErrors = require('./app.errors');
const { gitLogger, shriApiLogger } = require('../services/logger.service');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(path.join(APP_DIR, 'public')));
app.use('/api/v1', v1Router);

const expressSwagger = swagger(app);
expressSwagger(swaggerOptions);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (err instanceof APIError) {
    if (err.appError === appErrors.SHRI_API) {
      gitLogger.log('error', err.message, err.stack);
    }

    if (err.appError === appErrors.GIT_COMMANDS) {
      shriApiLogger.log('error', err.message, err.stack);
    }
  }

  return res.status(500).json(err);
});

module.exports = app;
