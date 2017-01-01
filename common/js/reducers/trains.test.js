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

  it('should handle FETCH_TRAINS_SUCCESS', () => {
    // no new items
    expect(
      reducer(defaultState,
        {
          type: constants.FETCH_TRAINS_SUCCESS,
          payload: []
        }
      )
    )
    .to.deep.equal(mockedTrains);
  });

  it('should handle UPDATE_TRAIN_SUCCESS', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.UPDATE_TRAIN_SUCCESS,
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

  it('should handle CLEAR_TRAINS', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.CLEAR_TRAINS
        }
      )
    )
    .to.deep.equal(defaultState);
  });

  it('should handle SAVE_TRAIN_SUCCESS', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.SAVE_TRAIN_SUCCESS,
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
