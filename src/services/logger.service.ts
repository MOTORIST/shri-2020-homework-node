import { createLogger, format, transports } from 'winston';
import { join } from 'path';
import { LOGS_DIR } from '../config';

const { combine, errors, json } = format;

export const shriApiLogger = createLogger({
  level: 'error',
  format: combine(errors({ stack: true }), json()),
  defaultMeta: { service: 'shri-api-service' },
  transports: [
    new transports.File({
      filename: join(LOGS_DIR, 'shri-api-errors.log'),
      level: 'error',
    }),
  ],
});

export const gitLogger = createLogger({
  level: 'error',
  format: combine(errors({ stack: true }), json()),
  defaultMeta: { service: 'shri-api-service' },
  transports: [
    new transports.File({
      filename: join(LOGS_DIR, 'git-errors.log'),
      level: 'error',
    }),
  ],
});
