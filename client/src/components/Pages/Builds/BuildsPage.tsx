import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import BuildList from '../../Project/BuildList';
import Typography from '../../UI/Typography';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../UI/Modal';
import NewBuildForm from '../../Project/NewBuildForm';
import Page from '../../Project/Page';
import Footer from '../../Project/Footer';
import cn from '../../../libs/classname';
import api from '../../../api';

export const BuildsPage = ({ repoName, buildsData, isMore, onLoadMore, isFetchingBuilds, buildsError }) => {
  const BuildsPageCn = cn('BuildsPage');
  const history = useHistory();
  const { openModal, closeModal, isOpen, Modal } = useModal({ background: true });

  const handleToSettings = () => {
    history.push('/settings');
  };

  const handleToDetailPage = id => {
    history.push(`/builds/${id}`);
  };

  const handleOnSubmit = ({ commitHash }) => {
    api.builds.runBuild(commitHash)
      .then(({ data: { data } }) => {
        history.push(`/builds/${data.id}`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Page data-testid="builds-page" className={BuildsPageCn()}>
      <Header title={repoName}>
        <ButtonGroups>
          <Button data-testid="run-build-button" icon="play" iconVariant="left" size="s" onClick={openModal}>
            Run build
          </Button>
          <Button data-testid="settings-button" icon="settings" iconVariant="only" size="s" onClick={handleToSettings} />
        </ButtonGroups>
      </Header>
      <PageContent>
        {isFetchingBuilds && (
          <Typography data-testid="builds-loader" variant="body" color="secondary">
            Loading builds...
          </Typography>
        )}
        {!isFetchingBuilds && buildsError && (
          <Typography data-testid="builds-error" variant="body" color="error">
            Failed loading builds
          </Typography>
        )}
        {!isFetchingBuilds && buildsData.length === 0 && (
          <Typography data-testid="not-builds-message" variant="body" color="warning">
            You don't have builds. Click "run build" to create new build.
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

// TODO: add PropTypes
