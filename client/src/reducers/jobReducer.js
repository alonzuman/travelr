const initialState = {
  myJobs: [],
  totalHours: null,
  isLoading: false
}

export const jobReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_HOURS':
    case 'LOAD_JOBS':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_TOTAL_HOURS':
      return {
        ...state,
        totalHours: payload
      }
    case 'ADD_JOB':
      return {
        ...state,
        myJobs: [
          ...state.myJobs,
          payload
        ]
      }
    case 'SET_JOBS':
      return {
        ...state,
        myJobs: payload.jobs,
        isLoading: false
      }
    default: return state;
  }
}
