import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import reducers from './reducer';

export default () => createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk),
    persistState('user')
  )
);
