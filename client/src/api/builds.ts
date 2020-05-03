import axios from './axios';
import { Build } from '../../../types/Build';
import { ApiResponse } from '../types/ApiResponse';

export const getBuilds = (offset: number, limit: number): ApiResponse<Build[]> =>
  axios.get('builds', { params: { offset, limit } });

export const getBuild = (id: string): ApiResponse<Build> => axios.get(`builds/${id}`);

export const runBuild = (commitHash: string): ApiResponse<Build> =>
  axios.post(`builds/${commitHash}`);

export const getBuildLogs = (buildId: string): ApiResponse<string> =>
  axios.get(`builds/${buildId}/logs`);
