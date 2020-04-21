import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import Build from '../../Project/Build';
import Code from '../../UI/Code';
import cn from '../../../libs/classname';
import { useHistory } from 'react-router-dom';
import Page from '../../Project/Page';
import Footer from '../../Project/Footer';
import './Detail/BuildPage-Detail.post.css';

const BuildPageCn = cn('BuildPage');

export const BuildPage = ({ repoName, buildData, logsData, onRebuild }) => {
  const history = useHistory();

  const handleToSettings = () => {
    history.push('/settings');
  };

  const handleRebuild = () => {
    onRebuild(buildData);
  };

  return (
    <Page data-testid="build-page" className={BuildPageCn()}>
      <Header title={repoName}>
        <ButtonGroups>
          <Button icon="rebuild" iconVariant="left" size="s" onClick={handleRebuild}>
            Rebuild
          </Button>
          <Button icon="settings" iconVariant="only" size="s" onClick={handleToSettings} />
        </ButtonGroups>
      </Header>
      <PageContent>
        {buildData && <Build className={BuildPageCn('Detail')} data={buildData} />}
        {logsData && <Code>{logsData}</Code>}
      </PageContent>
      <Footer/>
    </Page>
  );
};
