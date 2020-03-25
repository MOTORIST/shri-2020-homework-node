import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import IconPlus, { IconPlusContent } from '.';
import Icon from '../Icon';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const iconPlusKnobs = () => ({
  distance: select('Distance', ['---', 'xs']),
});

export const iconPlus = () => (
  <IconPlus {...iconPlusKnobs()}>
    <Icon name="user" />
    <IconPlusContent>text</IconPlusContent>
  </IconPlus>
);
