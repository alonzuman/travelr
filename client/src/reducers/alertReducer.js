const initialState = {
  msg: '',
  color: '',
  isOn: false,
}

export const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ALERT':
      return {
        ...state,
        msg: payload.msg,
        color: payload.color,
        isOn: true
      }
    case 'CLEAR_ALERT':
      return {
        ...state,
        msg: '',
        color: '',
        isOn: false
      }
    default: return state;
  }
}
