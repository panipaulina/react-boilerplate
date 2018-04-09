import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute }  from '../../components/PrivateRoute';
import { Home } from '../Home';
import { LOGIN_ROUTE, REMIND_PASSWORD_ROUTE } from '../../lib/';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import './App.sass';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route path={`(${LOGIN_ROUTE}|${REMIND_PASSWORD_ROUTE})`} />
            <PrivateRoute path='/' component={Home} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
