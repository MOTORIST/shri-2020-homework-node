import { promisify } from 'util';
import { join } from 'path';
import { existsSync } from 'fs';
const exec = promisify(require('child_process').exec);
import { REPOSITORIES_DIR } from '../config';
import APIError from '../helpers/APIError';
import { GIT_COMMANDS } from '../config/app.errors';

interface Commit {
  commitHash: string;
  authorName: string;
  commitMessage: string;
  branchName: string;
}

function getRepoDir(repoName: string): string {
  return join(REPOSITORIES_DIR, repoName);
}

/**
 * Clone repository
 */
export async function clone(repoName: string): Promise<void> {
  try {
    const repoPath = `https://github.com/${repoName}.git`;
    const cloneDir = getRepoDir(repoName);
    const command = `git clone ${repoPath} ${cloneDir}`;

    if (!existsSync(cloneDir)) {
      exec(command);
    }
  } catch ({ stack }) {
    const message = `Failed to clone repository "${repoName}"`;
    throw new APIError({ message, stack, appError: GIT_COMMANDS });
  }
}

/**
 * Commit info
 */
export async function getCommitInfo(commitHash: string, repoName: string): Promise<Commit> {
  const repoDir = getRepoDir(repoName);
  const command = `git log -1 --format="%h|%cn|%s" ${commitHash} && git name-rev --name-only --exclude=tags/* ${commitHash}`;

  try {
    const { stdout } = await exec(command, { cwd: repoDir });
    const data = stdout.split(/\r?\n/);

    if (data.length < 2) {
      const message = 'Failed to get commit data';
      throw new APIError({ message, appError: GIT_COMMANDS });
    }

    const commitDataArr = data[0].split('|');
    const branchName = data[1].split('~')[0];

    return {
      commitHash: commitDataArr[0],
      authorName: commitDataArr[1],
      commitMessage: commitDataArr[2],
      branchName,
    };
  } catch ({ stack, message }) {
    throw new APIError({ message, stack, appError: GIT_COMMANDS });
  }
}

export default {
  clone,
  getCommitInfo,
};
