const shriApi = require('../../services/shriApi.service');
const { pickFromArray, pick } = require('../../helpers');

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
  const mockData = {
    commitMessage: 'string',
    commitHash: req.params.commitHash,
    branchName: 'string',
    authorName: 'string',
  };

  try {
    await shriApi.buildRequest(mockData);
    res.json({ data: mockData });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  list,
  get,
  add,
};
