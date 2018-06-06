import { combineReducers } from 'redux';
import { app } from './app';
import { loader } from './loader';

const rootReducer = combineReducers({
  app,
  loader
});

export default rootReducer;
