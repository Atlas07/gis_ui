import { combineReducers } from 'redux';
import auth from './auth';
import city from './city';
import education from './education';
import vacancy from './vacancy';

export default combineReducers({
  auth,
  cities: city,
  univercities: education,
  vacancy,
});
