import React from 'react';
import Theme from './components/Theme';
import { Router, Switch, Route } from 'react-router-dom';
import SettingsPage from './components/Pages/Settings';
import BuildPage from './components/Pages/Build';
import NotFoundPage from './components/Pages/NotFound';
import IndexPage from './components/Pages/Index';
import history from './history';

function App(): React.ReactElement {
  return (
    <Theme>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="/settings" exact>
            <SettingsPage />
          </Route>
          <Route path="/settings" exact>
            <SettingsPage />
          </Route>
          <Route path="/builds/:id" exact>
            <BuildPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
