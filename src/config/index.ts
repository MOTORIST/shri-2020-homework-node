import path from 'path';

const appDir = path.resolve();
const storageDir = path.join(appDir, `${process.env.STORAGE_DIR_NAME}`);
const repositoriesDir = path.join(storageDir, `${process.env.REPOSITORIES_DIR_NAME}`);
const logsDir = path.join(storageDir, 'logs');
const cacheDir = path.join(storageDir, 'cache');

export const APP_DIR = appDir;
export const ENV = process.env.ENV;
export const PORT = process.env.PORT;
export const SHRI_API_URL = process.env.SHRI_API_URL;
export const SHRI_API_TIMEOUT = Number.parseInt(`${process.env.SHRI_API_TIMEOUT}`, 10);
export const SHRI_API_REJECT_UNAUTHORIZED = process.env.SHRI_API_REJECT_UNAUTHORIZED === 'true';
export const SHRI_API_AUTH_TOKEN = process.env.SHRI_API_AUTH_TOKEN;
export const STORAGE_DIR = storageDir;
export const REPOSITORIES_DIR = repositoriesDir;
export const LOGS_DIR = logsDir;
export const CACHE_DIR = cacheDir;
export const SWAGGER_PORT = process.env.SWAGGER_PORT;
export const CLIENT_URL = process.env.CLIENT_URL;
export const NOTIFICATION_VAPID_PUBLIC_KEY = process.env.NOTIFICATION_VAPID_PUBLIC_KEY;
export const NOTIFICATION_VAPID_PRIVATE_KEY = process.env.NOTIFICATION_VAPID_PRIVATE_KEY;
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL;
export const NOTIFICATION_SUBSCRIPTIONS_STORE_FILE = path.join(APP_DIR, 'subscriptions-store.json');
