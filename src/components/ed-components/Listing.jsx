import React from 'react';
import moment from 'moment';

function Listing({job}) {

  const dateNum = parseInt(job.date_posted, 10);
  const dateObject = new Date(dateNum);
  const humanDateFormat = dateObject.toLocaleString();
  return (
    <div className="tabs">
      <h2>{job.title} | {job.employment_type}</h2>
      <section>{job.organization}</section>
      <section>{job.description}</section>
      <br />
      <section>Type of Work: {job.type_work}</section>
      <section>Experience Required: {job.experience_level}</section>
      <br />
      <section>Salary: ${job.salary}</section>
      <section>{moment(humanDateFormat).fromNow()}</section>
      <br />
      <div id="applyButton">Apply Today!</div>
    </div>
  )
}

export default Listing;
