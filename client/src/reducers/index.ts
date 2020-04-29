import { combineReducers } from 'redux';
import { common } from './common';
import { settings } from './settings';
import { builds } from './builds';

const rootReducer = combineReducers({
  common,
  settings,
  builds,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
