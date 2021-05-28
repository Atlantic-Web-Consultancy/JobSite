import React from 'react';

function Listing({job}) {
  () => {
    console.log('hello')
  }
  return (
    <div id="listing-wrapper">
      <div id="first-row">
        <span> {job.title} | {job.employment_type}</span>
        <br/>
        <span> {(job.employer_id === null ? '' : `${job.employer_id} |`)}  {job.experience_level}</span>
        <br/>
        <span> {job.location} | {job.salary}</span>
      </div>
      <div id="description-wrapper">
        {job.description}
      </div>
      <br/>
      <span>{job.date_posted}</span>
    </div>
  )
}

export default Listing;
