/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Button } from './Button';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const defaultButtonKnobs = () => ({
  color: select('Color', ['default', 'primary'], 'default'),
  disabled: boolean('Disabled', false),
  full: boolean('Full', false),
  iconVariant: select('Icon variant', ['clear', 'left', 'only'], undefined),
  icon: select(
    'Icon',
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
    undefined,
  ),
  iconColor: select(
    'Icon color',
    ['default', 'error', 'secondary', 'success', 'warning'],
    'default',
  ),
  size: select('Size', ['s', 'm'], 'm'),
});

export const defaultButton = () => <Button {...defaultButtonKnobs()}>default</Button>;
