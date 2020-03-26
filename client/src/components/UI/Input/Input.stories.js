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
});

export const input = () => (
  <Input placeholder={text('Placeholder', 'Placeholder text')} {...inputKnobs()} />
);
