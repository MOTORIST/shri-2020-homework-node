import { call, all, takeLatest } from 'redux-saga/effects';
import { Types, SetIsSetSettingsAction } from '../actions/common';
import { SagaIterator } from 'redux-saga';

export function* setIsSetSettingsSaga({ payload }: SetIsSetSettingsAction): Generator {
  try {
    yield call<Storage, any>([localStorage, localStorage.setItem], 'isSetSettings', payload);
  } catch (error) {
    console.error(error);
  }
}

function* watchCommonSagas(): SagaIterator {
  yield all([takeLatest(Types.SET_IS_SET_SETTINGS, setIsSetSettingsSaga)]);
}

export default watchCommonSagas;
