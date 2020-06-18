import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { tourReducer } from './tourReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  tours: tourReducer
});
