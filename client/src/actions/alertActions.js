export const setAlert = ({msg, color, id}) => dispatch => {
  dispatch({
    type: 'SET_ALERT',
    payload: {
      msg,
      color,
      id
    }
  })
  setTimeout(() => {
    dispatch(clearAlert());
  }, 25000);
}

export const clearAlert = () => dispatch => {
  dispatch({
    type: 'CLEAR_ALERT'
  })
}
