import { Request, Response, NextFunction } from 'express';
import shriApi from '../../services/shriApi.service';
import git from '../../services/gitCommands.service';
import APIError from '../../helpers/APIError';
import gitHub from '../../services/gitHubApi.service';

export async function get(_: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const settingsData = await shriApi.getConfig();
    res.json({ data: settingsData });
  } catch (err) {
    next(err);
  }
}

export async function add(req: Request, res: Response, next: NextFunction): Promise<void> {
  const repoData = req.body;

  try {
    const isExist = await gitHub.checkRepo(repoData.repoName);

    if (!isExist) {
      throw new APIError({
        status: 400,
        message: `Repository "${repoData.repoName}" not found`,
        isPublic: true,
      });
    }

    await shriApi.addConfig(repoData);
    git.clone(repoData.repoName);

    res.json({ data: req.body });
  } catch (error) {
    next(error);
  }
}

export async function remove(_: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await shriApi.deleteConfig();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

export default {
  get,
  add,
  remove,
};
