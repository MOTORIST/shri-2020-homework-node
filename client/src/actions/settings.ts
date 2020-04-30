import { REQUEST, SUCCESS, FAILURE } from '../constants';
import { Config } from '../../../types/Config';

export const Types = {
  GET_SETTINGS: 'GET_SETTINGS',
  SAVE_SETTINGS: 'SAVE_SETTINGS',
};

export interface FetchSettingsAction {
  type: string;
}

export const fetchSettings = (): FetchSettingsAction => ({
  type: Types.GET_SETTINGS + REQUEST,
});

export interface FetchSettingsSuccessAction {
  type: string;
  payload: Config;
}

export const fetchSettingsSuccess = (data: Config): FetchSettingsSuccessAction => ({
  type: Types.GET_SETTINGS + SUCCESS,
  payload: data,
});

export interface FetchSettingsFailureAction {
  type: string;
  error: string;
}

export const fetchSettingsFailure = (error: string): FetchSettingsFailureAction => ({
  type: Types.GET_SETTINGS + FAILURE,
  error,
});

export interface SaveSettingsAction {
  type: string;
  values: Config;
}

export const saveSettings = (values: Config): SaveSettingsAction => ({
  type: Types.SAVE_SETTINGS + REQUEST,
  values,
});

interface SaveSettingsSuccessAction {
  type: string;
  payload: Config;
}

export const saveSettingsSuccess = (values: Config): SaveSettingsSuccessAction => ({
  type: Types.SAVE_SETTINGS + SUCCESS,
  payload: values,
});

export interface SaveSettingsFailureAction {
  type: string;
  error: string;
}

export const saveSettingsFailure = (error: string): SaveSettingsFailureAction => ({
  type: Types.SAVE_SETTINGS + FAILURE,
  error,
});
