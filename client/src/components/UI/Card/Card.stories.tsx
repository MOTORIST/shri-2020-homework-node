/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Card from '.';
import './Card.post.css';
import './_clickable/Card_clickable.post.css';

export default {
  title: 'Project',
  decorators: [withKnobs],
};

const cardKnobs = () => ({
  clickable: boolean('Clickable', false),
});

export const card = () => <Card {...cardKnobs()}>{text('Text', 'Text')}</Card>;
