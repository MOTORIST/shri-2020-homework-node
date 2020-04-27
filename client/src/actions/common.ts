export const Types = {
  SET_IS_SET_SETTINGS: 'SET_IS_SET_SETTINGS',
};

export const setIsSetSettings = value => ({
  type: Types.SET_IS_SET_SETTINGS,
  payload: value,
});
