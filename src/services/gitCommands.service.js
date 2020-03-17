const util = require('util');
const path = require('path');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);
const { REPOSITORIES_DIR } = require('../config');
const APIError = require('../helpers/APIError');
const appErrors = require('../config/app.errors');

function getRepoDir(repoName) {
  return path.join(REPOSITORIES_DIR, repoName);
}

/**
 * Clone repository
 * @param {string} repoName
 */
async function clone(repoName) {
  try {
    const repoPath = `https://github.com/${repoName}.git`;
    const cloneDir = getRepoDir(repoName);
    const command = `git clone ${repoPath} ${cloneDir}`;

    if (!fs.existsSync(cloneDir)) {
      exec(command);
    }
  } catch ({ stack }) {
    const message = `Failed to clone repository "${repoName}"`;
    throw new APIError({ message, stack, appError: appErrors.GIT_COMMANDS });
  }
}

/**
 * Commit info
 * @param {string} commitHash
 * @param {string} repoName
 */
async function getCommitInfo(commitHash, repoName) {
  const repoDir = getRepoDir(repoName);
  const command = `git log -1 --format="%h|%cn|%s" ${commitHash} && git name-rev --name-only --exclude=tags/* ${commitHash}`;

  try {
    const { stdout } = await exec(command, { cwd: repoDir });
    const data = stdout.split(/\r?\n/);

    if (data.length < 2) {
      throw new Error('Failed to get commit data');
    }

    const commitDataArr = data[0].split('|');
    const branchName = data[1].split('~')[0];

    return {
      commitHash: commitDataArr[0],
      authorName: commitDataArr[1],
      commitMessage: commitDataArr[2],
      branchName,
    };
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  clone,
  getCommitInfo,
};
