const shriApi = require('../../services/shriApi.service');
const { pickFromArray } = require('../../helpers');

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

module.exports = {
  list,
};
