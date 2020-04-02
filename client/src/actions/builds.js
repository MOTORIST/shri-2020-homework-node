import { REQUEST, SUCCESS, FAILURE } from '../constants';
import config from '../config';

export const Types = {
  GET_BUILDS: 'GET_BUILDS',
  GET_BUILD: 'GET_BUILD',
};

export const fetchBuilds = (offset = 0, limit = config.BUILDS_PER_PAGE) => ({
  type: Types.GET_BUILDS + REQUEST,
  offset,
  limit,
});

export const fetchBuildsSuccess = data => ({
  type: Types.GET_BUILDS + SUCCESS,
  payload: data,
});

export const fetchBuildsFailure = error => ({
  type: Types.GET_BUILDS + FAILURE,
  error,
});

export const fetchBuild = buildId => ({
  type: Types.GET_BUILD + REQUEST,
  buildId,
});

export const fetchBuildSuccess = data => ({
  type: Types.GET_BUILD + SUCCESS,
  payload: data,
});

export const fetchBuildFailure = error => ({
  type: Types.GET_BUILD + FAILURE,
  error,
});
