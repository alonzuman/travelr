import axios from 'axios';

export const setTotalHours = (jobs) => dispatch => {
  let hours = 0;
  jobs.forEach(job => {
    if (job.approved) {
      return hours += job.hours
    }
  })
  dispatch({
    type: 'LOAD_HORUS'
  });
  dispatch({
    type: 'SET_TOTAL_HOURS',
    payload: hours
  })
}

export const addJob = (job) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    }

    const body = { job }
    const res = await axios.post('/api/v1/jobs', body, config)
    console.log(res.data.newJob)
    // dispatch({ type: 'ADD_JOB', payload: res.data.newJob })
    dispatch({ type: 'SET_ALERT', payload: { msg: res.data.msg, color: 'success' }})
    // SET_ALERT
  } catch (error) {
    console.log(error);
    // SET_ALERT
  }
}

export const getMyJobs = () => async dispatch => {
  dispatch({ type: 'LOAD_JOBS' })
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    }
    const res = await axios.get('/api/v1/jobs', config);
    dispatch({ type: 'SET_JOBS', payload: res.data })
    // SET_JOBS
  } catch (error) {
    console.log(error);
    // SET_ALERT
  }
}

export const approveJob = (id) => async dispatch => {
  dispatch({
    type: 'LOAD_APPROVAL'
  });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    }

    const res = await axios.post(`/api/v1/jobs/${id}/approve`, config);
    console.log(res.data);
    // SET_ALERTS
    dispatch({ type: 'SET_ALERT', payload: {msg: 'Approved!', color: 'success'} })
  } catch (error) {
    console.log(error);
    dispatch({ type: 'SET_ALERT', payload: {msg: 'Error', color: 'danger'} })
    // SET_ALERTS
  }
}

export const unapproveJob = (id) => async dispatch => {
  dispatch({
    type: 'LOAD_APPROVAL'
  });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    }

    const res = await axios.post(`/api/v1/jobs/${id}/unapprove`, config);
    console.log(res.data);
    // SET_ALERTS
    dispatch({ type: 'SET_ALERT', payload: { msg: 'Approved!', color: 'success' } })
  } catch (error) {
    console.log(error);
    dispatch({ type: 'SET_ALERT', payload: { msg: 'Error', color: 'danger' } })
    // SET_ALERTS
  }
}
