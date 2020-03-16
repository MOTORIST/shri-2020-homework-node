const path = require('path');

const rootDir = path.resolve();
const storageDir = path.join(rootDir, process.env.STORAGE_DIR_NAME);
const logsDir = path.join(storageDir, 'logs');

module.exports = {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  SHRI_API_URL: process.env.SHRI_API_URL,
  SHRI_API_TIMEOUT: Number.parseInt(process.env.SHRI_API_TIMEOUT, 10),
  SHRI_API_REJECT_UNAUTHORIZED: process.env.SHRI_API_REJECT_UNAUTHORIZED === 'true',
  SHRI_API_AUTH_TOKEN: process.env.SHRI_API_AUTH_TOKEN,
  STORAGE_DIR: storageDir,
  LOGS_DIR: logsDir,
};
