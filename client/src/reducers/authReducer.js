const initialState = {
  isLoading: false,
  isAuth: false,
  token: localStorage.getItem('token'),
  user: null
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'REGISTER_REQUEST':
    case 'LOGIN_REQUEST':
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        isLoading: true
      }
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuth: true,
      }
    case 'USER_LOADED':
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        user: payload.user
      }
    case 'AUTH_ERROR':
    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        isAuth: false,
        isLoading: false
      }
    default: return state;
  }
}
