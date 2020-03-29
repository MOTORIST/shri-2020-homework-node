import React from 'react';
import { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import Typography from '../../UI/Typography';
import Icon from '../../UI/Icon';
import { useHistory } from 'react-router-dom';
import cn from '../../../libs/classname';
import './Description/MainPage-Description.post.css';
import './Logo/MainPage-Logo.post.css';

const MainPageCn = cn('MainPage');

export const MainPage = () => {
  const history = useHistory();

  const handleToSettings = () => {
    history.push('/settings');
  };

  return (
    <>
      <Header title="School CI server" color="secondary">
        <ButtonGroups>
          <Button icon="settings" iconVariant="left" size="s" onClick={handleToSettings}>
            Settings
          </Button>
        </ButtonGroups>
      </Header>
      <PageContent contentPosition="center" arrange="col">
        <Icon className={MainPageCn('Logo')} name="logo" size="7xl" color="secondary" />
        <Typography className={MainPageCn('Description')} variant="body" align="center">
          Configure repository connection and synchronization settings
        </Typography>
        <Button color="primary" size="m" onClick={handleToSettings}>
          Open settings
        </Button>
      </PageContent>
    </>
  );
};
