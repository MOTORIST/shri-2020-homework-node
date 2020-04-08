import produce from 'immer';
import { Types } from '../actions/builds';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  entities: {},
  error: null,
  count: 0,
  isMore: true,
};

export const builds = produce((draft, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case Types.GET_BUILDS + REQUEST:
      draft.isFetching = true;
      break;
    case Types.GET_BUILDS + SUCCESS:
      draft.isFetching = false;
      draft.isLoaded = true;
      draft.count += payload.length;
      draft.isMore = payload.length > 0;
      payload.forEach(build => draft.entities[build.id] = build);
      break;
    case Types.GET_BUILDS + FAILURE:
      draft.isFetching = false;
      draft.error = error;
      break;
    case Types.GET_BUILD + REQUEST:
      draft.isFetching = true;
      break;
    case Types.GET_BUILD + SUCCESS:
      draft.isFetching = false;
      draft.entities[payload.id] = payload;
      break;
    case Types.GET_BUILD + FAILURE:
      draft.isFetching = false;
      draft.error = error;
      break;
    default:
  }
}, initialState);

export const getBuildById = id => state => {
  return state.builds.entities[id];
}

export const getBuilds = state => {
  return Object.values(state.builds.entities).sort((a, b) => b.buildNumber - a.buildNumber );
}