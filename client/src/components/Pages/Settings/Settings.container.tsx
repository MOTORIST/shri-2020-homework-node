import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettings, saveSettings } from '../../../actions/settings';
import { SettingsPage, SettingsPageProps } from './SettingsPage';
import { RootState } from '../../../reducers';
import { Config } from '../../../../../types/Config';

const SettingsContainer = (): React.ReactElement<SettingsPageProps> => {
  const dispatch = useDispatch();

  const { isFetching, isLoaded, entity: settingsData, error } = useSelector(
    (state: RootState) => state.settings,
  );

  const handleOnSaveSettings = (data: Config): void => {
    data.period = +data.period;
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
