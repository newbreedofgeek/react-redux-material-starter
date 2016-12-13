import * as constants from './constants';

const defaultState = [
  {
    id: 1,
    stationId: 1,
    name: 'CitiRail 200',
    role: 'Express',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 2,
    stationId: 1,
    name: 'CitiRail 300',
    role: 'Limited Stops',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 3,
    stationId: 2,
    name: 'CitiRail 400',
    role: 'Regular',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 4,
    stationId: 2,
    name: 'CitiRail 500',
    role: 'Limited Stops',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 5,
    stationId: 3,
    name: 'CitiRail 600',
    role: 'Express',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  },
  {
    id: 6,
    stationId: 3,
    name: 'CitiRail 700',
    role: 'Limited Stops',
    color: 'blue',
    speed: '50 km/h',
    seats: 200
  }
];

const trains = (state = defaultState, { type, payload }) => {
  switch (type) {
    case constants.TRAINS_GET:
      state = [
        ...state,
        ...payload
      ];

      return state;

    case constants.TRAINS_CLEAR:
      return state;

    case constants.TRAIN_UPDATE:
      state = [
        ...state.filter((i) => (i.id != payload[0].id)), // payload has an array of the item that updated, use that to remove it from state without mutating
        ...payload
      ];

      return state;

    case constants.TRAIN_SAVED:
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
