import React from 'react';
import { addDecorator } from '@storybook/react';
import Theme from '../src/components/Theme';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';

addDecorator(storyFn => <Theme>{storyFn()}</Theme>);

addDecorator(story => (
  <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
    <Route path="/" component={() => story()} />
  </Router>
));
