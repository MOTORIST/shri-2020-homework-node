import { call, all, takeLatest } from 'redux-saga//effects';
import { Types } from '../actions/common';

function* setIsSetSettingsSaga({ payload }) {
  try {
    yield call([localStorage, localStorage.setItem], 'isSetSettings', payload);
  } catch (error) {
    throw error;
  }
}

function* watchCommonSagas() {
  yield all([takeLatest(Types.SET_IS_SET_SETTINGS, setIsSetSettingsSaga)]);
}

export default watchCommonSagas;
