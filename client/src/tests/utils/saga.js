import { call } from 'redux-saga/effects';

//TODO: refactoring
/**
 * 
 * @param {*} saga 
 * @param  {...any} sagaArgs 
 * @example
 * expectSaga(expectErrorSaga(sagaFunction).toThrow())
 *  .provide([
 *    [matchers.call.fn(func), throwError()]])
 *  .put(.....)
 *  .run();
 */
export const expectErrorSaga = (saga, ...sagaArgs) => ({
    toThrowError: expectedError => {
        let errorWasThrown = false;
  
        return function*() {
          try {
            yield call(saga, ...sagaArgs);
          } catch (e) {
            errorWasThrown = true;
            expect(e).toEqual(expectedError);
          } finally {
            if (!errorWasThrown)
              throw new Error('Error was expected, but was not thrown by saga');
          }
        };
    }
});