import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalHours } from '../../../actions';

export default function Stats() {
  const dispatch = useDispatch();
  const { totalHours, isLoading, myJobs } = useSelector(state => state.jobs)

  useEffect(() => {
    dispatch(setTotalHours(myJobs))
  }, [myJobs])

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
      <div>
        <h1>Total: { totalHours }</h1>
      </div>}
    </div>
  )
}
