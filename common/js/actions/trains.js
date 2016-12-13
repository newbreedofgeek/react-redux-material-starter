import * as constants from '../reducers/constants';
import { dataToQS } from '../lib/util';
import 'whatwg-fetch';

export function getTrains() {
  return (dispatch) => {
    dispatch({
      type: constants.TRAINS_CLEAR
    });

    setTimeout(() => {
      // this is where you ajax to the server

      const data = []; // your trains array

      dispatch({
        type: constants.TRAINS_GET,
        payload: data
      });
    }, 2000);
  };
}

export function updateTrain(formData) {
  return (dispatch) => {

    setTimeout(() => {
      // this is where you ajax to the server

      const data = {
        success: true,
        newTrain: [{
          id: formData.id,
          stationId: formData.stationId,
          name: formData.name,
          role: formData.role,
          email: formData.email,
          password: formData.password,
          pin: formData.pin
        }
      ]
      };

      // if not 'success' handle a fail case

      // or if its a success
      dispatch({
        type: constants.TRAIN_UPDATE,
        payload: data.newTrain // only send the new train back
      });
    }, 2000);
  };
}

export function saveTrain(formData) {
  return (dispatch) => {
    setTimeout(() => {
      // this is where you ajax to the server

      const data = {
        success: true,
        newTrain: [{
          id: +new Date(),
          stationId: formData.stationId,
          name: formData.name,
          role: formData.role,
          email: formData.email,
          password: formData.password,
          pin: formData.pin
        }]
      };

      // if not 'success' handle a fail case

      // or if its a success
      dispatch({
        type: constants.TRAIN_SAVED,
        payload: data.newTrain // only send the new clinc back
      });
    }, 2000);
  };
}
