const axios = require('axios');
const https = require('https');
const appErrors = require('../config/app.errors');
const APIError = require('../helpers/APIError');
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
    const message = 'Failed to get repository configuration (SHRI API: GET / conf)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

async function addConfig(data) {
  try {
    const { status } = await httpApi.post('conf', data);

    if (status !== 200) {
      return false;
    }

    return true;
  } catch (err) {
    const message = 'Failed to add repository configuration (SHRI API: POST /conf)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

async function deleteConfig() {
  try {
    const { status } = await httpApi.delete('conf');

    if (status !== 200) {
      return false;
    }

    return true;
  } catch (err) {
    const message = 'Failed to delete repository configuration (SHRI API: DELETE /conf)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

async function getBuildList() {
  try {
    const { data } = await httpApi.get('build/list');
    return data;
  } catch (err) {
    const message = 'Failed to get build list (SHRI API: GET /build/list)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

async function getBuild(buildId) {
  try {
    const { data } = await httpApi.get('/build/details', { params: { buildId } });
    return data;
  } catch (err) {
    const message = 'Failed to get build data (SHRI API: GET /build/details)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

async function buildRequest(buildData) {
  try {
    const { status } = await httpApi.post('/build/request', buildData);

    if (status !== 200) {
      return false;
    }

    return true;
  } catch (err) {
    const message = 'Failed to create build (SHRI API: POST /build/request)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

async function getBuildLogs(buildId) {
  try {
    const { data } = await httpApi.get('/build/log', { params: { buildId } });

    return data;
  } catch (err) {
    const message = 'Failed to get build logo (SHRI API: GET /build/log)';
    throw new APIError({ message, appError: appErrors.SHRI_API });
  }
}

module.exports = {
  getConfig,
  addConfig,
  deleteConfig,
  getBuildList,
  getBuild,
  buildRequest,
  getBuildLogs,
};
