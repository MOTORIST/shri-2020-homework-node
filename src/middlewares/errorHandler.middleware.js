const { ValidationError } = require('express-validation');
const { gitLogger, shriApiLogger } = require('../services/logger.service');
const APIError = require('../helpers/APIError');
const appErrors = require('../config/app.errors');
const { ENV } = require('../config');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (err instanceof APIError) {
    if (err.appError === appErrors.GIT_COMMANDS) {
      gitLogger.log('error', err.message, err.stack);
    }

    if (err.appError === appErrors.SHRI_API) {
      shriApiLogger.log('error', err.message, err.stack);
    }
  }

  if (ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return res.status(500).json({
    name: err.name,
    message: err.message,
    stack: err.stack,
    status: err.status,
    appCodeError: err.appError,
  });
};

module.exports = errorHandler;
