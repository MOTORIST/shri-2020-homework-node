/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import ButtonGroups from '.';
import Button from '../Button';

export default {
  title: 'UI',
};

export const buttonGroups = () => (
  <ButtonGroups>
    <Button icon="play" iconVariant="left">
      Run build
    </Button>
    <Button icon="settings" iconVariant="left">
      Settings
    </Button>
  </ButtonGroups>
);
