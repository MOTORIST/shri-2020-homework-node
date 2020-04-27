import { REQUEST, SUCCESS, FAILURE } from '../constants';

export const Types = {
  GET_SETTINGS: 'GET_SETTINGS',
  SAVE_SETTINGS: 'SAVE_SETTINGS',
};

export const fetchSettings = () => ({
  type: Types.GET_SETTINGS + REQUEST,
});

export const fetchSettingsSuccess = data => ({
  type: Types.GET_SETTINGS + SUCCESS,
  payload: data,
});

export const fetchSettingsFailure = error => ({
  type: Types.GET_SETTINGS + FAILURE,
  error,
});

export const saveSettings = values => ({
  type: Types.SAVE_SETTINGS + REQUEST,
  values,
});

export const saveSettingsSuccess = values => ({
  type: Types.SAVE_SETTINGS + SUCCESS,
  payload: values,
});

export const saveSettingsFailure = error => ({
  type: Types.SAVE_SETTINGS + FAILURE,
  error,
});
