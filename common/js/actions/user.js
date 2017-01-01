import * as constants from '../reducers/constants';
import 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

export const login = (formData) => (
  dispatch => {
    return fetch('https://private-c1cb6-stationmanager.apiary-mock.com/auth', {
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
            type: constants.USER_LOGIN_SUCCESS,
            payload: {
              ...formData,
              ...data
            }
          }
        );
      }
      else {
        dispatch({
            type: constants.USER_LOGIN_ERROR
          }
        );
      }
    });
  }
);

export const logout = () => (
  dispatch => {
    return fetch('https://private-c1cb6-stationmanager.apiary-mock.com/auth', {
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
          type: constants.USER_LOGOUT_SUCCESS
        }
      );
    });
  }
);
