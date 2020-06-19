import axios from 'axios';

export const getUser = (id) => async dispatch => {
  dispatch({
    type: 'LOAD_USER'
  });
  try {
    const res = await axios.get(`/api/v1/users/${id}`);
    dispatch({
      type: 'SET_USER',
      payload: res.data
    })
  } catch (error) {
    dispatch({ type: 'SET_ALERT', payload: {msg: 'Failed to fetch user', color: 'danger' }})
  }
}

export const makeAdmin = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`/api/v1/users/${id}/makeAdmin`, config);
    console.log(res.data);
    if (res.status === 201) {
      dispatch({
        type: 'SET_ALERT',
        payload: {msg: 'Success!', color: 'success'}
      })
      console.log(res.data.user)
      dispatch({
        type: 'MAKE_ADMIN',
        payload: res.data.user
      })
    }
  } catch (error) {
    // dispatch({ type: 'SET_ALERT', payload: { msg: res.data.msg, color: 'danger' } })
  }
}

export const removeAdmin = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const res = await axios.post(`/api/v1/users/${id}/removeAdmin`, config);
    console.log(res.data);
    if (res.status === 201) {
      dispatch({
        type: 'SET_ALERT',
        payload: { msg: 'Success!', color: 'success' }
      })
      dispatch({
        type: 'REMOVE_ADMIN',
        payload: id
      })
    }
  } catch (error) {
    // dispatch({ type: 'SET_ALERT', payload: { msg: res.data.msg, color: 'danger' } })
  }
}

export const getAllUsers = () => async dispatch => {
  dispatch({
    type: 'LOAD_USERS'
  })
  try {
    const res = await axios.get('/api/v1/users');
    dispatch({
      type: 'SET_USERS',
      payload: res.data.users
    })
  } catch (error) {
    dispatch({ type: 'SET_ALERT', payload: {msg: 'Failed to fetch users', color: 'danger' }})
  }
}

export const getAllAdmins = () => async dispatch => {
  // GET AND SET ALL ADMINS
}
