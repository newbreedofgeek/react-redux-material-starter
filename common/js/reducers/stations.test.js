import reducer from './stations';
import * as constants from './constants';
import { expect } from 'chai';

describe('stations reducer', () => {
  let defaultState = [
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

  beforeEach(() => {});

  it('should return the inital state', () => {
    expect(
      reducer(undefined, {})
    )
    .to.deep.equal(defaultState);
  });

  it('should handle STATIONS_GET', () => {
    // no new items
    expect(
      reducer(defaultState,
        {
          type: constants.STATIONS_GET,
          payload: []
        }
      )
    )
    .to.deep.equal(defaultState);

    // 1 new item
    expect(
      reducer(defaultState,
        {
          type: constants.STATIONS_GET,
          payload: [
            {
              id: 4,
              name: 'Q Hill',
              address: {
                street: 'No 24, Hill Street',
                suburb: 'Q Hill',
                postcode: '2134',
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
          id: 4,
          name: 'Q Hill',
          address: {
            street: 'No 24, Hill Street',
            suburb: 'Q Hill',
            postcode: '2134',
            state: 'NSW'
          }
        }
      ]
    );
  });

  it('should handle STATION_UPDATE', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.STATION_UPDATE,
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

  it('should handle STATIONS_CLEAR', () => {
    expect(
      reducer({},
        {
          type: constants.STATIONS_CLEAR
        }
      )
    )
    .to.deep.equal(defaultState);
  });

  it('should handle STATION_SAVED', () => {
    expect(
      reducer(defaultState,
        {
          type: constants.STATION_SAVED,
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
