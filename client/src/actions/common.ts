export const Types = {
  SET_IS_SET_SETTINGS: 'SET_IS_SET_SETTINGS',
};

export type CommonConstants = typeof Types;

export interface SetIsSetSettingsAction {
  type: CommonConstants['SET_IS_SET_SETTINGS'];
  payload: boolean;
}

export const setIsSetSettings = (value: boolean): SetIsSetSettingsAction => ({
  type: Types.SET_IS_SET_SETTINGS,
  payload: value,
});

export type CommonActionTypes = SetIsSetSettingsAction;
