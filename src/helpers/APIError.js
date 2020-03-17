/* eslint-disable max-classes-per-file */

const httpStatus = require('http-status');

/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor({ message, errors, status, isPublic, stack, appError }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.stack = stack;
    this.appError = appError;
  }
}

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor({
    status = httpStatus.INTERNAL_SERVER_ERROR,
    message,
    errors,
    stack,
    isPublic = false,
    appError,
  }) {
    super({
      message,
      errors,
      status,
      isPublic,
      stack,
      appError,
    });
  }
}

module.exports = APIError;
