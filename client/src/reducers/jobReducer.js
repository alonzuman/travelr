const initialState = {
  jobs: [],
}

export const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_JOB':
      return {
        ...state,
        jobs: [
          ...state.jobs,
          payload
        ]
      }
    default: return state;
  }
}
