import { ValidationError } from 'express-validation';
import { Request, Response, NextFunction } from 'express';
import { gitLogger, shriApiLogger } from '../services/logger.service';
import APIError from '../helpers/APIError';
import { GIT_COMMANDS, SHRI_API } from '../config/app.errors';
import { ENV } from '../config';

const errorHandler = (
  err: APIError | Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Response => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }

  if (ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  if (err instanceof APIError) {
    if (err.appError === GIT_COMMANDS) {
      gitLogger.log('error', err.message, err.stack);
    }

    if (err.appError === SHRI_API) {
      shriApiLogger.log('error', err.message, err.stack);
    }

    return res.status(500).json({
      name: err.name,
      message: err.message,
      stack: err.stack,
      status: err.status,
      appCodeError: err.appError,
    });
  }

  return res.status(500).json({
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
};

export default errorHandler;
