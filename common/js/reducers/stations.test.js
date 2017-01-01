import reducer from './stations';
import * as constants from './constants';
import * as mock from '../mock';
import { expect } from 'chai';

describe('stations reducer', () => {
  const defaultState = [];
  const mockedStations = mock.stations;

  beforeEach(() => {});

  it('should return the inital state', () => {
    expect(
      reducer(undefined, {})
    )
    .to.deep.equal(defaultState);
  });

  it('should handle FETCH_STATIONS_SUCCESS', () => {
    // no new items
    expect(
      reducer(defaultState,
        {
          type: constants.FETCH_STATIONS_SUCCESS,
          payload: []
        }
      )
    )
    .to.deep.equal(mockedStations);
  });

  it('should handle UPDATE_STATION_SUCCESS', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.UPDATE_STATION_SUCCESS,
          payload: [
            {
              id: 2,
              name: 'Seven Hills',
              address: {
                street: 'No 4, blue Street',
                suburb: 'Seven Hills',
                postcode: '4000', // changed to 4000 from 2000
                state: 'NSW'
              },
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
          name: 'Seven Hills',
          address: {
            street: 'No 4, blue Street',
            suburb: 'Seven Hills',
            postcode: '4000',
            state: 'NSW'
          }
        }
      ]
    );
  });

  it('should handle CLEAR_STATIONS', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.CLEAR_STATIONS
        }
      )
    )
    .to.deep.equal(defaultState);
  });

  it('should handle SAVE_STATION_SUCCESS', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.SAVE_STATION_SUCCESS,
          payload: [
            {
              id: defaultState.reduce((total, num) => Math.max(total, num.id), - 1) + 1,
              name: 'Bloogtown',
              address: {
                street: 'No 4, blue Street',
                suburb: 'Seven Hills',
                postcode: '4000',
                state: 'NSW'
              }
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
          name: 'Bloogtown',
          address: {
            street: 'No 4, blue Street',
            suburb: 'Seven Hills',
            postcode: '4000',
            state: 'NSW'
          }
        },
      ]
    );
  });
});
