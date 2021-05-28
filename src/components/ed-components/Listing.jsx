import React from 'react';

function Listing({job}) {

  const dateNum = parseInt(job.date_posted, 10);
  const dateObject = new Date(dateNum);
  const humanDateFormat = dateObject.toLocaleString();
  const testFunc = () => {
    console.log('test',dateNum)
  }
  return (
    <div id="listing-wrapper">
      <div id="first-row">
        <span> {job.title} | {job.employment_type}</span>
        <br/>
        <span> {(job.employer_id === null ? '' : `${job.employer_id} |`)}  {job.experience_level}</span>
        <br/>
        <span> {`zip code: ${job.location}`} | {`Salary: ${job.salary}`}</span>
      </div>
      <div id="description-wrapper">
        {job.description}
      </div>
      <br/>
      <span>{humanDateFormat}</span>
    </div>
  )
}

export default Listing;
