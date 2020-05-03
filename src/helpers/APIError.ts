/* eslint-disable max-classes-per-file */

import { INTERNAL_SERVER_ERROR } from 'http-status';

interface ErrorConstructor {
  message: string;
  errors?: Error[];
  status?: number;
  isPublic?: boolean;
  stack?: string;
  appError?: number;
}

class ExtendableError extends Error {
  errors?: Error[];
  status?: number;
  isPublic?: boolean;
  appError?: number;

  constructor({ message, errors, status, isPublic, stack, appError }: ErrorConstructor) {
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

class APIError extends ExtendableError {
  constructor({
    status = INTERNAL_SERVER_ERROR,
    isPublic = false,
    message,
    errors,
    stack,
    appError,
  }: ErrorConstructor) {
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

export default APIError;
