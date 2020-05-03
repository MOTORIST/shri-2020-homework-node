import { call, all, put, takeLatest } from 'redux-saga/effects';
import {
  Types,
  fetchBuildsSuccess,
  fetchBuildsFailure,
  fetchBuildSuccess,
  fetchBuildFailure,
  FetchBuildsAction,
  FetchBuildAction,
} from '../actions/builds';
import { REQUEST } from '../constants';
import api from '../api';
import { SagaIterator } from 'redux-saga';

export function* getBuildsSaga({ offset, limit }: FetchBuildsAction): SagaIterator {
  try {
    const { data: builds } = yield call(api.builds.getBuilds, offset, limit);
    yield put(fetchBuildsSuccess(builds.data));
  } catch (error) {
    const message = 'Failed to fetch builds';
    yield put(fetchBuildsFailure(message));
  }
}

export function* getBuildSaga({ buildId }: FetchBuildAction): SagaIterator {
  try {
    const { data: build } = yield call(api.builds.getBuild, buildId);
    yield put(fetchBuildSuccess(build.data));
  } catch (error) {
    const message = 'Failed to fetch build';
    yield put(fetchBuildFailure(message));
  }
}

function* watchBuildsSagas(): SagaIterator {
  yield all([takeLatest(Types.GET_BUILDS + REQUEST, getBuildsSaga)]);
  yield all([takeLatest(Types.GET_BUILD + REQUEST, getBuildSaga)]);
}

export default watchBuildsSagas;
