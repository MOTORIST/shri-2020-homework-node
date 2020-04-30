import { all, fork } from 'redux-saga/effects';
import watchSettingsSagas from './settings';
import watchCommonSagas from './common';
import watchBuildsSagas from './builds';
import { SagaIterator } from 'redux-saga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(watchSettingsSagas)]);
  yield all([fork(watchCommonSagas)]);
  yield all([fork(watchBuildsSagas)]);
}
