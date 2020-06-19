import React, { useState } from 'react';
import { addJob, setAlert } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from "react-datepicker";
import { Redirect } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

export default function AddJob() {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const myJobs = useSelector(state => state.jobs.myJobs)

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const job = {
      date, description, hours
    }
    try {
      dispatch(addJob(job));
      setSubmitted(true);
    } catch (error) {
      dispatch(setAlert({msg: 'Failed posting new hours, please try again', color: 'danger'}))
    }
  }

  if (submitted) {
    return <Redirect to='/' />
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Date</label>
          <DatePicker required selected={date} onChange={e => setDate(e)} />
        </div>
        <div className='form-group'>
          <label>Description</label>
          <input required type='string' value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Hours</label>
          <input required type='number' value={hours} onChange={e => setHours(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
