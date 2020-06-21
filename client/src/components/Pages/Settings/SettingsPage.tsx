import React from 'react';
import SettingsForm from '../../Project/SettingsForm';
import Header from '../../Project/Header';
import Page, { PageContent } from '../../Project/Page';
import { useHistory } from 'react-router-dom';
import Typography from '../../UI/Typography';
import { Config } from '../../../../../types/Config';
import Footer from '../../Project/Footer';
import cn from '../../../libs/classname';
import { useTranslation } from 'react-i18next';

const SettingsPageCn = cn('SettingsPage');

export interface SettingsPageProps {
  settingsFormDefaultValues: Config;
  onSaveSettings: (data: Config) => void;
  isFetching: boolean;
  error: string | null;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  settingsFormDefaultValues,
  onSaveSettings,
  isFetching,
  error,
}) => {
  const { t } = useTranslation(['SettingsPage']);
  const history = useHistory();

  const handleToMainPage = (): void => {
    history.push('/');
  };

  return (
    <Page data-testid="settings-page" className={SettingsPageCn()}>
      <Header title="School CI server" color="secondary" />
      <PageContent>
        {error && (
          <Typography variant="body" color="error">
            {t('failedLoadErrorText')}
          </Typography>
        )}

        <SettingsForm
          isFetching={isFetching}
          defaultValues={settingsFormDefaultValues}
          onSubmit={onSaveSettings}
          onCancel={handleToMainPage}
        />
      </PageContent>
      <Footer />
    </Page>
  );
};
