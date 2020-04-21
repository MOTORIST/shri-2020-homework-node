const shriApi = require('../../services/shriApi.service');
const { pickFromArray, pick } = require('../../helpers');
const gitCommands = require('../../services/gitCommands.service');
const cacheBuildLogs = require('../../services/cacheBuildLogs.service');
const APIError = require('../../helpers/APIError');

// TODO: вынести в модель
const buildFields = [
  'id',
  'buildNumber',
  'commitMessage',
  'branchName',
  'commitHash',
  'authorName',
  'status',
  'start',
  'duration',
];

async function list(req, res, next) {
  const { query } = req;
  const offset = query.offset ? parseInt(query.offset, 10) : 0;
  const limit = query.limit ? parseInt(query.limit, 10) : 25;

  try {
    const buildList = await shriApi.getBuildList(offset, limit);

    const data = pickFromArray(buildList.data, buildFields);

    res.json({ data });
  } catch (err) {
    next(err);
  }
}

async function get(req, res, next) {
  try {
    const buildData = await shriApi.getBuild(req.params.buildId);
    const data = pick(buildData.data, buildFields);

    res.json({ data });
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
      throw new APIError({ message: 'Repository settings not set', public: true });
    }

    const commitData = await gitCommands.getCommitInfo(req.params.commitHash, repoName);
    const buildRequest = await shriApi.buildRequest(commitData);

    commitData.id = buildRequest.data.id;
    commitData.buildNumber = buildRequest.data.buildNumber;
    commitData.status = buildRequest.data.status;

    res.json({ data: commitData });
  } catch (err) {
    next(err);
  }
}

async function getBuildLogs(req, res, next) {
  const { buildId } = req.params;

  try {
    const cache = await cacheBuildLogs.get(buildId);

    if (cache) {
      res.json(cache);
    } else {
      const logsData = await shriApi.getBuildLogs(buildId);

      if (logsData) {
        cacheBuildLogs.set(buildId, logsData);
      }

      res.json(logsData);
    }
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
