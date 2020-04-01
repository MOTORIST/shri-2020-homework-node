import { Types } from '../actions/settings';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

const defaultValues = {
  repoName: '',
  buildCommand: '',
  mainBranch: '',
  period: null,
};

const initialState = {
  isFetching: false,
  isLoaded: false,
  entities: defaultValues,
  error: null,
};

export function settings(state = initialState, action) {
  const { type, payload, error } = action;
  switch (type) {
    case Types.GET_SETTINGS + REQUEST:
      return { ...state, isFetching: true };
    case Types.GET_SETTINGS + SUCCESS:
      return { ...state, entities: payload, isFetching: false, isLoaded: true, error: null };
    case Types.GET_SETTINGS + FAILURE:
      return { ...state, isFetching: false, error };
    case Types.SAVE_SETTINGS + REQUEST:
      return { ...state, isFetching: true };
    case Types.SAVE_SETTINGS + SUCCESS:
      return { ...state, isFetching: false, isLoaded: true, entities: payload };
    case Types.SAVE_SETTINGS + FAILURE:
      return { ...state, isFetching: false, error };
    default:
      return state;
  }
}
