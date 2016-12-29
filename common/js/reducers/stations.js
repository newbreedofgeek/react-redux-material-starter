import * as constants from './constants';

const defaultState = [
  {
    id: 1,
    name: 'Auburn',
    address: {
      street: 'No 284, Pitt Street',
      suburb: 'Auburn',
      postcode: '2000',
      state: 'NSW'
    },
  },
  {
    id: 2,
    name: 'Seven Hills',
    address: {
      street: 'No 4, blue Street',
      suburb: 'Seven Hills',
      postcode: '2000',
      state: 'NSW'
    },
  },
  {
    id: 3,
    name: 'Blacktown',
    address: {
      street: 'No 24, brown Street',
      suburb: 'Blacktown',
      postcode: '2000',
      state: 'NSW'
    },
  }
];

const stations = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.STATIONS_GET:
      state = [
        ...state,
        ...payload
      ];

      return state;

    case constants.STATION_UPDATE:
      state = [
        ...state.filter((i) => (i.id != payload[0].id)), // payload has an array of the item that updated, use that to remove it from state without mutating
        ...payload
      ];

      return state;

    case constants.STATIONS_CLEAR:
      return defaultState;

    case constants.STATION_SAVED:
      state = [
        ...state,
        ...payload
      ];

      return state;

    default:
      return state;
  }
};

export default stations;
