import { call } from 'redux-saga/effects';

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
export const expectErrorSaga = (saga: any, ...sagaArgs: any[]) => ({
  toThrowError: (expectedError: Error) => {
    let errorWasThrown = false;

    return function* () {
      try {
        yield call<any>(saga, ...sagaArgs);
      } catch (e) {
        errorWasThrown = true;
        expect(e).toEqual(expectedError);
      } finally {
        if (!errorWasThrown) {
          // eslint-disable-next-line no-unsafe-finally
          throw new Error('Error was expected, but was not thrown by saga');
        }
      }
    };
  },
});
