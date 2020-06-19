export const setAlert = ({msg, color}) => dispatch => {
  dispatch({
    type: 'SET_ALERT',
    payload: {
      msg,
      color
    }
  })
  setTimeout(() => {
    dispatch(clearAlert());
  }, 5000);
}

export const clearAlert = () => dispatch => {
  dispatch({
    type: 'CLEAR_ALERT'
  })
}
