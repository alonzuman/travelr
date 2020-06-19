const initialState = {
  user: {},
  users: [],
  isLoading: false,
  admins: [],
  pendingApproval: []
}

export const adminReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'LOAD_USERS':
    case 'LOAD_USER':
    case 'LOAD_ACTION':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_USER':
      return {
        ...state,
        user: {user: payload.user, jobs: payload.jobs},
        isLoading: false
      }
    case 'SET_USERS':
      return {
        ...state,
        isLoading: false,
        users: payload
      }
    case 'MAKE_ADMIN':
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          isAdmin: true
        },
        admins: [
          ...state.admins,
          payload
        ]
      }
    case 'REMOVE_ADMIN':
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          isAdmin: false
        },
        admins: state.admins.filter(admin => admin._id !== payload.id)
      }
    default: return state;
  }
}
