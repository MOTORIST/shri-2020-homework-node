import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { getBuildsSaga, getBuildSaga } from '../builds';
import api from '../../api';
import { fetchBuildsSuccess, fetchBuildsFailure, fetchBuildSuccess, fetchBuildFailure } from '../../actions/builds';
import { buildsData } from '../../tests/fake-data/builds.fake-data';
import { expectErrorSaga } from '../../tests/utils/saga';

describe('Builds saga', () => {
    const fakeError = new Error('Fake error');

    describe('getBuildsSaga', () => {
        it('run without exception', () => {
            const sagaArgs = {offset: 0, limit: 10};
            const fakeBuildsRes = {data: {data: buildsData}};

            return expectSaga(getBuildsSaga, sagaArgs)
                .provide([
                    [matchers.call.fn(api.builds.getBuilds), fakeBuildsRes],
                ])
                .call(api.builds.getBuilds, sagaArgs.offset, sagaArgs.limit)
                .put(fetchBuildsSuccess(buildsData))
                .run();
        });

        it('run with exception', () => {
            const sagaArgs = {offset: 0, limit: 10};
            const saga = expectErrorSaga(getBuildsSaga, sagaArgs).toThrowError(fakeError);

            return expectSaga(saga)
                .provide([
                    [matchers.call.fn(api.builds.getBuilds), throwError(fakeError)],
                ])
                .call(api.builds.getBuilds, sagaArgs.offset, sagaArgs.limit)
                .put(fetchBuildsFailure('Failed to fetch builds'))
                .run();
        });
    });

    describe('getBuildSaga', () => {
        const sagaArgs = {buildId: 'buildId'};
        it('run without exception', () => {
            const buildData = buildsData[0];
            const fakeBuildRes = {data: {data: buildData}};

            return expectSaga(getBuildSaga, sagaArgs)
                .provide([
                    [matchers.call.fn(api.builds.getBuild), fakeBuildRes],
                ])
                .call(api.builds.getBuild, sagaArgs.buildId)
                .put(fetchBuildSuccess(buildData))
                .run();
        });

        it('run with exception', () => {
            const saga = expectErrorSaga(getBuildSaga, sagaArgs).toThrowError(fakeError);

            return expectSaga(saga)
                .provide([
                    [matchers.call.fn(api.builds.getBuild), throwError(fakeError)]
                ])
                .call(api.builds.getBuild, sagaArgs.buildId)
                .put(fetchBuildFailure('Failed to fetch build'))
                .run();
        });
    });
});