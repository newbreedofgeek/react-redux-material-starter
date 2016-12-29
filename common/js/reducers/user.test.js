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

  it('should handle USER_LOGGED_IN', () => {
    expect(
      reducer({},
        {
          type: constants.USER_LOGGED_IN,
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

  it('should handle USER_LOG_IN_ERROR', () => {
    expect(
      reducer({},
        {
          type: constants.USER_LOG_IN_ERROR
        }
      )
    )
    .to.deep.equal(
      {}
    );
  });

  it('should handle USER_LOGGED_OUT', () => {
    expect(
      reducer(
        {
          username: 'test',
          password: 'test',
          isAdmin: false,
          token: '12345'
        },
        {
          type: constants.USER_LOGGED_OUT
        }
      )
    )
    .to.deep.equal(
      {}
    );
  });
});
