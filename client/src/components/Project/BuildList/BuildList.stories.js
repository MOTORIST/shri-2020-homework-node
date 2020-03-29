import React from 'react';
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs';
import BuildList from '.';

export default {
  title: 'Project/BuildList',
  decorators: [withKnobs],
};

const buildsData = [
  {
    id: '1855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: 'success',
    buildNumber: 1,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '21 янв, 03:06',
    duration: 60,
  },
  {
    id: '2855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: 'error',
    buildNumber: 2,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '21 янв, 03:06',
    duration: 60,
  },
  {
    id: '3855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: 'warning',
    buildNumber: 3,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '21 янв, 03:06',
    duration: 60,
  },
];

const buildListKnobs = () => ({
  isMore: boolean('Is more', false),
  buildsData: object('Builds data', buildsData),
});

export const buildList = () => <BuildList {...buildListKnobs()} />;
export const emptyBuildList = () => <BuildList />;
