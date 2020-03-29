import React from 'react';
import SettingsForm from '../../Project/SettingsForm';
import Header from '../../Project/Header';
import { PageContent } from '../../Project/Page';
import { useHistory } from 'react-router-dom';

export const SettingsPage = () => {
  const history = useHistory();

  const handleToMainPage = () => {
    history.push('/');
  };

  const handleOnSubmit = data => console.log(data);

  return (
    <>
      <Header title="School CI server" color="secondary" />
      <PageContent>
        <SettingsForm onSubmit={handleOnSubmit} onCancel={handleToMainPage} />
      </PageContent>
    </>
  );
};
