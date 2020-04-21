import produce from 'immer';
import { Types } from '../actions/settings';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

const defaultValues = {
  repoName: '',
  buildCommand: '',
  mainBranch: '',
  period: null,
};

export const initialState = {
  isFetching: false,
  isLoaded: false,
  entity: defaultValues,
  error: null,
};

export const settings = produce((draft, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case Types.GET_SETTINGS + REQUEST:
      draft.isFetching = true;
      break;
    case Types.GET_SETTINGS + SUCCESS:
      draft.isFetching = false;
      draft.isLoaded = true;
      draft.entity = payload;
      break;
    case Types.GET_SETTINGS + FAILURE:
      draft.isFetching = false;
      draft.error = error;
      break;
    case Types.SAVE_SETTINGS + REQUEST:
      draft.isFetching = true;
      break;
    case Types.SAVE_SETTINGS + SUCCESS:
      draft.isFetching = false;
      draft.isLoaded = true;
      draft.entity= payload;
      break;
    case Types.SAVE_SETTINGS + FAILURE:
      draft.isFetching = false;
      draft.error = error;
      break;
    default:
  }
}, initialState);
