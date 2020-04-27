import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import Typography from '.';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const typographyKnobs = () => ({
  nowrap: boolean('Nowrap', false),
  variant: select('Variant', ['body', 'h1', 'h2', 'h3', 'h4'], 'h1'),
  color: select('Color', ['---', 'error', 'secondary', 'success', 'warning']),
  align: select('Align', ['---', 'center']),
});

export const typography = () => (
  <Typography {...typographyKnobs()}>{text('Content', 'I love BEM!')}</Typography>
);
