import * as constants from './constants';

const defaultState = {};

const user = (state = defaultState, { type, payload }) => {

  console.log('user reducer = ' + type);

  switch (type) {
    case constants.USER_LOGGED_IN:
      return {
        ...defaultState,
        ...payload,
        isLoggedIn: true
      };

    case constants.USER_LOG_IN_ERROR:
      return {
        ...defaultState,
        ...payload,
      };

    case constants.USER_LOGGED_OUT:
      return {
        ...defaultState
      };

    default:
      return state;
  }
};

export default user;
