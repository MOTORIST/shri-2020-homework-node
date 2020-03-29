import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import BuildList from '../../Project/BuildList';
import { useHistory } from 'react-router-dom';
import { buildsData } from './data.mock';

export const BuildsPage = () => {
  const history = useHistory();

  const handleToSettings = () => {
    history.push('/settings');
  };

  const handleRunBuild = () => {
    console.log('Run build');
  };

  return (
    <>
      <Header title="repo name">
        <ButtonGroups>
          <Button icon="play" iconVariant="left" size="s" onClick={handleRunBuild}>
            Run build
          </Button>
          <Button icon="settings" iconVariant="only" size="s" onClick={handleToSettings} />
        </ButtonGroups>
      </Header>
      <PageContent>
        <BuildList buildsData={buildsData} />
      </PageContent>
    </>
  );
};
