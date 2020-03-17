const path = require('path');
const fs = require('fs').promises;
const baseFs = require('fs');
const { CACHE_DIR } = require('../config');

class CacheBuildLogs {
  constructor() {
    if (!CacheBuildLogs.instance) {
      CacheBuildLogs.instance = this;
    }

    return CacheBuildLogs.instance;
  }

  async set(buildId, value) {
    if (value.length === 0) {
      return;
    }

    this._createLogsDir();

    fs.writeFile(this._getFilePath(buildId), value);
  }

  async get(buildId) {
    const filePath = this._getFilePath(buildId);

    if (!baseFs.existsSync(filePath)) {
      return null;
    }

    return fs.readFile(filePath, { encoding: 'utf-8' });
  }

  async delete(buildId) {
    return fs.unlink(this._getFilePath(buildId));
  }

  async clear() {
    if (!baseFs.existsSync(CACHE_DIR)) {
      return;
    }

    const files = await fs.readdir(CACHE_DIR);

    if (!files || files.length === 0) {
      return;
    }

    files.forEach(fileName => fs.unlink(this._getFilePath(fileName)));
  }

  _getFilePath(buildId) {
    return path.join(CACHE_DIR, buildId);
  }

  _createLogsDir() {
    if (!baseFs.existsSync(CACHE_DIR)) {
      baseFs.mkdirSync(CACHE_DIR);
    }
  }
}

const instance = new CacheBuildLogs();
Object.freeze(instance);

module.exports = instance;
