import { combineReducers } from 'redux';

import { userReducer, REDUCER_NAME as USER_REDUCER_NAME } from './user';
// import the rest of reducers here

export default combineReducers({
  [USER_REDUCER_NAME]: userReducer,
  // include rest of reducers to export them all
});
