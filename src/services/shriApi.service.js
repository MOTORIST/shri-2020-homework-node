const axios = require('axios');
const https = require('https');
const { shriApiLogger } = require('./logger.service');
const {
  SHRI_API_URL,
  SHRI_API_TIMEOUT,
  SHRI_API_REJECT_UNAUTHORIZED,
  SHRI_API_AUTH_TOKEN,
} = require('../config');

const httpApi = axios.create({
  baseURL: SHRI_API_URL,
  timeout: SHRI_API_TIMEOUT,
  httpsAgent: new https.Agent({
    rejectUnauthorized: SHRI_API_REJECT_UNAUTHORIZED,
  }),
});

httpApi.defaults.headers.common.Authorization = `Bearer ${SHRI_API_AUTH_TOKEN}`;

async function getConfig() {
  try {
    const { data } = await httpApi.get('conf');
    return data;
  } catch (err) {
    const messageErr = 'Failed to get repository configuration (SHRI API: GET / conf)';
    shriApiLogger.log('error', messageErr, err);

    throw new Error(err);
  }
}

module.exports = {
  getConfig,
};
