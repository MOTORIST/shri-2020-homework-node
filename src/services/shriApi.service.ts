import axios from 'axios';
import { Agent } from 'https';
import { SHRI_API } from '../config/app.errors';
import APIError from '../helpers/APIError';
import {
  SHRI_API_URL,
  SHRI_API_TIMEOUT,
  SHRI_API_REJECT_UNAUTHORIZED,
  SHRI_API_AUTH_TOKEN,
} from '../config';
import { Build } from '../../types/Build';
import { Config } from '../../types/Config';

const httpApi = axios.create({
  baseURL: SHRI_API_URL,
  timeout: SHRI_API_TIMEOUT,
  httpsAgent: new Agent({
    rejectUnauthorized: SHRI_API_REJECT_UNAUTHORIZED,
  }),
});

httpApi.defaults.headers.common.Authorization = `Bearer ${SHRI_API_AUTH_TOKEN}`;

export async function getConfig(): Promise<Config> {
  try {
    const { data: config } = await httpApi.get('conf');
    return config.data;
  } catch (err) {
    const message = 'Failed to get repository configuration (SHRI API: GET / conf)';
    throw new APIError({ message, appError: SHRI_API, stack: err.stack });
  }
}

export async function addConfig(data: Config): Promise<boolean> {
  try {
    const { status } = await httpApi.post('conf', data);

    if (status !== 200) {
      return false;
    }

    return true;
  } catch (err) {
    const message = 'Failed to add repository configuration (SHRI API: POST /conf)';
    throw new APIError({ message, appError: SHRI_API });
  }
}

export async function deleteConfig(): Promise<boolean> {
  try {
    const { status } = await httpApi.delete('conf');

    if (status !== 200) {
      return false;
    }

    return true;
  } catch (err) {
    const message = 'Failed to delete repository configuration (SHRI API: DELETE /conf)';
    throw new APIError({ message, appError: SHRI_API });
  }
}

type BuildList = Array<Omit<Build, 'duration'>>;

export async function getBuildList(offset = 0, limit = 25): Promise<BuildList> {
  try {
    const { data: buildList } = await httpApi.get('build/list', { params: { offset, limit } });
    return buildList.data;
  } catch (err) {
    const message = 'Failed to get build list (SHRI API: GET /build/list)';
    throw new APIError({ message, appError: SHRI_API });
  }
}

export async function getBuild(buildId: string): Promise<Build> {
  try {
    const { data: build } = await httpApi.get('/build/details', { params: { buildId } });
    return build.data;
  } catch (err) {
    const message = 'Failed to get build data (SHRI API: GET /build/details)';
    throw new APIError({ message, appError: SHRI_API });
  }
}

type BuildRequest = Pick<Build, 'id' | 'buildNumber' | 'status'>;
type BuildRequestArg = Pick<Build, 'commitMessage' | 'commitHash' | 'branchName' | 'authorName'>;

export async function buildRequest(buildData: BuildRequestArg): Promise<BuildRequest> {
  try {
    const { data: buildRequest } = await httpApi.post('/build/request', buildData);

    return buildRequest.data;
  } catch (err) {
    const message = 'Failed to create build (SHRI API: POST /build/request)';
    throw new APIError({ message, appError: SHRI_API });
  }
}

export async function getBuildLogs(buildId: string): Promise<string> {
  try {
    const { data: log } = await httpApi.get('/build/log', { params: { buildId } });
    return log.data;
  } catch (err) {
    const message = 'Failed to get build logo (SHRI API: GET /build/log)';
    throw new APIError({ message, appError: SHRI_API });
  }
}

export default {
  getConfig,
  addConfig,
  deleteConfig,
  getBuildList,
  getBuild,
  buildRequest,
  getBuildLogs,
};
