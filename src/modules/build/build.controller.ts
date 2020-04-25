import { NextFunction, Response, Request } from 'express';
import shriApi from '../../services/shriApi.service';
import { getCommitInfo } from '../../services/gitCommands.service';
import cacheBuildLogs from '../../services/cacheBuildLogs.service';
import APIError from '../../helpers/APIError';

export async function list(req: Request, res: Response, next: NextFunction): Promise<void> {
  const { query } = req;
  const offset = query.offset ? parseInt(query.offset.toString(), 10) : 0;
  const limit = query.limit ? parseInt(query.limit.toString(), 10) : 25;

  try {
    const buildList = await shriApi.getBuildList(offset, limit);

    res.json({ data: buildList });
  } catch (err) {
    next(err);
  }
}

export async function get(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const buildData = await shriApi.getBuild(req.params.buildId);

    res.json({ data: buildData });
  } catch (err) {
    next(err);
  }
}

export async function add(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { repoName } = await shriApi.getConfig();

    if (!repoName) {
      throw new APIError({ message: 'Repository settings not set', isPublic: true });
    }

    const commit = await getCommitInfo(req.params.commitHash, repoName);

    const { id, buildNumber, status } = await shriApi.buildRequest(commit);

    const commitData = {
      ...commit,
      id,
      buildNumber,
      status,
    };

    res.json({ data: commitData });
  } catch (err) {
    next(err);
  }
}

export async function getBuildLogs(req: Request, res: Response, next: NextFunction): Promise<void> {
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
