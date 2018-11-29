import { combineReducers } from 'redux';
import { city } from './city';
import { citiesList } from './cities';

export default combineReducers({ city, citiesList });