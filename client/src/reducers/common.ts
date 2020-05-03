import { Types, CommonActionTypes } from '../actions/common';

const getIsSetSettings = (): boolean => {
  return localStorage.getItem('isSetSettings') ? true : false;
};

export interface CommonState {
  isSetSettings: boolean;
}

export const initialState: CommonState = {
  isSetSettings: getIsSetSettings(),
};

export function common(state = initialState, action: CommonActionTypes | undefined): CommonState {
  if (!action) {
    return state;
  }

  const { type, payload } = action;

  switch (type) {
    case Types.SET_IS_SET_SETTINGS:
      return { ...state, isSetSettings: payload };
    default:
      return state;
  }
}
