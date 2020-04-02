import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import BuildList from '../../Project/BuildList';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../UI/Modal';
import NewBuildForm from '../../Project/NewBuildForm';
import webApi from '../../../api';

export const BuildsPage = ({ buildsData, repoName, isMore, onLoadMore }) => {
  const history = useHistory();
  const { openModal, closeModal, isOpen, Modal } = useModal({ background: true });

  const handleToSettings = () => {
    history.push('/settings');
  };

  const handleOnSubmit = ({ commitHash }) => {
    webApi(`builds/${commitHash}`, 'POST')
      .then(({ data: { data } }) => {
        history.push(`/builds/${data.id}`);
      })
      .catch(error => {
        console.log(error);
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
        <BuildList buildsData={buildsData} isMore={isMore} onLoadMore={onLoadMore} />
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
