import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import Build from '../../Project/Build';
import Code from '../../UI/Code';
import cn from '../../../libs/classname';
import { buildData, logsData } from './data.mock';
import { useHistory } from 'react-router-dom';
import './Detail/BuildPage-Detail.post.css';

const BuildPageCn = cn('BuildPage');

export const BuildPage = () => {
  const history = useHistory();

  const handleToSettings = () => {
    history.push('/settings');
  };

  const handleRebuild = () => {
    console.log('rebuild');
  };

  return (
    <>
      <Header title="repo name">
        <ButtonGroups>
          <Button icon="rebuild" iconVariant="left" size="s" onClick={handleRebuild}>
            Rebuild
          </Button>
          <Button icon="settings" iconVariant="only" size="s" onClick={handleToSettings} />
        </ButtonGroups>
      </Header>
      <PageContent>
        <Build className={BuildPageCn('Detail')} data={buildData} />
        <Code>{logsData}</Code>
      </PageContent>
    </>
  );
};
