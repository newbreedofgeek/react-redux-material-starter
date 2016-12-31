import * as constants from '../reducers/constants';
import 'whatwg-fetch';

export const getStations = () => (
  (dispatch) => {
    dispatch({
      type: constants.STATIONS_CLEAR
    });

    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/stations', {
      method: 'GET',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // data returned from the mock api server is static, so locally mock it so app works nicely
      data = [];

      dispatch({
        type: constants.STATIONS_GET,
        payload: data
      });
    });
  }
);

export const updateStation = (formData) => (
  (dispatch) => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/stations', {
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
      return res.json();
    })
    .then((data) => {
      // data returned from the mock api server is static, so locally mock it so app works nicely
      data = [{
        id: formData.id,
        name: formData.name,
        address: {
          street: formData.address.street,
          suburb: formData.address.suburb,
          postcode: formData.address.postcode,
          state: formData.address.state,
        },
      }];

      dispatch({
        type: constants.STATION_UPDATE,
        payload: data
      });
    });
  }
);

export const saveStation = (formData) => (
  (dispatch) => {
    fetch('https://private-c1cb6-stationmanager.apiary-mock.com/stations', {
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
      return res.json();
    })
    .then((data) => {
      // data returned from the mock api server is static, so locally mock it so app works nicely
      data = [{
        name: formData.name,
        address: {
          street: formData.address.street,
          suburb: formData.address.suburb,
          postcode: formData.address.postcode,
          state: formData.address.state,
        },
      }];

      dispatch({
        type: constants.STATION_SAVED,
        payload: data
      });
    });
  }
);
