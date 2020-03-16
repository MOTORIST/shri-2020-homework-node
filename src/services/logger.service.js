const { createLogger, format, transports } = require('winston');
const path = require('path');
const { LOGS_DIR } = require('../config');

const { combine, errors, json } = format;

const shriApiLogger = createLogger({
  level: 'error',
  format: combine(errors({ stack: true }), json()),
  defaultMeta: { service: 'shri-api-service' },
  transports: [
    new transports.File({
      filename: path.join(LOGS_DIR, 'shri-api-errors.log'),
      level: 'error',
    }),
  ],
});

const gitLogger = createLogger({
  level: 'error',
  format: combine(errors({ stack: true }), json()),
  defaultMeta: { service: 'shri-api-service' },
  transports: [
    new transports.File({
      filename: path.join(LOGS_DIR, 'git-errors.log'),
      level: 'error',
    }),
  ],
});

module.exports = {
  shriApiLogger,
  gitLogger,
};
