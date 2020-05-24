import React from 'react';
import Page, { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import BuildList from '../../Project/BuildList';
import Typography from '../../UI/Typography';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../UI/Modal';
import NewBuildForm from '../../Project/NewBuildForm';
import Footer from '../../Project/Footer';
import cn from '../../../libs/classname';
import api from '../../../api';
import { Config } from '../../../../../types/Config';
import { Build } from '../../../../../types/Build';
import { useTranslation } from 'react-i18next';

const BuildsPageCn = cn('BuildsPage');

export interface BuildsPageProps {
  repoName: Config['repoName'];
  buildsData: Build[] | null;
  isMore: boolean;
  onLoadMore: () => void;
  isFetchingBuilds: boolean;
  buildsError?: string | null;
}

export const BuildsPage: React.FC<BuildsPageProps> = ({
  repoName,
  buildsData,
  isMore,
  onLoadMore,
  isFetchingBuilds,
  buildsError,
}) => {
  const { t } = useTranslation(['BuildsPage']);
  const history = useHistory();
  const { openModal, closeModal, isOpen, Modal } = useModal({ background: true });

  const handleToSettings = (): void => {
    history.push('/settings');
  };

  const handleToDetailPage = (id: Build['id']): void => {
    history.push(`/builds/${id}`);
  };

  const handleOnSubmit = ({ commitHash }: Pick<Build, 'commitHash'>): void => {
    api.builds
      .runBuild(commitHash)
      .then(({ data: { data } }) => {
        history.push(`/builds/${data.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Page data-testid="builds-page" className={BuildsPageCn()}>
      <Header title={repoName}>
        <ButtonGroups>
          <Button
            data-testid="run-build-button"
            icon="play"
            iconVariant="left"
            size="s"
            onClick={openModal}
          >
            {t('runBuildButton')}
          </Button>
          <Button
            data-testid="settings-button"
            icon="settings"
            iconVariant="only"
            size="s"
            onClick={handleToSettings}
          />
        </ButtonGroups>
      </Header>
      <PageContent>
        {isFetchingBuilds && (
          <Typography data-testid="builds-loader" variant="body" color="secondary">
            {t('loadingBuildsText')}
          </Typography>
        )}
        {!isFetchingBuilds && buildsError && (
          <Typography data-testid="builds-error" variant="body" color="error">
            {t('failedLoadingBuildsText')}
          </Typography>
        )}
        {!isFetchingBuilds && buildsData?.length === 0 && (
          <Typography data-testid="not-builds-message" variant="body" color="warning">
            {t('notBuildsMessage')}
          </Typography>
        )}
        <BuildList
          buildsData={buildsData}
          isMore={!isFetchingBuilds && isMore}
          onLoadMore={onLoadMore}
          onClickBuild={handleToDetailPage}
        />
      </PageContent>
      {isOpen && (
        <Modal>
          {/* TODO: add async validation hash commit */}
          <NewBuildForm onSubmit={handleOnSubmit} onCancel={closeModal} />
        </Modal>
      )}
      <Footer />
    </Page>
  );
};
