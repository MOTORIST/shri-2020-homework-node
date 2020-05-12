/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Input from '.';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const inputKnobs = () => ({
  size: select('Size', ['s', 'm'], 'm'),
  clearable: boolean('Clearable', false),
  status: select('status', ['error', 'success'], undefined),
  width: select('width', ['full', '2xs'], 'full'),
});

export const input = () => (
  <Input placeholder={text('Placeholder', 'Placeholder text')} {...inputKnobs()} />
);
