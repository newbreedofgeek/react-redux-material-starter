import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Import your reducers here
import stations from './stations';
import trains from './trains';
import user from './user';

const rootReducer = combineReducers({
  routing: routerReducer,
  stations,
  trains,
  user,
});

export default rootReducer;
