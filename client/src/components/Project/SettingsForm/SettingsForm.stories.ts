import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import {} from '@storybook/addon-actions';
import SettingsForm from '.';

export default {
  title: 'Project',
  decorators: [withKnobs],
};

const defaultValues = {
  repoName: '',
  buildCommand: '',
  mainBranch: '',
  period: 10,
};

const settingsFormKnobs = () => ({
  defaultValues: object('Default values', defaultValues),
});

const handleSubmit = data => {
  console.log('---', data);
};

export const settingsForm = () => <SettingsForm onSubmit={handleSubmit} {...settingsFormKnobs()} />;
