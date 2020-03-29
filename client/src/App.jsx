import React from 'react';
import Theme from './components/Theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from './components/Project/Page';
import Footer from './components/Project/Footer';
import MainPage from './components/Pages/Main';
import SettingsPage from './components/Pages/Settings';
import BuildsPage from './components/Pages/Builds';
import BuildPage from './components/Pages/Build';
import NotFoundPage from './components/Pages/NotFound';

function App() {
  return (
    <Theme>
      <Router>
        <Page>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/settings" exact>
              <SettingsPage />
            </Route>
            <Route path="/settings" exact>
              <SettingsPage />
            </Route>
            <Route path="/builds" exact>
              <BuildsPage />
            </Route>
            <Route path="/builds/:id">
              <BuildPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </Page>
      </Router>
    </Theme>
  );
}

export default App;
