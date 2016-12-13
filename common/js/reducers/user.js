import * as constants from './constants';

const defaultState = {};

const train = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.USER_LOGGED_IN:
    return payload;

    case constants.USER_LOG_IN_ERROR:
    return {};

    case constants.USER_LOGGED_OUT:
    return {};

    default:
      return state;
  }
};

export default train;
