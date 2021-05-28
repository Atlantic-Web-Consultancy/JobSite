import React from 'react';
import moment from 'moment';

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
        <div id="jobTitle">
          <span> {job.title} | {job.employment_type}</span>
        </div>
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
      <span style={{'font-size': '0.8em', 'font-style': 'italic'}}>{moment(humanDateFormat).fromNow()}</span>
      </div>
    </div>
  )
}

export default Listing;
