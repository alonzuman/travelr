const initialState = {
  tours: [],
  tour: {},
  isLoading: false
}

export const tourReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOADING_TOURS':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_TOURS':
      return {
        ...state,
        isLoading: false,
        tours: payload
      }
    default: return state;
  }
}
