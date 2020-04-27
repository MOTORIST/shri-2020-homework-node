import { Types } from '../actions/common';

const getIsSetSettings = () => {
  return localStorage.getItem('isSetSettings') ? true : false;
};

export const initialState = {
  isSetSettings: getIsSetSettings(),
};

export function common(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case Types.SET_IS_SET_SETTINGS:
      return { ...state, isSetSettings: payload };
    default:
      return state;
  }
}
