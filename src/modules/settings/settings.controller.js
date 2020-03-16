const shriApi = require('../../services/shriApi.service');

async function get(_, res, next) {
  try {
    const settingsData = await shriApi.getConfig();
    res.json(settingsData);
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  try {
    await shriApi.addConfig(req.body);
    res.json(req.body);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  add,
};
