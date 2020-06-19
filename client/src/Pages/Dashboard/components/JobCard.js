import React from 'react';
import { approveJob, unapproveJob } from '../../../actions';
import { useDispatch } from 'react-redux';

export default function JobCard({job}) {
  const dispatch = useDispatch()

  return (
    <div>
      <p>{job.description}</p>
      <p>{job.date}</p>
      <p>{job.hours}</p>
      {job.approved ? <div>
        Approved
        <button onClick={() => dispatch(unapproveJob(job._id))}>Unapprove Job</button>
      </div> :
      <div>
          Unapproved
        <button onClick={() => dispatch(approveJob(job._id))}>Approve Job</button>
      </div>}
    </div>
  )
}
