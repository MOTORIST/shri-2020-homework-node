import {builds as buildsReducer, initialState } from '../builds';
import { REQUEST, SUCCESS, FAILURE } from '../../constants';
import { Types, fetchBuilds, fetchBuildSuccess, fetchBuildsSuccess, fetchBuildsFailure, fetchBuild, fetchBuildFailure } from '../../actions/builds';

describe('Builds reducer', () => {
    const buildsData = [
        {
            id: "9d2e21b9-acb5-4372-9c5a-5006023e5422",
            buildNumber: 2,
            commitMessage: "feat: add errorHandler",
            commitHash: "94cc2a6",
            branchName: "master",
            authorName: "Gerasin Ivan",
            status: "waiting",
        },
        {
            id: "5b840e3b-6ded-493d-abdb-ad0168e3a898",
            buildNumber: 1,
            commitMessage: "feat(build): create build logs cache",
            commitHash: "e23b7e5",
            branchName: "master",
            authorName: "Gerasin Ivan",
            status: "waiting",
        },
        {
            id: "54fc1df0-b935-4247-8b91-bbcb9199ea0a",
            buildNumber: 3,
            commitMessage: "feat: add errorHandler",
            commitHash: "94cc2a6",
            branchName: "master",
            authorName: "Gerasin Ivan",
            status: "waiting",
        }
    ];

    it('should return init state an unhandled action', () => {
        const nextState = buildsReducer(initialState, {});

        expect(nextState).toEqual(initialState);
    });

    it(Types.GET_BUILDS + REQUEST, () => {
        const nextState = buildsReducer(initialState, fetchBuilds());

        expect(nextState).toEqual({...initialState, isFetching: true});
    });

    it(Types.GET_BUILDS + SUCCESS, () => {
        const currentState = {...initialState, isFetching: true};

        const equalState = {
            ...currentState,
            isFetching: false,
            isLoaded: true,
            count: buildsData.length,
            isMore: true,
            entities: buildsData.reduce((obj, b) => {obj[b.id] = b; return obj} , {}),
        };

        const nextState = buildsReducer(currentState, fetchBuildsSuccess(buildsData));

        expect(nextState).toEqual(equalState);
    });

    it(Types.GET_BUILDS + FAILURE, () => {
        const currentState = {...initialState, isFetching: true};
        const error = 'Error message';
        const equalState = {...currentState, isFetching: false, error};

        const nextState = buildsReducer(currentState, fetchBuildsFailure(error));

        expect(nextState).toEqual(equalState);
    });

    it(Types.GET_BUILD + REQUEST, () => {
        const equalState = {...initialState, isFetching: true};

        const nextState = buildsReducer(initialState, fetchBuild());

        expect(nextState).toEqual(equalState);
    });

    it(Types.GET_BUILD + SUCCESS, () => {
        const buildData = buildsData[0];

        const currentState = {
            ...initialState,
            isFetching: true,
        };

        const equalState = {
            ...currentState,
            isFetching: false,
            entities: {[buildData.id]: buildData}
        };

        const nextState = buildsReducer(currentState, fetchBuildSuccess(buildData));

        expect(nextState).toEqual(equalState);
    });

    it(Types.GET_BUILD + FAILURE, () => {
        const currentState = {...initialState, isFetching: true};
        const error = 'Error message';
        const equalState = {...currentState, isFetching: false, error};

        const nextState = buildsReducer(currentState, fetchBuildFailure(error));

        expect(nextState).toEqual(equalState);
    });

});