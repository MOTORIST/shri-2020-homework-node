/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { withKnobs, boolean, object } from '@storybook/addon-knobs';
import BuildList from '.';
import { Build } from '../../../../../types/Build';

export default {
  title: 'Project/BuildList',
  decorators: [withKnobs],
};

const buildsData: Omit<Build, 'configurationId'>[] = [
  {
    id: '1855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: 'Success',
    buildNumber: 1,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '2020-03-20T22:39:36.2',
    duration: 60,
  },
  {
    id: '2855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: 'Fail',
    buildNumber: 2,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '2020-03-20T22:39:36.2',
    duration: 60,
  },
  {
    id: '3855b36b5-27ea-4da4-bf53-c2d933e036ca',
    commitMessage: 'fix: (client) create Build component',
    status: 'Waiting',
    buildNumber: 3,
    authorName: 'MOTORIST',
    branchName: 'test-repo',
    commitHash: 'asdsdfd',
    start: '2020-03-20T22:39:36.2',
    duration: 60,
  },
];

const buildListKnobs = () => ({
  isMore: boolean('Is more', false),
  buildsData: object('Builds data', buildsData),
});

export const buildList = () => <BuildList {...buildListKnobs()} />;
export const emptyBuildList = () => <BuildList />;
