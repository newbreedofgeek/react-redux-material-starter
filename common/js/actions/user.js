import * as constants from '../reducers/constants';
import 'whatwg-fetch';

export const login = (formData) => (
  (dispatch) => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/auth', {
      method: 'POST',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: {
        login: true,
        ...formData
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.token) {
        dispatch({
            type: constants.USER_LOGGED_IN,
            payload: {
              ...formData,
              ...data
            }
          }
        );
      }
      else {
        dispatch({
            type: constants.USER_LOG_IN_ERROR
          }
        );
      }
    });
  }
);

export const logout = () => (
  (dispatch) => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/auth', {
      method: 'POST',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: {
        logout: true
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch({
          type: constants.USER_LOGGED_OUT
        }
      );
    });
  }
);
