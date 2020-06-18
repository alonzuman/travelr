import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { jobReducer } from './jobReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  jobs: jobReducer,
});
