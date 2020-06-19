import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { alertReducer } from './alertReducer';
import { jobReducer } from './jobReducer';
import { adminReducer } from './adminReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  jobs: jobReducer,
  admin: adminReducer,
});
