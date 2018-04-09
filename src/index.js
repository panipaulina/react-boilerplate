import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { App } from './frames/App';

let store = configureStore(); //eslint-disable-line

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('root')
);
