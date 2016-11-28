import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import trains from './trains';
import users from './users';
import user from './user';
import admin from './admin';

const rootReducer = combineReducers({
  routing: routerReducer,
  trains,
  users,
  user,
  admin
});

export default rootReducer;
