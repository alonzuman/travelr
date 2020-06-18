import axios from 'axios';
import { setAlert } from './index';

export const getTopTours = () => async dispatch => {
  try {
    const res = await axios.get('/api/v1/tours');
    dispatch({ type: 'LOADING_TOURS' });
    dispatch ({
      type: 'SET_TOURS',
      payload: res.data.tours
    })
  } catch (error) {
    // console.log(error)
    dispatch(setAlert({ msg: 'Server error, please refresh the page', color: 'danger' }))
  }
}

export const getTour = (id) => async dispatch => {
  console.log(`getting tour...${id}`);
};

export const addTour = (tour) => async dispatch => {
  console.log('adding tour...')
}
