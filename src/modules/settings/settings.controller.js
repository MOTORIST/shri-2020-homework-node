const shriApi = require('../../services/shriApi.service');
const git = require('../../services/gitCommands.service');
const APIError = require('../../helpers/APIError');
const gitHub = require('../../services/gitHubApi.service');

async function get(_, res, next) {
  try {
    const settingsData = await shriApi.getConfig();
    res.json(settingsData);
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  const repoData = req.body;

  try {
    const isExist = await gitHub.checkRepo(repoData.repoName);

    if (!isExist) {
      throw new APIError({
        status: 400,
        message: `Repository "${repoData.repoName}" not found`,
        public: true,
      });
    }

    await shriApi.addConfig(repoData);
    git.clone(repoData.repoName);

    res.json({ data: req.body });
  } catch (error) {
    next(error);
  }
}

async function remove(_, res, next) {
  try {
    await shriApi.deleteConfig();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  get,
  add,
  remove,
};
