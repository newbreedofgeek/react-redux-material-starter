import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as constants from '../reducers/constants';
import * as actions from './stations';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('stations aync actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create FETCH_STATIONS_SUCCESS when fetching stations is done', () => {
    nock('https://private-c1cb6-stationmanager.apiary-mock.com/')
      .get('/stations')
      .reply(200, []);

    const expectedActions = [
      {
        type: constants.FETCH_STATIONS_SUCCESS,
        payload: []
      }
    ];

    const store = mockStore({ stations: [] });

    return store.dispatch(actions.getStations())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
});
