import React from 'react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Header from './Header';
import Button from '../../UI/Button';
import ButtonGroups from '../../UI/ButtonGroups';

export default {
  title: 'Project',
  decorators: [withKnobs],
};

const headerKnobs = () => ({
  color: select('Color', ['---', 'secondary']),
});

const title = text(
  'Text',
  'philip1967/my-awesome-repo-with-long-long-long-repo-name philip1967/my-awesome-repo-with-long-long-long-repo-name'
);

export const header = () => (
  <Header title={title} {...headerKnobs()}>
    <ButtonGroups>
      <Button icon="play" iconVariant="left" size="s">
        Run build
      </Button>
      <Button icon="settings" iconVariant="only" size="s" />
    </ButtonGroups>
  </Header>
);
