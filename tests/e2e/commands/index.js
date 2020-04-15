const api = require('../../../src/services/shriApi.service');

const settingsData = {
  repoName: 'MOTORIST/eslint-plugin-lodash-to-native',
  buildCommand: 'yarn install',
  mainBranch: 'master',
  period: 12,
};

const deleteSettings = async () => api.deleteConfig();

const saveSettings = async () => api.addConfig(settingsData);

module.exports = {
  deleteSettings,
  saveSettings,
};
