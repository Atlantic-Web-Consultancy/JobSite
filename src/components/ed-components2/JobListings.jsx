import React, { useState } from 'react';

import Listing from './Listing.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function JobListings() {
  const [job, setJob] = useState('');
  const [zip, setZip] = useState('');

  const handleChange = () => {
    if (event.target.name === 'job') {
      setJob(event.target.value);
    }
    if (event.target.name === 'zip') {
      setZip(event.target.value);
    }
  }

  return (
    <div id="wrapper" >
      <div id="listing-header">
        header
        <div>
          <input id="job-search" placeholder="Job Title or Keyword" name="job" value={job} onChange={handleChange} />
          <input id="zip-search" placeholder="Zipcode or Location" name="zip" value={zip} onChange={handleChange} />
          <button>search</button>
        </div>
      </div>
      <div id="content">
        <div id="listings">
          <h2 style={{ textAlign: "center" }}>Listings </h2>
          <ul id="listings-ul">
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </ul>
        </div>
        <div id="filters">
          <h3>Filters section</h3>
          <div id="filter-box">
            <ul>
              Place holder list items for filter options
              <li>$</li>
              <li>Distance</li>
              <li>Interest</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobListings;