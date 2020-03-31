import { REQUEST, SUCCESS, FAILURE } from '../constants';

export const Types = {
  GET_BUILDS: 'GET_BUILDS',
};

export const fetchBuilds = () => ({
  type: Types.GET_BUILDS + REQUEST,
});

export const fetchBuildsSuccess = data => ({
  type: Types.GET_BUILDS + SUCCESS,
  payload: data,
});

export const fetchBuildsFailure = error => ({
  type: Types.GET_BUILDS + FAILURE,
  error,
});
