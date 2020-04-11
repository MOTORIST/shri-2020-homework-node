import { call, all, put, takeLatest } from 'redux-saga/effects';
import {
  Types,
  fetchBuildsSuccess,
  fetchBuildsFailure,
  fetchBuildSuccess,
  fetchBuildFailure,
} from '../actions/builds';
import { REQUEST } from '../constants';
import api from '../api';

export function* getBuildsSaga({ offset, limit }) {
  try {
    const { data: builds } = yield call(api.builds.getBuilds, offset, limit);
    yield put(fetchBuildsSuccess(builds.data));
  } catch (error) {
    const message = 'Failed to fetch builds';
    yield put(fetchBuildsFailure(message));
    throw error;
  }
}

export function* getBuildSaga({ buildId }) {
  try {
    const { data: build } = yield call(api.builds.getBuild, buildId);
    yield put(fetchBuildSuccess(build.data));
  } catch (error) {
    const message = 'Failed to fetch build';
    yield put(fetchBuildFailure(message));
    throw error;
  }
}

function* watchBuildsSagas() {
  yield all([takeLatest(Types.GET_BUILDS + REQUEST, getBuildsSaga)]);
  yield all([takeLatest(Types.GET_BUILD + REQUEST, getBuildSaga)]);
}

export default watchBuildsSagas;
