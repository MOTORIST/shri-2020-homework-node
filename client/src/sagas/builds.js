import { call, all, put, takeLatest } from 'redux-saga//effects';
import {
  Types,
  fetchBuildsSuccess,
  fetchBuildsFailure,
  fetchBuildSuccess,
  fetchBuildFailure,
} from '../actions/builds';
import { REQUEST } from '../constants';
import webApi from '../api';

function* getBuildsSaga() {
  try {
    const { data: builds } = yield call(webApi, 'builds');
    yield put(fetchBuildsSuccess(builds.data));
  } catch (error) {
    const message = 'Failed to fetch builds';
    yield put(fetchBuildsFailure(message));
  }
}

function* getBuildSaga({ buildId }) {
  try {
    const { data: build } = yield call(webApi, `builds/${buildId}`);
    yield put(fetchBuildSuccess(build.data));
  } catch (error) {
    console.error(error);
    const message = 'Failed to fetch build';
    yield put(fetchBuildFailure(message));
  }
}

function* watchBuildsSagas() {
  yield all([takeLatest(Types.GET_BUILDS + REQUEST, getBuildsSaga)]);
  yield all([takeLatest(Types.GET_BUILD + REQUEST, getBuildSaga)]);
}

export default watchBuildsSagas;
