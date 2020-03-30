import { all, fork } from 'redux-saga/effects';
import watchSettingsSagas from './settings';
import watchCommonSagas from './common';

export default function* rootSaga() {
  yield all([fork(watchSettingsSagas)]);
  yield all([fork(watchCommonSagas)]);
}
