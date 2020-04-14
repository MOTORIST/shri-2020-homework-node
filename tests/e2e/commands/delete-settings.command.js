const api = require('../../../src/services/shriApi.service');

const deleteSettings = async () => api.deleteConfig();

module.export = deleteSettings();
