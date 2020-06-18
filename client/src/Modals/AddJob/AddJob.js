import React from 'react';
import { addJob } from '../../actions';
import { useDispatch } from 'react-redux';

export default function AddJob() {
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const job = {hi: 'foo'}
    dispatch(addJob(job))
  }

  return (
    <form onSubmit={handleSubmit}>
      Add Job modal
      <button type='submit'>Submit</button>
    </form>
  )
}
