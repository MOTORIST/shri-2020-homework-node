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
import api from '../../../api';

export const BuildsPage = ({ buildsData, repoName, isMore, onLoadMore, isFetchingBuilds }) => {
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
    <>
      <Header title={repoName}>
        <ButtonGroups>
          <Button icon="play" iconVariant="left" size="s" onClick={openModal}>
            Run build
          </Button>
          <Button icon="settings" iconVariant="only" size="s" onClick={handleToSettings} />
        </ButtonGroups>
      </Header>
      <PageContent>
        {buildsData.length === 0 && !isFetchingBuilds && (
          <Typography variant="body" color="warning">
            You don't have builds. Click "run build" to create new build.
          </Typography>
        )}
        <BuildList
          buildsData={buildsData}
          isMore={isMore}
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
    </>
  );
};

// TODO: add PropTypes
