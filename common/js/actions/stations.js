import * as constants from '../reducers/constants';
import { dataToQS } from '../lib/util';
import 'whatwg-fetch';

export const getStations = () => (
  (dispatch) => {
    dispatch({
      type: constants.STATIONS_CLEAR
    });

    setTimeout(() => {
      // this is where you ajax to the server

      const data = []; // your stations array

      dispatch({
        type: constants.STATIONS_GET,
        payload: data
      });
    }, 2000);
  }
);

export const updateStation = (formData) => {
  return (dispatch) => {
    setTimeout(() => {
      // this is where you ajax to the server
      const data = {
        success: true,
        newStation: [{
          id: formData.id,
          name: formData.name,
          address: {
            street: formData.address.street,
            suburb: formData.address.suburb,
            postcode: formData.address.postcode,
            state: formData.address.state,
          },
        }]
      };

      // if not 'success' handle a fail case

      // or if its a success
      dispatch({
        type: constants.STATION_UPDATE,
        payload: data.newStation // only send the new clinc back
      });
    }, 2000);
  };
};

export const saveStation = (formData) => (
  (dispatch) => {
    setTimeout(() => {
      // this is where you ajax to the server

      const data = {
        success: true,
        newStation: [{
          id: +new Date(),
          name: formData.name,
          address: {
            street: formData.address.street,
            suburb: formData.address.suburb,
            postcode: formData.address.postcode,
            state: formData.address.state,
          },
        }]
      };

      // if not 'success' handle a fail case

      // or if its a success
      dispatch({
        type: constants.STATION_SAVED,
        payload: data.newStation // only send the new clinc back
      });
    }, 2000);
  }
);
