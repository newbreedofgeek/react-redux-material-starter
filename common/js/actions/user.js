import * as constants from '../reducers/constants';
import { dataToQS } from '../lib/util';
import 'whatwg-fetch';

export function login(formData) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
          type: constants.USER_LOGGED_IN,
          payload: {
            ...formData
          }
        }
      );
    }, 2000);
  };
}

export function logout() {
  return {
    type: constants.USER_LOGGED_OUT
  };
}
