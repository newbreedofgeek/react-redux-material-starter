import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as constants from '../reducers/constants';
import * as actions from './trains';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('redux: trains aync actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create FETCH_TRAINS_SUCCESS when fetching trains is done', () => {
    nock('https://private-c1cb6-stationmanager.apiary-mock.com/')
      .get('/trains')
      .reply(200, []);

    const expectedActions = [
      {
        type: constants.FETCH_TRAINS_SUCCESS,
        payload: []
      }
    ];

    const store = mockStore({ trains: [] });

    return store.dispatch(actions.getTrains())
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
});
