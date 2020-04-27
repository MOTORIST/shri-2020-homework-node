import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettings, saveSettings } from '../../../actions/settings';
import { SettingsPage } from './SettingsPage';

const SettingsContainer = () => {
  const dispatch = useDispatch();

  const { isFetching, isLoaded, entity: settingsData, error } = useSelector(
    state => state.settings
  );

  const handleOnSaveSettings = data => {
    data.period = Number.parseInt(data.period);
    dispatch(saveSettings(data));
  };

  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchSettings());
    }
  }, [dispatch, isLoaded]);

  return (
    <SettingsPage
      isFetching={isFetching}
      settingsFormDefaultValues={settingsData}
      error={error}
      onSaveSettings={handleOnSaveSettings}
    />
  );
};

export default SettingsContainer;
