import React from 'react';
import { addDecorator } from '@storybook/react';
import Theme from '../src/components/Theme';

addDecorator(storyFn => <Theme>{storyFn()}</Theme>);
