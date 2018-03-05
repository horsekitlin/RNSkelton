import * as settingsActions from '../settings';
import types from '../../constants/actionTypes';

const {describe, it, expect} = global;

describe("settings action unitest", () => {
  it("should test handle sidebar event", () => {
    const payload = {
      sidebar: true
    };

    const expectedAction = {
      type: types.HANDLE_SIDEBAR,
      payload
    };
    expect(settingsActions.handleSidebar(payload)).toEqual(expectedAction);
  });
});