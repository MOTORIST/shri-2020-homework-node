import { REQUEST, SUCCESS, FAILURE } from '../constants';
import config from '../config';
import { Build } from '../../../types/Build';

export const Types = {
  GET_BUILDS: 'GET_BUILDS',
  GET_BUILD: 'GET_BUILD',
};

export interface FetchBuildsAction {
  type: string;
  offset: number;
  limit: number;
}

export const fetchBuilds = (offset = 0, limit = config.BUILDS_PER_PAGE): FetchBuildsAction => ({
  type: Types.GET_BUILDS + REQUEST,
  offset,
  limit,
});

export interface FetchBuildsSuccessAction {
  type: string;
  payload: Build;
}

export const fetchBuildsSuccess = (data: Build): FetchBuildsSuccessAction => ({
  type: Types.GET_BUILDS + SUCCESS,
  payload: data,
});

export interface FetchBuildsFailureAction {
  type: string;
  error: string;
}

export const fetchBuildsFailure = (error: string): FetchBuildsFailureAction => ({
  type: Types.GET_BUILDS + FAILURE,
  error,
});

export interface FetchBuildAction {
  type: string;
  buildId: string;
}

export const fetchBuild = (buildId: string): FetchBuildAction => ({
  type: Types.GET_BUILD + REQUEST,
  buildId,
});

export interface FetchBuildSuccessAction {
  type: string;
  payload: Build;
}

export const fetchBuildSuccess = (data: Build): FetchBuildSuccessAction => ({
  type: Types.GET_BUILD + SUCCESS,
  payload: data,
});

export interface FetchBuildFailureAction {
  type: string;
  error: string;
}

export const fetchBuildFailure = (error: string): FetchBuildFailureAction => ({
  type: Types.GET_BUILD + FAILURE,
  error,
});

export type BuildActionTypes =
  | FetchBuildsAction
  | FetchBuildSuccessAction
  | FetchBuildFailureAction
  | FetchBuildsAction
  | FetchBuildsSuccessAction
  | FetchBuildsFailureAction;
