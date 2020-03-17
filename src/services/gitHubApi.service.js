const axios = require('axios');
const APIError = require('../helpers/APIError');
// const https = require('https');
// const { SHRI_API_AUTH_TOKEN } = require('../config');

const httpApi = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 3000,
});

// httpApi.defaults.headers.common.Authorization = `token ${SHRI_API_AUTH_TOKEN}`;

async function getRepo(ownerAndRepoName) {
  try {
    return httpApi.get(`repos/${ownerAndRepoName}`);
  } catch ({ stack }) {
    throw new APIError({ message: 'Failed to get repository information from github.com', stack });
  }
}

async function checkRepo(ownerAndRepoName) {
  try {
    const { status } = await httpApi.get(`repos/${ownerAndRepoName}`);

    if (status !== 200) {
      return false;
    }

    return true;
  } catch ({ stack }) {
    throw new APIError({ message: 'Failed to check repository from github.com', stack });
  }
}

module.exports = {
  getRepo,
  checkRepo,
};
