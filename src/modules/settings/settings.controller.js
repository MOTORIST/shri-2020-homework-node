const shriApi = require('../../services/shriApi.service');

async function get(_, res, next) {
  try {
    const settingsData = await shriApi.getConfig();
    res.json(settingsData);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
};
