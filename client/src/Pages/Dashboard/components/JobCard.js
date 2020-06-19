import React from 'react'

export default function JobCard({job}) {
  return (
    <div>
      <p>{job.description}</p>
      <p>{job.date}</p>
      <p>{job.hours}</p>
      {job.isApproved ? 'approved' : 'not approved'}
    </div>
  )
}
