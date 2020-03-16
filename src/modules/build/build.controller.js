const shriApi = require('../../services/shriApi.service');
const { pickFromArray, pick } = require('../../helpers');
const gitCommands = require('../../services/gitCommands.service');

// TODO: вынести в модель
const buildFields = [
  'buildNumber',
  'commitMessage',
  'commitHash',
  'authorName',
  'start',
  'duration',
];

async function list(_, res, next) {
  try {
    const buildList = await shriApi.getBuildList();
    res.json({ data: pickFromArray(buildList.data, buildFields) });
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  try {
    const buildData = await shriApi.getBuild(req.params.buildId);
    res.json({ data: pick(buildData.data, buildFields) });
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  try {
    const {
      data: { repoName },
    } = await shriApi.getConfig();

    if (!repoName) {
      throw new Error('No settings');
    }

    const commitData = await gitCommands.getCommitInfo(req.params.commitHash, repoName);
    await shriApi.buildRequest(commitData);

    res.json({ data: commitData });
  } catch (err) {
    next(err);
  }
}

async function getBuildLogs(req, res, next) {
  try {
    const logsData = await shriApi.getBuildLogs(req.params.buildId);

    res.json(logsData);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  list,
  get,
  add,
  getBuildLogs,
};
