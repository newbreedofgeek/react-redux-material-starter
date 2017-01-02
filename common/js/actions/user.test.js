import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';
import * as constants from '../reducers/constants';
import * as actions from './user';

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('redux: user (auth) aync actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create USER_LOGIN_SUCCESS when fetching login is done', () => {
    nock('https://private-c1cb6-stationmanager.apiary-mock.com/')
      .post('/auth')
      .reply(200, {
        token: '12345'
      });

    const formData = {
      username: 'test',
      password: 'test',
      isAdmin: false,
    };

    const expectedActions = [
      {
        type: constants.USER_LOGIN_SUCCESS,
        payload: {
          ...formData,
          token: '12345'
        }
      }
    ];

    const store = mockStore({ user: [] });

    return store.dispatch(actions.login(formData))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
  });
});
