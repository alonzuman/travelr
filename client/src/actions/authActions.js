import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './index';


//////////////
// LOAD USER /
//////////////
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/auth');
    dispatch({
      type: 'USER_LOADED',
      payload: res.data
    })
  } catch (error) {
    // console.log(error.response.data.msg);
    dispatch({ type: 'AUTH_ERROR' });
  }
}

//////////////
//// LOGIN ///
//////////////
export const login = (user) => async dispatch => {
  // dispatch login request
  dispatch({ type: 'LOGIN_REQUEST' });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/v1/users/login', user, config);
    const token = res.data.token;
    localStorage.setItem('token', token)
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        token
      }
    })
    dispatch(setAlert({ msg: 'Welcome', color: 'success' }));
    dispatch(loadUser());
  } catch (error) {
    // console.log(error.response.data.msg);
    dispatch(setAlert({ msg: 'Auth error', color: 'danger' }));
    // TODO Set alerts
  }
}

//////////////
// REGISTER //
//////////////
export const register = (user) => async dispatch => {
  dispatch({ type: 'REGISTER_REQUEST' });

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post('/api/v1/users', user, config);
    const token = res.data.token;
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: {
        token
      }
    })
    dispatch(loadUser());
  } catch (error) {
    // console.log(error.response.data.msg);
    dispatch({ type: 'AUTH_ERROR' });
    dispatch(setAlert({ msg: error.response.data.msg, color: 'danger' }));
  }
}

//////////////
/// LOGOUT ///
//////////////
export const logout = () => async dispatch => {
  dispatch({ type: 'LOGOUT_REQUEST' });
  dispatch({
    type: 'LOGOUT'
  });
  dispatch(setAlert({ msg: 'Logged out successfully', color: 'success' }));
}
