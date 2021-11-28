import types from '~/constants/actionTypes';
import {settingState} from './initialState';

const stopFetching = (setting, payload) => {
  const {fetchingTypes} = setting;
  const nextFetchingTypes = {};

  Object.keys(fetchingTypes).forEach((key) => {
    if (key !== payload) {
      fetchingTypes[key] = 'LOADING';
    }
  });

  return {...setting, fetchingTypes: nextFetchingTypes};
};

const startFetching = (setting, payload) => {
  const nextFetchingTypes = {...setting.fetchingTypes, [payload]: 'LOADING'};
  return {
    ...setting,
    fetchingTypes: nextFetchingTypes,
  };
};

export default function routeReducer(
  setting = settingState,
  {type, payload},
) {
  switch (type) {
    case types.START_FETCHING:
      return startFetching(setting, payload);
    case types.STOP_FETCHING:
      return stopFetching(setting, payload);
    default:
      return setting;
  }
}
