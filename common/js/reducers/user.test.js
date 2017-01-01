import reducer from './user';
import * as constants from './constants';
import { expect } from 'chai';

describe('user reducer', () => {
  it('should return the inital state', () => {
    expect(
      reducer(undefined, {})
    )
    .to.deep.equal(
      {}
    );
  });

  it('should handle USER_LOGIN_SUCCESS', () => {
    expect(
      reducer({},
        {
          type: constants.USER_LOGIN_SUCCESS,
          payload: {
            username: 'test',
            password: 'test',
            isAdmin: false,
            token: '12345'
          }
        }
      )
    )
    .to.deep.equal(
      {
        username: 'test',
        password: 'test',
        isAdmin: false,
        token: '12345'
      }
    );
  });

  it('should handle USER_LOGIN_ERROR', () => {
    expect(
      reducer({},
        {
          type: constants.USER_LOGIN_ERROR
        }
      )
    )
    .to.deep.equal(
      {}
    );
  });

  it('should handle USER_LOGOUT_SUCCESS', () => {
    expect(
      reducer(
        {
          username: 'test',
          password: 'test',
          isAdmin: false,
          token: '12345'
        },
        {
          type: constants.USER_LOGOUT_SUCCESS
        }
      )
    )
    .to.deep.equal(
      {}
    );
  });
});
