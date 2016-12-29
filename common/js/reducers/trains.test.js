import reducer from './trains';
import * as constants from './constants';
import { expect } from 'chai';

describe('trains reducer', () => {
  let defaultState = [
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

  beforeEach(() => {});

  it('should return the inital state', () => {
    expect(
      reducer(undefined, {})
    )
    .to.deep.equal(defaultState);
  });

  it('should handle TRAINS_GET', () => {
    // no new items
    expect(
      reducer(defaultState,
        {
          type: constants.TRAINS_GET,
          payload: []
        }
      )
    )
    .to.deep.equal(defaultState);

    // 1 new item
    expect(
      reducer(defaultState,
        {
          type: constants.TRAINS_GET,
          payload: [
            {
              id: 7,
              stationId: 2,
              name: 'CitiRail 900',
              role: 'Limited Stops',
              color: 'red',
              speed: '500 km/h',
              seats: 230
            }
          ]
        }
      )
    )
    .to.deep.equal(
      [
        ...defaultState,
        {
          id: 7,
          stationId: 2,
          name: 'CitiRail 900',
          role: 'Limited Stops',
          color: 'red',
          speed: '500 km/h',
          seats: 230
        }
      ]
    );
  });

  it('should handle TRAIN_UPDATE', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.TRAIN_UPDATE,
          payload: [
            {
              id: 2,
              stationId: 1,
              name: 'CitiRail 300',
              role: 'Limited Stops',
              color: 'blue',
              speed: '50 km/h',
              seats: 500 // changed from 200 to 500
            }
          ]
        }
      )
    )
    .to.deep.equal(
      [
        ...defaultState.filter((i) => (i.id != 2)),
        {
          id: 2,
          stationId: 1,
          name: 'CitiRail 300',
          role: 'Limited Stops',
          color: 'blue',
          speed: '50 km/h',
          seats: 500 // changed from 200 to 500
        },
      ]
    );
  });

  it('should handle TRAINS_CLEAR', () => {
    expect(
      reducer({},
        {
          type: constants.TRAINS_CLEAR
        }
      )
    )
    .to.deep.equal(defaultState);
  });

  it('should handle TRAIN_SAVED', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.TRAIN_SAVED,
          payload: [
            {
              id: defaultState.reduce((total, num) => Math.max(total, num.id), - 1) + 1,
              stationId: 1,
              name: 'CitiRail 900',
              role: 'All Stops',
              color: 'green',
              speed: '150 km/h',
              seats: 100
            }
          ]
        }
      )
    )
    .to.deep.equal(
      [
        ...defaultState,
        {
          id: defaultState.reduce((total, num) => Math.max(total, num.id), - 1) + 1,
          stationId: 1,
          name: 'CitiRail 900',
          role: 'All Stops',
          color: 'green',
          speed: '150 km/h',
          seats: 100
        },
      ]
    );
  });
});
