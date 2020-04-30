import { call, all, takeLatest } from 'redux-saga/effects';
import { Types, CommonActionTypes } from '../actions/common';
import { SagaIterator } from 'redux-saga';

export function* setIsSetSettingsSaga({ payload }: CommonActionTypes): Generator {
  try {
    yield call<Storage, any>([localStorage, localStorage.setItem], 'isSetSettings', payload);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function* watchCommonSagas(): SagaIterator {
  yield all([takeLatest(Types.SET_IS_SET_SETTINGS, setIsSetSettingsSaga)]);
}

export default watchCommonSagas;
