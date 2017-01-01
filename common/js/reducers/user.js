import * as constants from './constants';

const defaultState = {};

const user = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.USER_LOGIN_SUCCESS: {
      return {
        ...payload,
        ...state
      };
    }

    case constants.USER_LOGIN_ERROR: {
      return defaultState;
    }

    case constants.USER_LOGOUT_SUCCESS: {
      return defaultState;
    }

    default: {
      return state;
    }
  }
};

export default user;
