import { combineReducers } from 'redux';
import * as actions from './actions';

export const REDUCER_NAME = 'user';

export const userData = (state = [{
  thisIs: 'initialState',
}], action) => {
  switch (action.type) {
    case actions.FETCH_USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  userData,
  // rest of user/auth reducers
});
