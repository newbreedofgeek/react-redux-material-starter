import * as constants from './constants';
import * as mock from '../mock';

const defaultState = [];
const mockedTrains = mock.trains;

const trains = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.TRAINS_GET:
      // below logic is just to accomodate the static mock api data we get (so UI looks like its updating)
      if (state.length == 0) {
        return [
          ...mockedTrains
        ];
      }
      else {
        return state;
      }

    case constants.TRAIN_UPDATE:
      state = [
        ...state.filter((i) => (i.id != payload[0].id)), // payload has an array of the item that updated, use that to remove it from state without mutating
        ...payload
      ];

      return state;

    case constants.TRAINS_CLEAR:
      return defaultState;

    case constants.TRAIN_SAVED:
      payload[0].id = state.reduce((t, i) => Math.max(t, i.id), - 1) + 1; // increment sequential id

      state = [
        ...state,
        ...payload
      ];

      return state;

    default:
      return state;
  }
};

export default trains;
