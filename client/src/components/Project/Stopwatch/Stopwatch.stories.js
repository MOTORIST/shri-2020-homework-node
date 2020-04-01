import React from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Stopwatch from '.';

export default {
  title: 'Project',
  decorators: [withKnobs],
};

const stopwatchKnobs = () => ({
  duration: number('Duration', 1000),
});

export const stopwatch = () => <Stopwatch {...stopwatchKnobs()} />;
