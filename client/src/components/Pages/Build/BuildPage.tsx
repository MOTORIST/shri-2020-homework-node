import React from 'react';
import Page, { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import Build from '../../Project/Build';
import Code from '../../UI/Code';
import cn from '../../../libs/classname';
import { useHistory } from 'react-router-dom';
import Footer from '../../Project/Footer';
import { Config } from '../../../../../types/Config';
import { Build as IBuild } from '../../../../../types/Build';
import { useTranslation } from 'react-i18next';

import './Detail/BuildPage-Detail.post.css';

const BuildPageCn = cn('BuildPage');

export interface BuildPageProps {
  repoName: Config['repoName'];
  buildData: IBuild;
  logsData?: string | null;
  onRebuild: (commitHash: Pick<IBuild, 'commitHash'>) => void;
}

export const BuildPage: React.FC<BuildPageProps> = ({
  repoName,
  buildData,
  logsData,
  onRebuild,
}) => {
  const history = useHistory();
  const { t } = useTranslation(['BuildPage']);

  const handleToSettings = (): void => {
    history.push('/settings');
  };

  const handleRebuild = (): void => {
    onRebuild(buildData);
  };

  return (
    <Page data-testid="build-page" className={BuildPageCn()}>
      <Header title={repoName}>
        <ButtonGroups>
          <Button icon="rebuild" iconVariant="left" size="s" onClick={handleRebuild}>
            {t('rebuildButton')}
          </Button>
          <Button icon="settings" iconVariant="only" size="s" onClick={handleToSettings} />
        </ButtonGroups>
      </Header>
      <PageContent>
        {buildData && <Build className={BuildPageCn('Detail')} data={buildData} />}
        {logsData && <Code>{logsData}</Code>}
      </PageContent>
      <Footer />
    </Page>
  );
};
