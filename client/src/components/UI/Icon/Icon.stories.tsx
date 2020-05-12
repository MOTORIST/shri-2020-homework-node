/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Icon } from './Icon';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const iconKnobs = () => ({
  color: select('Color', ['default', 'error', 'secondary', 'success', 'warning'], 'default'),
  size: select('Size', ['s', 'm', 'l', 'xl', '7xl'], 'm'),
  name: select(
    'Name',
    [
      'calendar',
      'clear',
      'clock',
      'codeCommit',
      'done',
      'fail',
      'logo',
      'play',
      'rebuild',
      'settings',
      'stopwatch',
      'user',
    ],
    'user',
  ),
});

export const icon = () => <Icon {...iconKnobs()} />;
