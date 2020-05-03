import { testSaga } from 'redux-saga-test-plan';
import { setIsSetSettingsSaga } from '../common';
import { Types } from '../../actions/common';

describe('Common saga', () => {
  it('setIsSetSettingsSaga', () => {
    testSaga(setIsSetSettingsSaga, { type: Types.SET_IS_SET_SETTINGS, payload: true })
      .next()
      .call([localStorage, localStorage.setItem], 'isSetSettings', true)
      .next()
      .isDone();
  });
});
