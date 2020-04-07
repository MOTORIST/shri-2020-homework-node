import React from 'react';
import SettingsForm from '../../Project/SettingsForm';
import PropTypes from 'prop-types';
import Header from '../../Project/Header';
import { PageContent } from '../../Project/Page';
import { useHistory } from 'react-router-dom';
import Typography from '../../UI/Typography';

export const SettingsPage = ({ settingsFormDefaultValues, onSaveSettings, isFetching, error }) => {
  const history = useHistory();

  const handleToMainPage = () => {
    history.push('/');
  };

  return (
    <>
      <Header title="School CI server" color="secondary" />
      <PageContent>
        {error && (
          <Typography variant="body" color="error">
            {error}
          </Typography>
        )}

        <SettingsForm
          isFetching={isFetching}
          defaultValues={settingsFormDefaultValues}
          onSubmit={onSaveSettings}
          onCancel={handleToMainPage}
        />
      </PageContent>
    </>
  );
};

SettingsPage.propTypes = {
  settingsFormDefaultValues: PropTypes.object,
  onSaveSettings: PropTypes.func,
  isFetching: PropTypes.bool,
  error: PropTypes.string,
};
