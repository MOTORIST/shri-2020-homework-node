const httpStatus = require('http-status');
const shriApi = require('../../services/shriApi.service');
const git = require('../../services/gitCommands.service');

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
    const repoData = req.body;
    await shriApi.addConfig(repoData);
    // TODO check exists repo in github;
    git.clone(repoData.repoName);

    res.json(req.body);
  } catch (err) {
    next(err);
  }
}

async function remove(_, res, next) {
  try {
    await shriApi.deleteConfig();
    res.sendStatus(httpStatus.NO_CONTENT);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  add,
  remove,
};
