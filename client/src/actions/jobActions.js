import axios from 'axios';

export const addJob = (job) => async dispatch => {
  console.log(`adding job...`);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const job = {
      hi: 'bye'
    }

    const res = await axios.post('/api/v1/jobs', job, config)
    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}
