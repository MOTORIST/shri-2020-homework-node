import { testSaga } from 'redux-saga-test-plan';
import { setIsSetSettingsSaga } from '../common';

describe('Common saga', () => {
    it('setIsSetSettingsSaga', () => {
        testSaga(setIsSetSettingsSaga, { value: true })
            .next()
            .call([localStorage, localStorage.setItem], 'isSetSettings', true)
            .next()
            .isDone();
    });
});