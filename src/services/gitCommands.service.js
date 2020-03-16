const util = require('util');
const path = require('path');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);
const { REPOSITORIES_DIR_NAME } = require('../config');
const { gitLogger } = require('./logger.service');

/**
 * Clone repository
 * @param {string} repoName
 */
async function clone(repoName) {
  const pathRepo = `https://github.com/${repoName}.git`;
  const cloneDir = path.join(REPOSITORIES_DIR_NAME, repoName);
  const command = `git clone ${pathRepo} ${cloneDir}`;

  try {
    if (!fs.existsSync(cloneDir)) {
      exec(command);
    }
  } catch (err) {
    gitLogger.log('error', `Command: ${command}`, err);
  }
}

module.exports = {
  clone,
};
