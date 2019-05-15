import { combineReducers } from 'redux';
import { clickReducer } from './clickReducer';

export const reducers = combineReducers({
  clickButton: clickReducer
})