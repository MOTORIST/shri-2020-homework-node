const axios = require('axios');
const https = require('https');
const { SHRI_API_AUTH_TOKEN } = require('../config');

const httpApi = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 5000,
  httpsAgent: new https.Agent({
    rejectUnauthorized: true,
  }),
});

httpApi.defaults.headers.common.Authorization = `token ${SHRI_API_AUTH_TOKEN}`;

async function getRepo(ownerAndRepoName) {
  try {
    const { data } = httpApi.get(`repos/${ownerAndRepoName}`);

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getRepo,
};
