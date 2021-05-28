import React from 'react';
import moment from 'moment';

function Listing({job}) {

  const dateNum = parseInt(job.date_posted, 10);
  const dateObject = new Date(dateNum);
  const humanDateFormat = dateObject.toLocaleString();
  return (
    <div id="listing-wrapper">
      <div id="first-row">
        <div id="jobTitle">
          <span> {job.title} | {job.employment_type}</span>
          <br/>
        </div>
        <span style={{'fontSize': '1.1em', 'fontStyle': 'italic', 'fontWeight': 'bold'}}> {job.organization}</span>
        <br/>
        <br/>
        <span>{job.type_work}</span>
        <br/>
        <span>Experience Required: {job.experience_level}</span>
        <br/>
        <span>{`Salary: $${job.salary}`}</span>
      </div>
      <div id="description-wrapper">
        {job.description}
      <br/>
      <span style={{'fontSize': '0.8em', 'fontStyle': 'italic'}}>{moment(humanDateFormat).fromNow()}</span>
      </div>
    </div>
  )
}

export default Listing;
