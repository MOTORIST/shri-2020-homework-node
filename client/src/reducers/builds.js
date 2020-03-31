import { Types } from '../actions/builds';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  isFetching: false,
  isLoaded: false,
  entities: null,
  error: null,
};

export function builds(state = initialState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case Types.GET_BUILDS + REQUEST:
      return { ...state, isFetching: true };
    case Types.GET_BUILDS + SUCCESS:
      return { ...state, isFetching: false, isLoaded: true, entities: payload, error: null };
    case Types.GET_BUILDS + FAILURE:
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}