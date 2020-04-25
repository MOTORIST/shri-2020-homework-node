import { join } from 'path';
import { promises as fs, existsSync, mkdirSync } from 'fs';

import { CACHE_DIR } from '../config';

class CacheBuildLogs {
  static instance: CacheBuildLogs;

  constructor() {
    if (!CacheBuildLogs.instance) {
      CacheBuildLogs.instance = this;
    }

    return CacheBuildLogs.instance;
  }

  async set(buildId: string, value: string): Promise<void> {
    if (value.length === 0) {
      return;
    }

    this._createLogsDir();

    fs.writeFile(this._getFilePath(buildId), value);
  }

  async get(buildId: string): Promise<string | null> {
    const filePath = this._getFilePath(buildId);

    if (!existsSync(filePath)) {
      return null;
    }

    return fs.readFile(filePath, { encoding: 'utf-8' });
  }

  async delete(buildId: string): Promise<void> {
    fs.unlink(this._getFilePath(buildId));
  }

  async clear(): Promise<void> {
    if (!existsSync(CACHE_DIR)) {
      return;
    }

    const files = await fs.readdir(CACHE_DIR);

    if (!files || files.length === 0) {
      return;
    }

    files.forEach(fileName => fs.unlink(this._getFilePath(fileName)));
  }

  _getFilePath(buildId: string): string {
    return join(CACHE_DIR, buildId);
  }

  _createLogsDir(): void {
    if (!existsSync(CACHE_DIR)) {
      mkdirSync(CACHE_DIR);
    }
  }
}

const instance = new CacheBuildLogs();
Object.freeze(instance);

export default instance;
