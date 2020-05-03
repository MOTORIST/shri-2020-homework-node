import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { fetchSettingsSaga, saveSettingsSaga } from '../settings';
import {
  fetchSettingsSuccess,
  fetchSettingsFailure,
  saveSettingsSuccess,
  saveSettingsFailure,
  Types,
} from '../../actions/settings';
import api from '../../api';
import { settingsData } from '../../tests/fake-data/settings.fake-data';
import { expectErrorSaga } from '../../tests/utils/saga';
import { setIsSetSettings } from '../../actions/common';
import { forwardTo } from '../../history';

describe('settings saga', () => {
  const fakeError = new Error('Fake error');
  const fakeSettingsRes = { data: { data: settingsData } };

  describe('fetchSettingsSuccess', () => {
    it('run without exception', () => {
      return expectSaga(fetchSettingsSaga)
        .provide([[matchers.call.fn(api.settings.getSettings), fakeSettingsRes]])
        .call(api.settings.getSettings)
        .put(fetchSettingsSuccess(settingsData))
        .run();
    });

    it('run with exception ', () => {
      const saga = expectErrorSaga(fetchSettingsSaga).toThrowError(fakeError);

      return expectSaga(saga)
        .provide([[matchers.call.fn(api.settings.getSettings), throwError(fakeError)]])
        .call(api.settings.getSettings)
        .put(fetchSettingsFailure('Failed to fetch settings'))
        .run();
    });
  });

  describe('saveSettingsSaga', () => {
    it('run without exception', () => {
      return expectSaga(saveSettingsSaga, { type: Types.SAVE_SETTINGS, values: settingsData })
        .provide([[matchers.call.fn(api.settings.saveSaveSettings), fakeSettingsRes]])
        .call(api.settings.saveSaveSettings, settingsData)
        .put(saveSettingsSuccess(settingsData))
        .put(setIsSetSettings(true))
        .call(forwardTo, '/')
        .run();
    });

    it('run with exception', () => {
      const saga = expectErrorSaga(saveSettingsSaga, { values: settingsData }).toThrowError(
        fakeError,
      );

      return expectSaga(saga)
        .provide([[matchers.call.fn(api.settings.saveSaveSettings), throwError(fakeError)]])
        .call(api.settings.saveSaveSettings, settingsData)
        .put(saveSettingsFailure('Failed to save settings'))
        .run();
    });
  });
});
