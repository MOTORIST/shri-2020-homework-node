/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Container from '.';
import Card from '../Card';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const containerKnobs = () => ({
  distribute: select('Distribute', ['between', 'center'], undefined),
  arrange: select('Arrange', ['col', 'row'], undefined),
  height: select('Height', ['full'], undefined),
  spaceH: select('SpaceH', ['s'], undefined),
  verticalAlign: select('verticalAlign', ['center'], undefined),
});

export const container = () => (
  <Container {...containerKnobs()}>
    <Card>--------01---------</Card>
    <Card>--------02---------</Card>
  </Container>
);
