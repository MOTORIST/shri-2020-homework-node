const path = require('path');

const appDir = path.resolve();
const storageDir = path.join(appDir, process.env.STORAGE_DIR_NAME);
const repositoriesDir = path.join(storageDir, process.env.REPOSITORIES_DIR_NAME);
const logsDir = path.join(storageDir, 'logs');
const cacheDir = path.join(storageDir, 'cache');

module.exports = {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  SHRI_API_URL: process.env.SHRI_API_URL,
  SHRI_API_TIMEOUT: Number.parseInt(process.env.SHRI_API_TIMEOUT, 10),
  SHRI_API_REJECT_UNAUTHORIZED: process.env.SHRI_API_REJECT_UNAUTHORIZED === 'true',
  SHRI_API_AUTH_TOKEN: process.env.SHRI_API_AUTH_TOKEN,
  APP_DIR: appDir,
  STORAGE_DIR: storageDir,
  REPOSITORIES_DIR: repositoriesDir,
  LOGS_DIR: logsDir,
  CACHE_DIR: cacheDir,
  SWAGGER_PORT: process.env.SWAGGER_PORT,
};
