import React from 'react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import Container from '.';
import Card from '../Card';

export default {
  title: 'UI',
  decorators: [withKnobs],
};

const containerKnobs = () => ({
  distribute: select('Distribute', ['---', 'between', 'center']),
  arrange: select('Arrange', ['---', 'col', 'row']),
  height: select('Height', ['---', 'full']),
  spaceH: select('SpaceH', ['---', 's']),
  verticalAlign: select('verticalAlign', ['---', 'center']),
});

export const container = () => (
  <Container {...containerKnobs()}>
    <Card>--------01---------</Card>
    <Card>--------02---------</Card>
  </Container>
);
