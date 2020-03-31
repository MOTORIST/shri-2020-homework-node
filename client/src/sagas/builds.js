import { call, all, put, takeLatest } from 'redux-saga//effects';
import { Types, fetchBuildsSuccess, fetchBuildsFailure } from '../actions/builds';
import { REQUEST } from '../constants';
import webApi from '../api';

function* getBuildsSaga() {
  try {
    const { data: builds } = yield call(webApi, 'builds');
    yield put(fetchBuildsSuccess(builds.data));
  } catch (error) {
    const message = 'Failed to fetch builds';
    put(fetchBuildsFailure(message));
  }
}

function* watchBuildsSagas() {
  yield all([takeLatest(Types.GET_BUILDS + REQUEST, getBuildsSaga)]);
}

export default watchBuildsSagas;
