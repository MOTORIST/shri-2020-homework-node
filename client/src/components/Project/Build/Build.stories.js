import React from 'react';
import { withKnobs, select, object, boolean, button } from '@storybook/addon-knobs';
import Build from '.';

export default {
  title: 'Project',
  decorators: [withKnobs],
};

const data = {
  id: 'gdfg-dfgdfg-dfgdfg-dfgdg',
  commitMessage: 'fix: (client) create Build component',
  status: 'success',
  buildNumber: 13,
  authorName: 'MOTORIST',
  branchName: 'test-repo',
  commitHash: 'asdsdfd',
  start: '2020-03-20T22:39:36.2',
  duration: 60,
};

const buildKnobs = () => ({
  data: object('Data', data),
  variant: select('Variant', ['---', 'detail']),
});

const handleOnClick = id => {
  console.log('build', id);
};

export const build = () => <Build status="success" onClick={handleOnClick} {...buildKnobs()} />;
