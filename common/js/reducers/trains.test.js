import reducer from './trains';
import * as constants from './constants';
import * as mock from '../mock';
import { expect } from 'chai';

describe('trains reducer', () => {
  const defaultState = [];
  const mockedTrains = mock.trains;

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
    .to.deep.equal(mockedTrains);
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
      reducer(defaultState,
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
