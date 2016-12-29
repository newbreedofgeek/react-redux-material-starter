import * as constants from './constants';

const defaultState = {};

const user = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.USER_LOGGED_IN:
      return {
        ...payload,
        ...state
      };

    case constants.USER_LOG_IN_ERROR:
      return defaultState;

    case constants.USER_LOGGED_OUT:
      return defaultState;

    default:
      return state;
  }
};

export default user;
