import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../api';
import {
  Types,
  fetchSettingsSuccess,
  fetchSettingsFailure,
  saveSettingsSuccess,
  saveSettingsFailure,
} from '../actions/settings';
import { setIsSetSettings } from '../actions/common';
import { REQUEST } from '../constants';
import { forwardTo } from '../history';

export function* fetchSettingsSaga() {
  try {
    const { data: settings } = yield call(api.settings.getSettings);
    yield put(fetchSettingsSuccess(settings.data));
  } catch (error) {
    const message = 'Failed to fetch settings';
    yield put(fetchSettingsFailure(message));
    throw error;
  }
}

export function* saveSettingsSaga({ values }) {
  try {
    const { data: settings } = yield call(api.settings.saveSaveSettings, values);
    yield put(saveSettingsSuccess(settings.data));
    yield put(setIsSetSettings(true));
    yield call(forwardTo, '/');
  } catch (error) {
    const message = 'Failed to save settings';
    yield put(saveSettingsFailure(message));
    throw error;
  }
}

function* watchSettingsSagas() {
  yield all([
    takeLatest(Types.GET_SETTINGS + REQUEST, fetchSettingsSaga),
    takeLatest(Types.SAVE_SETTINGS + REQUEST, saveSettingsSaga),
  ]);
}

export default watchSettingsSagas;
