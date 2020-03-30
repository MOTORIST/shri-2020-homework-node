import { combineReducers } from 'redux';
import { common } from './common';
import { settings } from './settings';

const rootReducer = combineReducers({
  common,
  settings,
});

export default rootReducer;
