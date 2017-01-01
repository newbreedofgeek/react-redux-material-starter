import * as constants from '../reducers/constants';
import 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

export const getTrains = () => (
  dispatch => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/trains', {
      method: 'GET',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then((data) => {
      // data returned from the mock api server is static, so locally mock it so app works nicely
      data = [];

      dispatch({
        type: constants.TRAINS_GET,
        payload: data
      });
    });
  }
);

export const updateTrain = (formData) => (
  dispatch => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/trains', {
      method: 'POST',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: {
        ...formData
      }
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then((data) => {
      // data returned from the mock api server is static, so locally mock it so app works nicely
      data = [{
        id: formData.id,
        stationId: formData.stationId,
        name: formData.name,
        role: formData.role,
        email: formData.email,
        password: formData.password,
        pin: formData.pin
      }];

      dispatch({
        type: constants.TRAIN_UPDATE,
        payload: data
      });
    });
  }
);

export const saveTrain = (formData) => (
  dispatch => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/trains', {
      method: 'POST',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: {
        ...formData
      }
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then((data) => {
      // data returned from the mock api server is static, so locally mock it so app works nicely
      data = [{
        stationId: formData.stationId,
        name: formData.name,
        role: formData.role,
        email: formData.email,
        password: formData.password,
        pin: formData.pin
      }];

      dispatch({
        type: constants.TRAIN_SAVED,
        payload: data
      });
    });
  }
);
