import { builds as buildsReducer, initialState } from '../builds';
import { REQUEST, SUCCESS, FAILURE } from '../../constants';
import {
  Types,
  fetchBuilds,
  fetchBuildSuccess,
  fetchBuildsSuccess,
  fetchBuildsFailure,
  fetchBuild,
  fetchBuildFailure,
} from '../../actions/builds';
import { buildsData, buildsDataObject } from '../../tests/fake-data/builds.fake-data';

describe('Builds reducer', () => {
  it('should return init state an unhandled action', () => {
    const nextState = buildsReducer(initialState, {});

    expect(nextState).toEqual(initialState);
  });

  it(Types.GET_BUILDS + REQUEST, () => {
    const nextState = buildsReducer(initialState, fetchBuilds());

    expect(nextState).toEqual({ ...initialState, isFetching: true });
  });

  it(Types.GET_BUILDS + SUCCESS, () => {
    const currentState = { ...initialState, isFetching: true };

    const equalState = {
      ...currentState,
      isFetching: false,
      isLoaded: true,
      count: buildsData.length,
      isMore: true,
      entities: buildsDataObject,
    };

    const nextState = buildsReducer(currentState, fetchBuildsSuccess(buildsData));

    expect(nextState).toEqual(equalState);
  });

  it(Types.GET_BUILDS + FAILURE, () => {
    const currentState = { ...initialState, isFetching: true };
    const error = 'Error message';
    const equalState = { ...currentState, isFetching: false, error };

    const nextState = buildsReducer(currentState, fetchBuildsFailure(error));

    expect(nextState).toEqual(equalState);
  });

  it(Types.GET_BUILD + REQUEST, () => {
    const equalState = { ...initialState, isFetching: true };

    const nextState = buildsReducer(initialState, fetchBuild('idBuild'));

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
      entities: { [buildData.id]: buildData },
    };

    const nextState = buildsReducer(currentState, fetchBuildSuccess(buildData));

    expect(nextState).toEqual(equalState);
  });

  it(Types.GET_BUILD + FAILURE, () => {
    const currentState = { ...initialState, isFetching: true };
    const error = 'Error message';
    const equalState = { ...currentState, isFetching: false, error };

    const nextState = buildsReducer(currentState, fetchBuildFailure(error));

    expect(nextState).toEqual(equalState);
  });
});
