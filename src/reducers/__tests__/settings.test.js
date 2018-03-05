import * as settingsActions from "../../actions/settings";
import types from "../../constants/actionTypes";
import initialState from "../initialState";
import settingsReducer from "../settings";

const {describe, it} = global;

let settings = null;

describe("settings reducer unitest", () => {
  beforeEach(() => {
    settings = settingsReducer(initialState.settings, {type: "INITIAL"});
  });

  it("should 測試開關 sidebar", () => {
    const openSidebarAction = settingsActions.handleSidebar({sidebar: true});
    const closeSidebarAction = settingsActions.handleSidebar({sidebar: false});
    expect(settings.sidebar).toBe(false);
    
    const afterOpenSidebar = settingsReducer(settings, openSidebarAction);
    expect(afterOpenSidebar.sidebar).toBe(true);

    const afterCloseSidebar = settingsReducer(afterOpenSidebar, closeSidebarAction);

    expect(afterCloseSidebar.sidebar).toBe(false);
  });
});