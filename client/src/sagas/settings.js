import { call, put, all, takeLatest } from 'redux-saga//effects';
import webApi from '../api';
import {
  Types,
  fetchSettingsSuccess,
  fetchSettingsFailure,
  saveSettingsSuccess,
  saveSettingsFailure,
} from '../actions/settings';
import { setIsSetSettings } from '../actions/common';
import { REQUEST } from '../constants';
import { POST } from '../api/webApi';
import { forwardTo } from '../history';

function* fetchSettingsSaga() {
  try {
    const { data: settings } = yield call(webApi, 'settings');

    if (settings) {
      yield put(fetchSettingsSuccess(settings.data));
    }
  } catch (error) {
    const message = 'Failed to fetch settings';
    yield put(fetchSettingsFailure(message));
  }
}

function* saveSettingsSaga({ values }) {
  try {
    yield call(webApi, 'settings', POST, values);
    yield put(saveSettingsSuccess(values));
    yield put(setIsSetSettings(true));
    yield call(forwardTo, '/builds');
  } catch (error) {
    const message = 'Failed to save settings';
    yield put(saveSettingsFailure(message));
  }
}

function* watchSettingsSagas() {
  yield all([
    takeLatest(Types.GET_SETTINGS + REQUEST, fetchSettingsSaga),
    takeLatest(Types.SAVE_SETTINGS + REQUEST, saveSettingsSaga),
  ]);
}

export default watchSettingsSagas;
