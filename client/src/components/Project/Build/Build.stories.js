import React from 'react';
import { withKnobs, select, object, boolean } from '@storybook/addon-knobs';
import Build from '.';

export default {
  title: 'Project',
  decorators: [withKnobs],
};

const data = {
  commitMessage: 'fix: (client) create Build component',
  status: 'success',
  buildNumber: 13,
  authorName: 'MOTORIST',
  branchName: 'test-repo',
  commitHash: 'asdsdfd',
  start: '21 янв, 03:06',
  duration: 60,
};

const buildKnobs = () => ({
  data: object('Data', data),
  clickable: boolean('Clickable', false),
  variant: select('Variant', ['---', 'detail']),
});

export const build = () => <Build status="success" {...buildKnobs()} />;
