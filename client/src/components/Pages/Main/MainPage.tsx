import React from 'react';
import Page, { PageContent } from '../../Project/Page';
import Header from '../../Project/Header';
import ButtonGroups from '../../UI/ButtonGroups';
import Button from '../../UI/Button';
import Typography from '../../UI/Typography';
import Icon from '../../UI/Icon';
import { useHistory } from 'react-router-dom';
import cn from '../../../libs/classname';
import Footer from '../../Project/Footer';
import { useTranslation } from 'react-i18next';

import './Description/MainPage-Description.post.css';
import './Logo/MainPage-Logo.post.css';

const MainPageCn = cn('MainPage');

export const MainPage: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation(['MainPage']);

  const handleToSettings = (): void => {
    history.push('/settings');
  };

  return (
    <Page data-testid="main-page" className={MainPageCn()}>
      <Header title="School CI server" color="secondary">
        <ButtonGroups>
          <Button
            data-testid="open-settings-icon-button"
            icon="settings"
            iconVariant="left"
            size="s"
            onClick={handleToSettings}
          >
            {t('buttons.settings')}
          </Button>
        </ButtonGroups>
      </Header>
      <PageContent contentPosition="center" arrange="col">
        <Icon className={MainPageCn('Logo')} name="logo" size="7xl" color="secondary" />
        <Typography className={MainPageCn('Description')} variant="body" align="center">
          {t('description')}
        </Typography>
        <Button
          data-testid="open-settings-button"
          color="primary"
          size="m"
          onClick={handleToSettings}
        >
          {t('buttons.openSettings')}
        </Button>
      </PageContent>
      <Footer />
    </Page>
  );
};
