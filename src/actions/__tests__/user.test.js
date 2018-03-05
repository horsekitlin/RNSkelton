import * as userActions from '../user';
import types from '../../constants/actionTypes';

const {describe, it, expect} = global;

describe("settings action unitest", () => {
  it("should test handle sidebar event", () => {
    const payload = {
      account: 'test@gmail.com',
      password: 'abc123456'
    };

    const expectedAction = {
      type: types.LOGIN,
      payload
    };
    expect(userActions.handleLogin(payload)).toEqual(expectedAction);
  });
});